import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import { getStripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { createDiscordInvite } from "@/lib/discord";
import { sendInviteEmail } from "@/lib/email";

// Next.js должен получать тело запроса как есть (не распарсенным),
// иначе проверка подписи Stripe не пройдёт.
export const runtime = "nodejs";

const PLANS = ["monthly", "yearly", "mentorship_full", "mentorship_split"] as const;
type Plan = (typeof PLANS)[number];

function resolvePlan(value: string | undefined): Plan {
  return PLANS.find((p) => p === value) ?? "monthly";
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    await prisma.processedWebhookEvent.create({ data: { id: event.id } });
  } catch {
    console.log(`Event ${event.id} already processed, skipping.`);
    return NextResponse.json({ received: true, deduped: true });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    await handleSuccessfulCheckout(session);
  }

  return NextResponse.json({ received: true });
}

async function handleSuccessfulCheckout(session: Stripe.Checkout.Session) {
  const email = session.customer_email ?? session.customer_details?.email;
  if (!email) {
    console.error("Checkout session has no email, cannot fulfill:", session.id);
    return;
  }

  const plan = resolvePlan(session.metadata?.plan);
  const isMentorship = plan.startsWith("mentorship");
  const normalizedEmail = email.trim().toLowerCase();

  const address = session.customer_details?.address;
  const ipFromMetadata = session.metadata?.ip_address;

  const purchase = await prisma.purchase.upsert({
    where: { stripeSessionId: session.id },
    update: {
      status: "PAID",
      plan,
      stripeCustomerId: (session.customer as string) ?? undefined,
      stripeSubscriptionId: (session.subscription as string) ?? undefined,
      billingName: session.customer_details?.name ?? undefined,
      billingLine1: address?.line1 ?? undefined,
      billingLine2: address?.line2 ?? undefined,
      billingCity: address?.city ?? undefined,
      billingState: address?.state ?? undefined,
      billingPostalCode: address?.postal_code ?? undefined,
      billingCountry: address?.country ?? undefined,
      ipAddress:
        ipFromMetadata && ipFromMetadata !== "unknown" ? ipFromMetadata : undefined,
    },
    create: {
      email,
      plan,
      stripeSessionId: session.id,
      stripeCustomerId: (session.customer as string) ?? undefined,
      stripeSubscriptionId: (session.subscription as string) ?? undefined,
      status: "PAID",
      billingName: session.customer_details?.name ?? undefined,
      billingLine1: address?.line1 ?? undefined,
      billingLine2: address?.line2 ?? undefined,
      billingCity: address?.city ?? undefined,
      billingState: address?.state ?? undefined,
      billingPostalCode: address?.postal_code ?? undefined,
      billingCountry: address?.country ?? undefined,
      ipAddress:
        ipFromMetadata && ipFromMetadata !== "unknown" ? ipFromMetadata : undefined,
    },
  });

  await prisma.lead.updateMany({
    where: {
      email: { equals: normalizedEmail, mode: "insensitive" },
      convertedAt: null,
    },
    data: { convertedAt: new Date() },
  });
  await prisma.newsletterSubscriber.updateMany({
    where: {
      email: { equals: normalizedEmail, mode: "insensitive" },
      convertedAt: null,
    },
    data: { convertedAt: new Date() },
  });

  // Уведомление владельцу об оплате менторства. Сбой не должен ломать webhook.
  if (isMentorship) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const amount =
        session.amount_total != null
          ? `${(session.amount_total / 100).toFixed(2)} ${(session.currency ?? "").toUpperCase()}`
          : "unknown";
      await resend.emails.send({
        from: "The Merchant Standard <hello@themerchantstandard.com>",
        to: process.env.MENTORSHIP_NOTIFY_EMAIL ?? "support@themerchantstandard.com",
        subject: `Mentorship payment received: ${email}`,
        html: `
          <p><strong>Plan:</strong> ${escapeHtml(plan)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Name:</strong> ${escapeHtml(session.customer_details?.name ?? "unknown")}</p>
          <p><strong>Amount:</strong> ${escapeHtml(amount)}</p>
          <p><strong>Stripe session:</strong> ${escapeHtml(session.id)}</p>
          <p>Start onboarding: Week 1 kickoff and private WhatsApp setup.</p>
        `,
      });
    } catch (err) {
      console.error("Mentorship notification email failed:", err);
    }
  }

  const claim = await prisma.purchase.updateMany({
    where: { id: purchase.id, discordInviteUrl: null },
    data: { discordInviteUrl: "pending" },
  });

  if (claim.count === 0) {
    console.log(`Purchase ${purchase.id} already has an invite, skipping.`);
    return;
  }

  const inviteUrl = await createDiscordInvite();

  await prisma.purchase.update({
    where: { id: purchase.id },
    data: { discordInviteUrl: inviteUrl },
  });

  await sendInviteEmail(email, inviteUrl);

  await prisma.purchase.update({
    where: { id: purchase.id },
    data: { emailSentAt: new Date() },
  });
}
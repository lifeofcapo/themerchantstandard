import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { createDiscordInvite } from "@/lib/discord";
import { sendInviteEmail } from "@/lib/email";

// Next.js должен получать тело запроса как есть (не распарсенным),
// иначе проверка подписи Stripe не пройдёт.
export const runtime = "nodejs";

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

  const purchase = await prisma.purchase.upsert({
    where: { stripeSessionId: session.id },
    update: {
      status: "PAID",
      stripeCustomerId: (session.customer as string) ?? undefined,
      stripeSubscriptionId: (session.subscription as string) ?? undefined,
    },
    create: {
      email,
      stripeSessionId: session.id,
      stripeCustomerId: (session.customer as string) ?? undefined,
      stripeSubscriptionId: (session.subscription as string) ?? undefined,
      status: "PAID",
    },
  });

  if (purchase.discordInviteUrl) {
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
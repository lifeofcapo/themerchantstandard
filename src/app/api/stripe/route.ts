import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getStripe, isStripeConfigured, MERCHANT_STANDARD_PRICE_ID } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

const bodySchema = z.object({
  email: z.string().email(),
});

function getClientIp(req: NextRequest): string | null {
  // Vercel/most proxies set x-forwarded-for as "client, proxy1, proxy2"
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp;
  return null;
}

export async function POST(req: NextRequest) {
  if (!isStripeConfigured) {
    return NextResponse.json(
      {
        error: "unavailable",
        message: "Payments are temporarily unavailable. Please try again later.",
      },
      { status: 503 }
    );
  }

  const body = await req.json().catch(() => null);
  const parsed = bodySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const { email } = parsed.data;
  const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL;
  const ipAddress = getClientIp(req);

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer_email: email,
      line_items: [{ price: MERCHANT_STANDARD_PRICE_ID, quantity: 1 }],
      payment_method_types: ["card", "paypal"],
      billing_address_collection: "required",
      success_url: `${origin}/welcome?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?checkout=canceled`,
      allow_promotion_codes: true,
      metadata: {
        ip_address: ipAddress ?? "unknown",
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: "Could not start checkout." }, { status: 500 });
    }

    try {
      await prisma.purchase.create({
        data: {
          email,
          stripeSessionId: session.id,
          status: "PENDING",
          ipAddress: ipAddress ?? undefined,
        },
      });
    } catch (dbErr) {
      console.error("Failed to pre-create purchase row:", dbErr);
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout session creation failed:", err);
    return NextResponse.json(
      {
        error: "unavailable",
        message: "Payments are temporarily unavailable. Please try again later.",
      },
      { status: 503 }
    );
  }
}
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getStripe, isStripeConfigured, MERCHANT_STANDARD_PRICE_ID } from "@/lib/stripe";

const bodySchema = z.object({
  email: z.string().email(),
});

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

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer_email: email,
      line_items: [{ price: MERCHANT_STANDARD_PRICE_ID, quantity: 1 }],
      // Stripe отображает карту, Apple Pay/Google Pay (автоматически, по устройству)
      // и PayPal, если PayPal включён в настройках Stripe-аккаунта.
      payment_method_types: ["card", "paypal"],
      success_url: `${origin}/welcome?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?checkout=canceled`,
      allow_promotion_codes: true,
    });

    if (!session.url) {
      return NextResponse.json({ error: "Could not start checkout." }, { status: 500 });
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

import Stripe from "stripe";

// Stripe is optional at boot time: if the secret key isn't configured, the
// site should still render and function — checkout just responds with a
// "temporarily unavailable" message instead of crashing the whole app.
export const isStripeConfigured = Boolean(
  process.env.STRIPE_SECRET_KEY && process.env.STRIPE_PRICE_ID
);

let stripeClient: Stripe | null = null;

export function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  if (!stripeClient) {
    stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-07-29.dahlia",
    });
  }
  return stripeClient;
}

// $50/month — set this Price ID up once in the Stripe Dashboard
// (Product catalog -> create a recurring $50/month price) and paste the ID here via env.
export const MERCHANT_STANDARD_PRICE_ID = process.env.STRIPE_PRICE_ID ?? "";

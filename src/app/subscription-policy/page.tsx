import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/shared/legal-page-layout";

export const metadata: Metadata = {
  title: "Subscription Policy — The Merchant Standard",
  description: "Billing, renewal, and cancellation terms for The Merchant Standard membership.",
};

export default function SubscriptionPolicyPage() {
  return (
    <LegalPageLayout title="Subscription Policy" updated="August 23, 2026">
      <p>
        This policy explains how billing, renewal, and cancellation work for The
        Merchant Standard membership. It should be read alongside our{" "}
        <a href="/terms">Terms & Conditions</a>.
      </p>

      <section>
        <h2>1. Billing</h2>
        <p>
          Membership is <strong>$50 per month</strong>, billed automatically to the
          payment method you provide at checkout. Payments are processed securely by
          Stripe; we don&apos;t store your full card details on our own servers.
        </p>
      </section>

      <section>
        <h2>2. Automatic renewal</h2>
        <p>
          Your membership renews automatically each month on the date you originally
          subscribed, unless you cancel before the next billing date. There&apos;s no
          fixed-term contract — you&apos;re never locked in beyond the current billing
          period.
        </p>
      </section>

      <section>
        <h2>3. How to cancel</h2>
        <p>
          You can cancel anytime from the Manage Membership page (linked in the
          footer) or by emailing{" "}
          <a href="mailto:info@merchantstandard.com">info@merchantstandard.com</a>.
          Cancelling stops future renewals — it doesn&apos;t retroactively refund the
          current billing period.
        </p>
      </section>

      <section>
        <h2>4. Access after cancellation</h2>
        <p>
          When you cancel, you keep full access to the curriculum, Merchant Library,
          Merchant AI, and the Discord community until the end of your current billing
          period. After that date, access ends automatically — there&apos;s no manual
          removal step required on your part.
        </p>
      </section>

      <section>
        <h2>5. Failed payments</h2>
        <p>
          If a renewal payment fails (for example, an expired card), we&apos;ll
          attempt to notify you by email and Stripe will retry the charge a limited
          number of times. If payment continues to fail, your membership and Discord
          access may be paused until billing is resolved.
        </p>
      </section>

      <section>
        <h2>6. Refunds</h2>
        <p>
          Because membership grants immediate access to the full curriculum and
          community, payments are generally non-refundable once a billing period has
          started. If you believe you were charged in error, contact us at{" "}
          <a href="mailto:info@merchantstandard.com">info@merchantstandard.com</a> and
          we&apos;ll review it on a case-by-case basis.
        </p>
      </section>

      <section>
        <h2>7. Price changes</h2>
        <p>
          If we change the membership price, we&apos;ll notify active members in
          advance by email. Price changes apply to future billing cycles, never
          retroactively to a period you&apos;ve already paid for.
        </p>
      </section>

      <section>
        <h2>8. Payment methods</h2>
        <p>
          Checkout supports major credit/debit cards, along with Apple Pay, Google
          Pay, and PayPal where enabled by Stripe for your region.
        </p>
      </section>

      <section>
        <h2>9. Contact</h2>
        <p>
          For billing questions or help managing your subscription, email{" "}
          <a href="mailto:info@merchantstandard.com">info@merchantstandard.com</a>.
        </p>
      </section>
    </LegalPageLayout>
  );
}

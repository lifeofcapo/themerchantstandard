import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/shared/legal-page-layout";

export const metadata: Metadata = {
  title: "Privacy Policy — The Merchant Standard",
  description: "How The Merchant Standard collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" updated="August 23, 2026">
      <p>
        This Privacy Policy explains what information The Merchant Standard
        collects, how we use it, and the choices you have. By using the Service, you
        agree to the practices described here.
      </p>

      <section>
        <h2>1. Information we collect</h2>
        <p>We collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Account & payment information</strong> — the email address you
            provide at checkout, plus payment details handled directly by Stripe (we
            never see or store your full card number).
          </li>
          <li>
            <strong>Community data</strong> — your Discord username/ID once you join
            the server, and messages, screenshots, or files you choose to share in the
            community or with the Merchant AI bot.
          </li>
          <li>
            <strong>Usage data</strong> — basic website analytics such as pages
            visited and general device/browser information.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. How we use your information</h2>
        <ul>
          <li>To process your membership payment and manage your subscription</li>
          <li>To create and send your Discord invite after a successful purchase</li>
          <li>To provide the Merchant AI assistant&apos;s responses to what you share with it</li>
          <li>To send transactional emails (invite delivery, billing notices, support replies)</li>
          <li>To maintain the security and integrity of the community</li>
        </ul>
        <p>We don&apos;t sell your personal information to third parties.</p>
      </section>

      <section>
        <h2>3. Third-party services we use</h2>
        <ul>
          <li><strong>Stripe</strong> — payment processing and subscription billing</li>
          <li><strong>Discord</strong> — community hosting and the Merchant AI bot&apos;s messaging interface</li>
          <li><strong>Resend</strong> — transactional email delivery (invite links, receipts)</li>
        </ul>
        <p>
          Each of these providers processes data under their own privacy policies in
          addition to this one.
        </p>
      </section>

      <section>
        <h2>4. Screenshots and conversations shared with Merchant AI</h2>
        <p>
          When you share a screenshot or conversation with the Merchant AI bot, that
          content is processed in order to generate sales guidance for you. Please
          avoid sharing more personal information than necessary — for example,
          consider cropping out a buyer&apos;s full name or contact details when
          they&apos;re not needed for the advice you&apos;re asking for.
        </p>
      </section>

      <section>
        <h2>5. Data retention</h2>
        <p>
          We retain account and billing records for as long as needed to provide the
          Service and to meet our legal and tax obligations. If you cancel your
          membership, we may retain limited records of your past purchase for
          accounting purposes even after your access ends.
        </p>
      </section>

      <section>
        <h2>6. Your choices</h2>
        <ul>
          <li>You can request a copy of the personal information we hold about you</li>
          <li>You can request that we delete your account information, subject to legal retention requirements</li>
          <li>You can leave the Discord server at any time, which removes your access to community content</li>
        </ul>
        <p>
          To make a request, email{" "}
          <a href="mailto:info@merchantstandard.com">info@merchantstandard.com</a>.
        </p>
      </section>

      <section>
        <h2>7. Security</h2>
        <p>
          We use reasonable technical and organizational measures to protect your
          information, including relying on established providers (Stripe, Discord)
          for sensitive data handling. No method of transmission or storage is
          completely secure, and we can&apos;t guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>8. Children&apos;s privacy</h2>
        <p>
          The Service is not directed at, and is not intended for use by, anyone
          under 18. We don&apos;t knowingly collect personal information from minors.
        </p>
      </section>

      <section>
        <h2>9. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Material changes will
          be posted here with a new &quot;Last updated&quot; date.
        </p>
      </section>

      <section>
        <h2>10. Contact</h2>
        <p>
          Questions about this policy or your data? Email{" "}
          <a href="mailto:info@merchantstandard.com">info@merchantstandard.com</a>.
        </p>
      </section>
    </LegalPageLayout>
  );
}

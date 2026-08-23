import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/shared/legal-page-layout";

export const metadata: Metadata = {
  title: "Content Moderation Policy — The Merchant Standard",
  description: "Community conduct rules and moderation practices for the Merchant Standard Discord.",
};

export default function ContentModerationPolicyPage() {
  return (
    <LegalPageLayout title="Content Moderation Policy" updated="August 23, 2026">
      <p>
        The Merchant Standard Discord is a vetted, paid community. This policy
        explains what we expect from members and how we moderate content — including
        content shared with the Merchant AI assistant — to keep the space useful and
        safe.
      </p>

      <section>
        <h2>1. What this covers</h2>
        <p>
          This policy applies to everything posted, shared, or sent inside the
          Merchant Standard Discord server, including messages, screenshots, files,
          and conversations with the Merchant AI bot.
        </p>
      </section>

      <section>
        <h2>2. Community standards</h2>
        <p>Members are expected to:</p>
        <ul>
          <li>Treat other merchants and staff with respect — no harassment, hate speech, or personal attacks</li>
          <li>Keep buyer information (names, contact details, screenshots) reasonably anonymized when shared for feedback</li>
          <li>Only share deal screenshots and conversations for the purpose of getting sales guidance</li>
          <li>Not use the community to solicit unrelated products, services, or recruit for other paid programs</li>
          <li>Not share or request account access, invite links, or membership credentials outside of official channels</li>
        </ul>
      </section>

      <section>
        <h2>3. Prohibited content</h2>
        <p>The following are never permitted, in chat or when messaging the Merchant AI bot:</p>
        <ul>
          <li>Illegal content of any kind</li>
          <li>Content that sexualizes, exploits, or endangers minors</li>
          <li>Threats of violence, doxxing, or targeted harassment</li>
          <li>Deceptive or fraudulent sales practices presented as advice to follow</li>
          <li>Malware, phishing links, or other harmful technical content</li>
        </ul>
      </section>

      <section>
        <h2>4. How the Merchant AI bot fits in</h2>
        <p>
          The Merchant AI bot reads screenshots and conversations members share in
          order to give sales strategy — it&apos;s a tool for practicing negotiation
          and pricing, not a substitute for your own judgment. Messages sent to the
          bot are subject to the same standards as the rest of the server, and may be
          reviewed for moderation and safety purposes.
        </p>
      </section>

      <section>
        <h2>5. Reporting a problem</h2>
        <p>
          If you see content that violates this policy, report it to a moderator in
          the Discord or email{" "}
          <a href="mailto:info@merchantstandard.com">info@merchantstandard.com</a>. We
          review reports as promptly as we can.
        </p>
      </section>

      <section>
        <h2>6. Enforcement</h2>
        <p>
          Depending on the severity and frequency of a violation, we may remove
          content, issue a warning, temporarily restrict access, or terminate
          membership without a refund for the current billing period. Serious
          violations (illegal content, threats, or exploitation of minors) result in
          immediate, permanent removal and may be reported to relevant authorities.
        </p>
      </section>

      <section>
        <h2>7. Changes to this policy</h2>
        <p>
          We may update this policy as the community grows. Material changes will be
          posted here with an updated date, and announced in the Discord where
          practical.
        </p>
      </section>
    </LegalPageLayout>
  );
}

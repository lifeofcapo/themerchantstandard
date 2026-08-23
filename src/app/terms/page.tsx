import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/shared/legal-page-layout";

export const metadata: Metadata = {
  title: "Terms & Conditions — The Merchant Standard",
  description: "The terms that govern your use of The Merchant Standard membership.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions" updated="August 23, 2026">
      <p>
        These Terms & Conditions (&quot;Terms&quot;) govern access to and use of The
        Merchant Standard membership, website, Discord community, and any related
        services (together, the &quot;Service&quot;), operated by The Merchant Standard
        (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By purchasing a membership or
        otherwise using the Service, you agree to these Terms. If you don&apos;t agree,
        please don&apos;t use the Service.
      </p>

      <section>
        <h2>1. Who can join</h2>
        <p>
          You must be at least 18 years old, or the age of majority in your
          jurisdiction, to purchase a membership. By joining, you confirm that you meet
          this requirement and that the information you provide (including your email
          address) is accurate.
        </p>
      </section>

      <section>
        <h2>2. What membership includes</h2>
        <p>The Merchant Standard membership provides access to:</p>
        <ul>
          <li>The Sales Campus and Business Operations Campus curriculum</li>
          <li>The Merchant Library (playbooks, scripts, objection library)</li>
          <li>A private, invite-only Discord community</li>
          <li>The Merchant AI assistant, provided inside the Discord server</li>
          <li>Access to the Partner Catalog track, once approved</li>
        </ul>
        <p>
          Features and content may be added, changed, or retired over time as the
          curriculum and community evolve. We&apos;ll make reasonable efforts to notify
          members of material changes.
        </p>
      </section>

      <section>
        <h2>3. Educational purpose, no guaranteed results</h2>
        <p>
          Everything taught within The Merchant Standard — including the curriculum,
          scripts, pricing frameworks, and Merchant AI outputs — is provided for
          educational and informational purposes only. We do not guarantee any
          specific income, sales volume, or business outcome. Your results depend on
          your own effort, market conditions, and factors outside our control.
        </p>
      </section>

      <section>
        <h2>4. Your account and conduct</h2>
        <p>
          You&apos;re responsible for keeping your account and Discord access secure
          and for all activity under your account. You agree not to share your
          membership access with people who haven&apos;t purchased it, resell access,
          or use the Service for any unlawful purpose. See our{" "}
          <a href="/content-moderation-policy">Content Moderation Policy</a> for
          community conduct rules.
        </p>
      </section>

      <section>
        <h2>5. Intellectual property</h2>
        <p>
          All curriculum content, scripts, templates, branding, and other materials
          provided through the Service are owned by The Merchant Standard or its
          licensors and are provided to members for personal, non-commercial use.
          You may not reproduce, redistribute, or resell this content without our
          written permission.
        </p>
      </section>

      <section>
        <h2>6. Third-party services</h2>
        <p>
          The Service relies on third-party providers, including Stripe for payment
          processing and Discord for community hosting. Your use of those services is
          also subject to their own terms. We&apos;re not responsible for outages or
          changes made by those providers.
        </p>
      </section>

      <section>
        <h2>7. Termination</h2>
        <p>
          We may suspend or terminate your access to the Service if you violate these
          Terms or the Content Moderation Policy. You may cancel your membership at
          any time — see our <a href="/subscription-policy">Subscription Policy</a>{" "}
          for details on how cancellation affects access.
        </p>
      </section>

      <section>
        <h2>8. Disclaimer and limitation of liability</h2>
        <p>
          The Service is provided &quot;as is&quot; without warranties of any kind. To
          the fullest extent permitted by law, The Merchant Standard is not liable for
          any indirect, incidental, or consequential damages arising from your use of
          the Service, including business losses or lost profits.
        </p>
      </section>

      <section>
        <h2>9. Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. If we make material changes,
          we&apos;ll post the updated Terms here with a new &quot;Last updated&quot;
          date. Continued use of the Service after changes take effect means you
          accept the updated Terms.
        </p>
      </section>

      <section>
        <h2>10. Contact</h2>
        <p>
          Questions about these Terms? Email us at{" "}
          <a href="mailto:info@merchantstandard.com">info@merchantstandard.com</a>.
        </p>
      </section>
    </LegalPageLayout>
  );
}

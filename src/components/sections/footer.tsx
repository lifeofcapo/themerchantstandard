import Link from "next/link";

const legalLinks = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/subscription-policy", label: "Subscription Policy" },
  { href: "/content-moderation-policy", label: "Content Moderation Policy" },
  { href: "/privacy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-line pb-10 md:flex-row">
          <div>
            <p className="font-display text-lg text-parchment">
              The Merchant <span className="text-brass">Standard</span>
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-parchment/50">
              Everything taught within The Merchant Standard is for educational
              purposes. It is up to each student to implement and do the work.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-parchment/60 transition-colors hover:text-brass"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-parchment/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} The Merchant Standard. All rights reserved. All course materials, content, software, branding, logos, trademarks, graphics, designs, videos, documents and other intellectual property made available through this platform are protected by copyright, trademark and other applicable intellectual property laws. No part may be copied, reproduced, distributed, modified, transmitted, displayed, published, sold, licensed or shared without prior written consent.</p>
          <p>
            Need support? <span className="text-parchment">Contact Us</span>{" "} 
            <a href="mailto:info@merchantstandard.com" className="text-brass hover:underline">
              info@merchantstandard.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
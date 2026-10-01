import Link from "next/link";
import { FaInstagram, FaTelegram, FaXTwitter } from "react-icons/fa6";

const legalLinks = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/subscription-policy", label: "Subscription Policy" },
  { href: "/content-moderation-policy", label: "Content Moderation Policy" },
  { href: "/privacy", label: "Privacy Policy" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/themerchantstandard?stkn=enVoZHpwMnNjZTY=",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://t.me/themerchantstandard",
    label: "Telegram",
    icon: FaTelegram,
  },
  {
    href: "https://x.com/themerchantstd?s=11",
    label: "X",
    icon: FaXTwitter,
  },
];

export function Footer() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-line pb-10 md:flex-row">
          <div>
            <Link
              href="/"
              className="inline-block font-display text-lg text-parchment transition-colors hover:text-brass"
            >
              The Merchant <span className="text-brass">Standard</span>
            </Link>

            <p className="mt-2 max-w-sm text-base leading-relaxed text-parchment/65">
              Everything taught within The Merchant Standard is for educational
              purposes. It is up to each student to implement and do the work.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-base md:items-end">
            <Link
              href="/free-training"
              className="font-semibold text-brass transition-colors hover:text-brass-light"
            >
              Free Training
            </Link>

            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-parchment/80 transition-colors hover:text-brass"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-parchment/65 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} The Merchant Standard. All rights
            reserved. All course materials, content, software, branding,
            logos, trademarks, graphics, designs, videos, documents and other
            intellectual property made available through this platform are
            protected by copyright, trademark and other applicable intellectual
            property laws. No part may be copied, reproduced, distributed,
            modified, transmitted, displayed, published, sold, licensed or
            shared without prior written consent.
          </p>

          <p>
            Need support?{" "}
            <span className="text-parchment">Contact Us</span>{" "}
            <a
              href="mailto:support@themerchantstandard.com"
              className="text-brass hover:underline"
            >
              support@themerchantstandard.com
            </a>
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3 pt-8">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-parchment/70 transition-all hover:border-brass hover:text-brass"
            >
              <Icon size={18} strokeWidth={1.7} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

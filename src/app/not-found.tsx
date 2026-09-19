import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { ArrowRight, FileQuestion } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  robots: { index: false, follow: false },
};

const quickLinks = [
  { href: "/", label: "Back to the ledger", desc: "Home — where the real deals live" },
  { href: "/free-training", label: "Free training", desc: "Watch the mechanism, 12 minutes" },
];

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <div className="ledger-grid absolute inset-0 opacity-40" />
      <div className="bg-gradient-wash-soft absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-lg">
        <Reveal>
          <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center">
            <div className="wax-seal absolute inset-0 rounded-full opacity-90" />
            <div
              aria-hidden
              className="absolute inset-0 rounded-full border-2 border-seal-light/40"
              style={{
                clipPath: "polygon(0 0, 45% 0, 38% 100%, 0% 100%)",
                transform: "translate(-2px, 1px) rotate(-1deg)",
              }}
            />
            <span className="relative rotate-[-8deg] font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-parchment/90">
              Void
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
            Ledger Entry #404
          </p>
        </Reveal>

        <Reveal delay={140}>
          <h1 className="mt-4 text-balance font-display text-4xl text-parchment sm:text-5xl">
            This entry was never{" "}
            <span className="text-gradient-brass italic">recorded</span>.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-5 text-base leading-relaxed text-parchment/80 sm:text-lg">
            No product, no deal, no page — whatever you were looking for isn&apos;t
            in the books. Either the link&apos;s broken, or you tried to close a
            deal that was never on the table.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="btn-shine btn-cta-glow group flex w-full flex-col items-start rounded-2xl border border-line bg-panel px-6 py-4 text-left transition-colors hover:border-brass/40 sm:w-auto sm:min-w-[220px]"
              >
                <span className="flex items-center gap-2 font-display text-base text-parchment">
                  {link.label}
                  <ArrowRight className="h-4 w-4 text-brass transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-1 text-sm text-parchment/65">{link.desc}</span>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mx-auto mt-14 flex max-w-xs items-center gap-3 rounded-xl border border-line bg-ink/60 px-5 py-4 text-left">
            <FileQuestion className="h-5 w-5 shrink-0 text-parchment/50" strokeWidth={1.5} />
            <p className="text-sm leading-relaxed text-parchment/65">
              Think this is a mistake?{" "}
              <a href="mailto:support@themerchantstandard.com" className="text-brass underline underline-offset-2">
                Flag it
              </a>{" "}
              and we&apos;ll fix the record.
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
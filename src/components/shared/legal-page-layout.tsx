import Link from "next/link";
import { ArrowLeft, ScrollText } from "lucide-react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export function LegalPageLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="relative flex-1 overflow-hidden border-b border-line">
        <div className="ledger-grid absolute inset-0 opacity-40" />
        <div className="bg-gradient-wash-soft absolute inset-0 opacity-60" />

        <div className="relative mx-auto max-w-3xl px-6 py-20 sm:py-28">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-parchment/50 transition-colors hover:text-brass"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to home
          </Link>

          <span className="wax-seal mb-6 flex h-12 w-12 items-center justify-center rounded-full">
            <ScrollText className="h-5 w-5 text-parchment" />
          </span>

          <h1 className="text-balance font-display text-3xl leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-parchment/40">
            Last updated {updated}
          </p>

          <div
            className="
              mt-12 flex flex-col gap-8
              text-sm leading-relaxed text-parchment/75
              [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-parchment [&_h2]:mb-3
              [&_p]:leading-relaxed
              [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_ul]:list-disc [&_ul]:marker:text-brass
              [&_a]:text-brass [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-brass-light
              [&_strong]:text-parchment [&_strong]:font-semibold
            "
          >
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

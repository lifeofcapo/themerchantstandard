import Image from "next/image";
import { Check } from "lucide-react";
import { JoinButton } from "@/components/shared/join-button";

const rows = [
  {
    them: "Give away exclusives for scraps",
    us: "A price standard you actually hold",
  },
  {
    them: "Guess what to say mid-negotiation",
    us: "An AI reading the deal with you",
  },
  {
    them: "No product of your own",
    us: "Partner Catalog, ready to sell",
  },
  {
    them: "Screenshots sitting unanswered",
    us: "A structured reply in under a minute",
  },
  {
    them: "Learning the hard way, deal by deal",
    us: "A library built from thousands of closed deals",
  },
  {
    them: "Alone",
    us: "A vetted brotherhood of merchants",
  },
];

const THEIR_WAY_URL =
  "https://www.randstadusa.com/randstad-app/find-jobs/download-traditional/";

export function WhatYouGet() {
  return (
    <section className="border-b border-line bg-panel/40 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-3 rounded-full border border-line px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-parchment/70">
            Two Paths Forward
          </span>
          <h2 className="mt-4 font-display text-3xl text-parchment sm:text-4xl">
            Their Way{" "}
            <span className="text-parchment/30">vs</span>{" "}
            <span className="text-gradient-brass">Our Way</span>
          </h2>
        </div>

        <div className="relative flex flex-col gap-6 md:grid md:grid-cols-2">
          <div className="flex flex-col rounded-3xl border border-line bg-ink px-8 py-10">
            <div className="text-center">
              <h3 className="font-display text-2xl text-parchment/60">
                Their Way
              </h3>

              <div className="mx-auto mt-4 h-px w-16 bg-line" />
            </div>

            <ul className="mt-8 flex flex-1 flex-col gap-4">
              {rows.map((r) => (
                <li key={r.them} className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-parchment/30" />

                  <p className="text-base text-parchment/55">
                    {r.them}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex justify-center">
              <a
                href={THEIR_WAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[260px] rounded-full border border-line bg-panel px-8 py-4 text-center text-base font-semibold text-parchment/60 transition-colors hover:border-parchment/30 hover:text-parchment/80"
              >
                Do It Their Way
              </a>
            </div>
          </div>

          <div className="flex justify-center md:hidden">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brass/50 bg-ink font-display text-sm font-bold text-brass shadow-[0_0_24px_rgba(201,162,39,0.35)]">
              VS
            </span>
          </div>
          <div className="relative flex flex-col overflow-hidden rounded-3xl border border-brass/40 px-8 py-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 120% 100% at 100% 0%, rgba(201,162,39,0.28), transparent 60%), radial-gradient(ellipse 100% 80% at 0% 100%, rgba(201,162,39,0.16), transparent 60%)",
              }}
            />
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 opacity-25 blur-2xl">
              <Image
                src="/logo1.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="relative flex items-center justify-center gap-3">
              <span className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-brass/30">
                <Image
                  src="/logo1.png"
                  alt=""
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </span>

              <h3 className="font-display text-2xl text-parchment">
                The Merchant Standard
              </h3>
            </div>
            <div className="relative mx-auto mt-4 h-px w-16 bg-brass/30" />

            <ul className="relative mt-8 flex flex-1 flex-col gap-4">
              {rows.map((r) => (
                <li key={r.us} className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-brass" />

                  <p className="text-base text-parchment/85">
                    {r.us}
                  </p>
                </li>
              ))}
            </ul>

            <div className="relative mt-10 flex justify-center">
              <JoinButton
                label="Join The Merchant Standard"
                className="w-full max-w-[260px] shadow-[0_0_30px_rgba(201,162,39,0.4)]"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brass/50 bg-ink font-display text-base font-bold text-brass shadow-[0_0_24px_rgba(201,162,39,0.35)]">
              VS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

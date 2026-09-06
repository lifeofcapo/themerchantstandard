import { X, Check } from "lucide-react";
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

export function WhatYouGet() {
  return (
    <section className="border-b border-line bg-panel/40 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-3 text-xs uppercase tracking-[0.2em] text-brass">
            Two Paths
          </span>
          <h2 className="font-display text-3xl text-parchment sm:text-4xl">
            Their Way vs.{" "}
            <span className="text-gradient-brass">Our Way</span>
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line">
          <div className="grid grid-cols-2 border-b border-line">
            <div className="border-r border-line bg-ink px-6 py-4">
              <h3 className="font-display text-base text-parchment/40">Their Way</h3>
            </div>
            <div className="bg-panel px-6 py-4">
              <h3 className="font-display text-base text-brass">
                The Merchant Standard
              </h3>
            </div>
          </div>

          {rows.map((r, i) => (
            <div
              key={r.them}
              className={[
                "grid grid-cols-2",
                i < rows.length - 1 ? "border-b border-line" : "",
              ].join(" ")}
            >
              <div className="flex items-start gap-3 border-r border-line bg-ink px-6 py-4">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-parchment/25" />
                <p className="text-sm text-parchment/40">{r.them}</p>
              </div>
              <div className="flex items-start gap-3 bg-panel px-6 py-4">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                <p className="text-sm text-parchment/80">{r.us}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <JoinButton />
        </div>
      </div>
    </section>
  );
}
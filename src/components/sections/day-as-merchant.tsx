"use client";

import * as React from "react";
import { JoinButton } from "@/components/shared/join-button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    step: "01",
    emoji: "📲",
    headline: "Wakes up, checks Discord.",
    body: "Three new artist replies overnight. While everyone else was asleep, the pipeline was working.",
  },
  {
    step: "02",
    emoji: "📦",
    headline: "Opens Partner Catalog, picks the products.",
    body: "Finds the right fit for each artist — didn't make a single beat himself.",
  },
  {
    step: "03",
    emoji: "🤖",
    headline: "Buyer lowballs.",
    body: "Screenshots the chat, drops it in Discord. Merchant AI hands him the exact reply to send.",
  },
  {
    step: "04",
    emoji: "💰",
    headline: "Deal closed. $1,150 exclusive.",
    body: "Sends the file, logs the payment. One conversation, one standard held.",
    highlight: true,
  },
  {
    step: "05",
    emoji: "🏆",
    headline: "Drops the win in #wins.",
    body: "The room reacts. He's not doing this alone — and the next deal's already in the pipeline.",
  },
  {
    step: "06",
    emoji: "🔒",
    headline: "Closes the laptop by noon.",
    body: "That's the job. Six months ago he'd never sold anything.",
  },
];

export function DayAsMerchant() {
  const [active, setActive] = React.useState(0);

  const prev = () => setActive((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setActive((i) => (i === slides.length - 1 ? 0 : i + 1));

  const slide = slides[active];

  return (
    <section className="relative overflow-hidden border-b border-line py-24">
      <div className="ledger-grid absolute inset-0 opacity-40" />
      <div className="bg-gradient-wash-soft absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-3 text-xs uppercase tracking-[0.2em] text-brass">
            A Day in The Standard
          </span>
          <h2 className="font-display text-3xl text-parchment sm:text-4xl">
            A normal day for a{" "}
            <span className="text-gradient-brass">merchant inside The Standard</span>
          </h2>
          <p className="mt-4 font-display text-base italic text-parchment/50">
            Six months ago he&apos;d never sold anything. Here&apos;s his Tuesday now 👇
          </p>
        </div>
        <div className="relative mx-auto max-w-2xl">
          <div
            className={[
              "relative overflow-hidden rounded-2xl border bg-panel p-10 text-center transition-all duration-300",
              slide.highlight
                ? "border-brass/50 shadow-[0_0_60px_-10px_rgba(201,162,39,0.35)]"
                : "border-line",
            ].join(" ")}
          >
            {slide.highlight && (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,162,39,0.12), transparent 70%)",
                }}
              />
            )}

            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-parchment/30">
                Step {slide.step}
              </p>
              <div className="mt-4 text-5xl">{slide.emoji}</div>
              <h3
                className={[
                  "mt-5 font-display text-2xl",
                  slide.highlight ? "text-gradient-brass" : "text-parchment",
                ].join(" ")}
              >
                {slide.headline}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-parchment/60">
                {slide.body}
              </p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel text-parchment/60 transition-colors hover:border-brass/40 hover:text-brass"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={[
                    "h-1.5 rounded-full transition-all duration-300",
                    i === active
                      ? "w-6 bg-brass"
                      : "w-1.5 bg-parchment/20 hover:bg-parchment/40",
                  ].join(" ")}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel text-parchment/60 transition-colors hover:border-brass/40 hover:text-brass"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="mt-14 flex justify-center">
          <JoinButton label="I want that → Join" />
        </div>
      </div>
    </section>
  );
}
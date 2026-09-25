"use client";

import * as React from "react";
import Image from "next/image";
import { JoinButton } from "@/components/shared/join-button";
import { Smartphone, Package, Bot, DollarSign, Trophy, Lock, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const slides = [
  {
    step: "01",
    icon: Smartphone,
    headline: "Wakes up, checks Discord.",
    body: "Three new artist replies overnight. While everyone else was asleep, the pipeline was working.",
    accent: "from-slate-700/40 via-slate-900/60 to-ink",
    image: "/images/day-in-standard/photo-1758773263238-1989d0cc788c.avif",
  },
  {
    step: "02",
    icon: Package,
    headline: "Opens Partner Catalog, picks the products.",
    body: "Finds the right fit for each artist — didn't make a single beat himself.",
    accent: "from-amber-900/30 via-slate-900/60 to-ink",
    image: "/images/day-in-standard/photo-1642090104665-fadf84dbe164.avif",
  },
  {
    step: "03",
    icon: Bot,
    headline: "Buyer lowballs.",
    body: "Screenshots the chat, drops it in Discord. Merchant AI hands him the exact reply to send.",
    accent: "from-sky-900/30 via-slate-900/60 to-ink",
    image: "/images/day-in-standard/03-negotiation.jpg",
  },
  {
    step: "04",
    icon: DollarSign,
    headline: "Deal closed. $1,150 exclusive.",
    body: "Sends the file, logs the payment. One conversation, one standard held.",
    highlight: true,
    accent: "from-brass/25 via-slate-900/60 to-ink",
    image: "/images/day-in-standard/04-closed.jpg",
  },
  {
    step: "05",
    icon: Trophy,
    headline: "Drops the win in #wins.",
    body: "The room reacts. He's not doing this alone — and the next deal's already in the pipeline.",
    accent: "from-emerald-900/25 via-slate-900/60 to-ink",
    image: "/images/day-in-standard/05-community.jpg",
  },
  {
    step: "06",
    icon: Lock,
    headline: "Closes the laptop by noon.",
    body: "That's the job. Six months ago he'd never sold anything.",
    accent: "from-slate-800/35 via-slate-900/60 to-ink",
    image: "/images/day-in-standard/photo-1768766367333-c8b015e350d9.avif",
  },
];

export function DayAsMerchant() {
  const [active, setActive] = React.useState(0);
  const [imageOk, setImageOk] = React.useState(true);

  const prev = () => {
    setImageOk(true);
    setActive((i) => (i === 0 ? slides.length - 1 : i - 1));
  };
  const next = () => {
    setImageOk(true);
    setActive((i) => (i === slides.length - 1 ? 0 : i + 1));
  };

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
          <p className="mt-4 flex items-center justify-center gap-2 font-accent text-base italic text-parchment/65">
            Six months ago he&apos;d never sold anything. Here&apos;s his Tuesday now
            <ChevronDown className="h-4 w-4 not-italic" />
          </p>
        </div>

        <div className="relative mx-auto max-w-2xl">
          <div
            className={[
              "relative overflow-hidden rounded-2xl border bg-panel text-center transition-all duration-300",
              slide.highlight
                ? "border-brass/50 shadow-[0_0_60px_-10px_rgba(201,162,39,0.35)]"
                : "border-line",
            ].join(" ")}
          >
            {imageOk && (
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  className="object-cover opacity-25"
                  onError={() => setImageOk(false)}
                />
              </div>
            )}
            <div
              className={`absolute inset-0 bg-gradient-to-b ${slide.accent}`}
            />
            {slide.highlight && (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,162,39,0.18), transparent 70%)",
                }}
              />
            )}

            <div className="relative px-10 py-12">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-parchment/65">
                Step {slide.step}
              </p>
              <div className="mt-4 flex justify-center"><slide.icon className="h-10 w-10 text-brass" strokeWidth={1.5} /></div>
                <h3
                  className={[
                    "mt-5 font-display text-2xl",
                    slide.highlight ? "text-gradient-brass" : "text-parchment",
                  ].join(" ")}
                >
                  {slide.headline}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-parchment/80">
                  {slide.body}
                </p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel text-parchment/80 transition-colors hover:border-brass/40 hover:text-brass"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setImageOk(true);
                    setActive(i);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={[
                    "h-1.5 rounded-full transition-all duration-300",
                    i === active ? "w-6 bg-brass" : "w-1.5 bg-parchment/20 hover:bg-parchment/40",
                  ].join(" ")}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel text-parchment/80 transition-colors hover:border-brass/40 hover:text-brass"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-8 flex justify-center px-6 sm:px-0">
            <JoinButton label="Get This Life — Join Now" />
          </div>
        </div>
      </div>
    </section>
  );
}
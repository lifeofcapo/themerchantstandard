"use client";

import * as React from "react";
import Image from "next/image";
import { JoinButton } from "@/components/shared/join-button";
import { Reveal } from "@/components/shared/reveal";

const reviews = [
  "/images/reviews/review2.jpg",
  "/images/reviews/review3.jpg",
  "/images/reviews/review4.jpg",
  "/images/reviews/review5.jpg",
  "/images/reviews/review6.jpg",
  "/images/reviews/review7.jpg",
  "/images/reviews/review8.jpg",
  "/images/reviews/review9.jpg",
  "/images/reviews/review10.jpg",
  "/images/reviews/review11.jpg",
  "/images/reviews/review1.jpg",
];

function ReviewImage({ src, index }: { src: string; index: number }) {
  const [ok, setOk] = React.useState(true);
  if (!ok) return null;

  return (
    <div className="group relative mb-4 overflow-hidden rounded-xl transition-all duration-500 hover:z-10 hover:shadow-[0_0_50px_-12px_rgba(201,162,39,0.45)] sm:mb-5">
      <Image
        src={src}
        alt={`Student result ${index + 1}`}
        width={0}
        height={0}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
        onError={() => setOk(false)}
      />
      <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-brass/60" />
    </div>
  );
}

export function OurStudentsAreWinning() {
  return (
    <section className="relative overflow-hidden border-b border-line py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-panel/30 to-ink" />
      <div className="absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-brass/10 blur-3xl" />
      <div className="absolute -right-40 bottom-1/4 h-[420px] w-[420px] rounded-full bg-brass/5 blur-3xl" />
      <div className="ledger-grid absolute inset-0 opacity-40" />
      <div className="bg-gradient-wash-soft absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-14 flex flex-col items-center text-center">
            <span className="inline-flex items-center rounded-full border border-line bg-panel px-6 py-3 font-accent text-sm text-parchment">
              The Merchant Standard Wins
            </span>
            <h2 className="mt-6 font-display text-3xl text-parchment sm:text-4xl">
              Our Merchants Are <span className="text-gradient-brass">Winning</span>
            </h2>
          </div>
        </Reveal>

      <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3">
        {reviews.map((src, i) => (
          <Reveal key={src} delay={(i % 3) * 120} className="break-inside-avoid">
            <ReviewImage src={src} index={i} />
          </Reveal>
        ))}
      </div>

        <Reveal delay={200}>
          <div className="mt-14 flex justify-center">
            <JoinButton label="I want results like this → Join" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
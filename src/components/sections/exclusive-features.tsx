"use client";

import * as React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { JoinButton } from "@/components/shared/join-button";
import { Reveal } from "@/components/shared/reveal";

type Part = { t: string; b?: boolean };

const features: {
  title: string;
  image: string;
  points: Part[][];
}[] = [
  {
    title: "Step-By-Step Learning",
    image: "/images/exclusive-features/step-by-step.png",
    points: [
      [{ t: "Ready product catalog", b: true }, { t: ", no beats required" }],
      [{ t: "Repeatable " }, { t: "outreach and pricing system", b: true }],
      [{ t: "Objection library, scripts and SOPs" }],
    ],
  },
  {
    title: "Merchant AI",
    image: "/images/exclusive-features/merchant-ai.png",
    points: [
      [{ t: "Screenshot the chat, get the " }, { t: "exact reply", b: true }],
      [{ t: "Closes " }, { t: "objections, follow-ups and upsells", b: true }],
      [{ t: "Holds your " }, { t: "price standard", b: true }, { t: " in every deal" }],
    ],
  },
  {
    title: "An Exclusive Community",
    image: "/images/exclusive-features/feature.png",
    points: [
      [{ t: "A vetted " }, { t: "brotherhood of merchants", b: true }],
      [{ t: "Weekly " }, { t: "live deal clinics", b: true }],
      [{ t: "Deal Room", b: true }, { t: " with real closed cases" }],
    ],
  },
];

const PHOTO_MASK = [
  "linear-gradient(to right, transparent 0%, #000 18%, #000 82%, transparent 100%)",
  "linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)",
];

const photoMask: React.CSSProperties = {
  WebkitMaskImage: PHOTO_MASK.join(", "),
  WebkitMaskComposite: "source-in",
  maskImage: PHOTO_MASK.join(", "),
  maskComposite: "intersect",
};

function FeatureCard({
  title,
  image,
  points,
}: (typeof features)[number]) {
  const [imageOk, setImageOk] = React.useState(true);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-panel via-ink/80 to-panel transition-all duration-500 hover:border-brass/50 hover:shadow-[0_0_50px_-12px_rgba(201,162,39,0.35)] md:flex-row md:items-stretch">
      <div className="relative h-[220px] w-full shrink-0 md:h-[260px] md:w-[46%]">
        {imageOk && (
          <div className="absolute inset-0" style={photoMask}>
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 768px) 46vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              onError={() => setImageOk(false)}
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 pb-8 pt-2 text-center md:items-start md:px-10 md:py-8 md:text-left">
        <h3 className="font-display text-2xl text-parchment transition-colors duration-500 group-hover:text-brass sm:text-3xl">
          {title}
        </h3>

        <div className="mt-1 flex w-full flex-col items-center gap-3 md:items-start">
          {points.map((parts, i) => (
            <div
              key={i}
              className="flex w-fit max-w-full items-center gap-3 rounded-full border border-line bg-ink/60 px-5 py-3 text-left text-sm text-parchment/90 transition-all duration-500 group-hover:border-brass/30 group-hover:bg-ink/80"
            >
              <Check className="h-4 w-4 shrink-0 text-brass" strokeWidth={2.5} />
              <span>
                {parts.map((p, j) =>
                  p.b ? (
                    <strong key={j} className="font-semibold text-parchment">
                      {p.t}
                    </strong>
                  ) : (
                    <React.Fragment key={j}>{p.t}</React.Fragment>
                  )
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExclusiveFeatures() {
  return (
    <section className="relative overflow-hidden border-b border-line py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-panel/30 to-ink" />
      <div className="absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-brass/10 blur-3xl" />
      <div className="absolute -right-40 bottom-1/4 h-[420px] w-[420px] rounded-full bg-brass/5 blur-3xl" />
      <div className="ledger-grid absolute inset-0 opacity-40" />
      <div className="bg-gradient-wash-soft absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <Reveal delay={0}>
            <span className="inline-flex items-center rounded-full border border-line bg-panel px-6 py-3 font-accent text-sm text-parchment">
              Exclusive Features
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-3xl text-parchment sm:text-4xl">
              You Will Get <span className="text-gradient-brass">Access To</span>
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 120}>
              <FeatureCard {...f} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-14 flex justify-center">
            <JoinButton label="Join The Merchant Standard" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
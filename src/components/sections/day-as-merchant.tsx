"use client";

import * as React from "react";
import Image from "next/image";
import { JoinButton } from "@/components/shared/join-button";
import { Reveal } from "@/components/shared/reveal";
import { ChevronDown } from "lucide-react";

const steps = [
  {
    step: "Step 1",
    title: "Wakes up, checks Discord.",
    body: "Three new artist replies overnight. While everyone else was asleep, the pipeline was working.",
    image: "/images/day-in-standard/step1.png",
  },
  {
    step: "Step 2",
    title: "Opens Partner Catalog, picks the products.",
    body: "Finds the right fit for each artist — didn't make a single beat himself.",
    image: "/images/day-in-standard/step2.png",
  },
  {
    step: "Step 3",
    title: "Buyer lowballs.",
    body: "Screenshots the chat, drops it in Discord. Merchant AI hands him the exact reply to send.",
    image: "/images/day-in-standard/step3.png",
  },
  {
    step: "Step 4",
    title: "Deal closed. $1,150 exclusive.",
    body: "Sends the file, logs the payment. One conversation, one standard held.",
    image: "/images/day-in-standard/step4.png",
    highlight: true,
  },
  {
    step: "Step 5",
    title: "Drops the win in #wins.",
    body: "The room reacts. He's not doing this alone — and the next deal's already in the pipeline.",
    image: "/images/day-in-standard/step5.png",
  },
  {
    step: "Step 6",
    title: "Closes the laptop by noon.",
    body: "That's the job. Six months ago he'd never sold anything.",
    image: "/images/day-in-standard/step6.png",
  },
];

function StepCard({
  step,
  title,
  body,
  image,
  highlight,
  index,
}: (typeof steps)[number] & { index: number }) {
  const [imageOk, setImageOk] = React.useState(true);
  const [active, setActive] = React.useState(false);

  const toggleActive = () => setActive((v) => !v);

  return (
    <div
      onClick={toggleActive}
      className={[
        "group flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-panel transition-all duration-500",
        "hover:-translate-y-1.5",
        active ? "-translate-y-1.5" : "",
        highlight
          ? [
              "border-brass/40 hover:border-brass/70 hover:shadow-[0_0_55px_-10px_rgba(201,162,39,0.5)]",
              active ? "border-brass/70 shadow-[0_0_55px_-10px_rgba(201,162,39,0.5)]" : "",
            ].join(" ")
          : [
              "border-line hover:border-brass/50 hover:shadow-[0_0_50px_-12px_rgba(201,162,39,0.35)]",
              active ? "border-brass/50 shadow-[0_0_50px_-12px_rgba(201,162,39,0.35)]" : "",
            ].join(" "),
      ].join(" ")}
    >

      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-line bg-ink">
        {imageOk && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority={index < 3}
            loading={index < 3 ? undefined : "eager"}
            className={[
              "object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.04]",
              active ? "grayscale-0 scale-[1.04]" : "",
            ].join(" ")}
            onError={() => setImageOk(false)}
          />
        )}
        <div
          className={[
            "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-brass/15 via-transparent to-transparent",
            active ? "opacity-100" : "",
          ].join(" ")}
        />
      </div>


      <div className="flex flex-1 flex-col px-6 py-6">
        <span
          className={[
            "w-fit rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-500",
            highlight
              ? "border-brass/50 bg-brass/10 text-brass"
              : [
                  "border-line bg-ink/60 text-parchment/65 group-hover:border-brass/40 group-hover:text-brass",
                  active ? "border-brass/40 text-brass" : "",
                ].join(" "),
          ].join(" ")}
        >
          {step}
        </span>

        <h3
          className={[
            "mt-4 font-display text-xl leading-snug sm:text-2xl",
            highlight ? "text-gradient-brass" : "text-parchment",
          ].join(" ")}
        >
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-parchment/70 sm:text-base">
          {body}
        </p>
      </div>
    </div>
  );
}

export function DayAsMerchant() {
  return (
    <section className="relative overflow-hidden border-b border-line py-24">
      <div className="ledger-grid absolute inset-0 opacity-40" />
      <div className="bg-gradient-wash-soft absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-14 flex flex-col items-center text-center">
            <span className="mb-3 inline-flex items-center rounded-full border border-line bg-panel px-6 py-3 font-accent text-sm text-brass">
              A Day in The Standard
            </span>
            <h2 className="font-display text-3xl text-parchment sm:text-4xl">
              A normal day for a{" "}
              <span className="text-gradient-brass">merchant inside The Standard</span>
            </h2>
            <p className="mt-4 flex items-center justify-center gap-2 font-accent text-base italic text-parchment/65">
              Six months ago he&apos;d never sold anything. Here&apos;s his Tuesday now
              <ChevronDown className="h-4 w-4" />
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={(i % 3) * 120}>
              <StepCard {...s} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 flex justify-center">
            <JoinButton label="Get This Life — Join Now" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
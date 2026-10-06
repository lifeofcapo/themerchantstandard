"use client";

import * as React from "react";
import Image from "next/image";
import { JoinButton } from "@/components/shared/join-button";

const PHOTO_SRC = "/images/are-you-prepared/phones.png";

// плавное растворение всех четырёх краёв фото (16:9, совпадает с файлом 1672×941)
const EDGE_MASK = [
  "linear-gradient(to right, transparent 0%, #000 18%, #000 82%, transparent 100%)",
  "linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)",
];

const edgeMask: React.CSSProperties = {
  WebkitMaskImage: EDGE_MASK.join(", "),
  WebkitMaskComposite: "source-in",
  maskImage: EDGE_MASK.join(", "),
  maskComposite: "intersect",
};

const paragraphs = [
  {
    lead: "Money-making is a skill.",
    body: "Like every other skill it can be learned, and the speed at which it is learned depends on the effort you put in, your coaches and the learning environment you are taught in.",
  },
  {
    lead: "Our coaches use the business models they teach,",
    body: "they know what it takes to be profitable, and they are the first to identify and utilize new disruptive technologies and strategies whenever they appear.",
  },
  {
    lead: "There is no better place on the planet to learn how to make money online today.",
    body: "",
  },
];

export function AreYouPreparedToWork() {
  const [photoOk, setPhotoOk] = React.useState(true);

  return (
    <section className="relative overflow-hidden border-b border-line py-24">
      <div className="ledger-grid absolute inset-0 opacity-40" />
      <div className="bg-gradient-wash-soft absolute inset-0 opacity-60" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-[1fr_1.35fr] md:gap-4">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center rounded-full border border-line bg-panel px-6 py-3 font-accent text-sm text-parchment">
            Ask Yourself
          </span>

          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-parchment sm:text-5xl">
            Are You Prepared To
            <br />
            <span className="text-gradient-brass">Work Hard?</span>
          </h2>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-parchment/80">
            {paragraphs.map((p, i) => (
              <p key={i}>
                <span className="font-semibold text-parchment">{p.lead}</span>
                {p.body && <> {p.body}</>}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <JoinButton label="Join The Merchant Standard" />
          </div>
        </div>
        <div className="relative aspect-[16/9] w-full">
          {photoOk && (
            <div className="absolute inset-0" style={edgeMask}>
              <Image
                src={PHOTO_SRC}
                alt=""
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
                onError={() => setPhotoOk(false)}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
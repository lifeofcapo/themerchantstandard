"use client";

import * as React from "react";
import { VslLeadForm } from "@/components/shared/vsl-lead-form";
import { Button } from "@/components/ui/button";

const YOUTUBE_ID = "YOUR_VIDEO_ID";

export default function JoinPage() {
  const [open, setOpen] = React.useState(false);

  return (
    <main className="relative flex-1 overflow-hidden border-b border-line">
      <div className="ledger-grid absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
        <h1 className="text-balance font-display text-[2.25rem] leading-tight text-parchment sm:text-5xl">
          Watch a free lession —{" "}
          <span className="text-gradient-brass italic">and request your join application</span>
        </h1>

        <div className="mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-line shadow-2xl">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
            title="The Merchant Standard — intro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <Button
          size="lg"
          className="btn-shine mt-10 h-14 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 px-10 text-base font-bold text-ink"
          onClick={() => setOpen(true)}
        >
          Secure Your Spot
        </Button>
      </div>

      <VslLeadForm open={open} onOpenChange={setOpen} />
    </main>
  );
}
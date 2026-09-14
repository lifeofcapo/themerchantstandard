"use client";

import * as React from "react";
import { JoinButton } from "@/components/shared/join-button";
import { cn } from "@/lib/utils";

const stackItems = [
  { label: "A full sales curriculum built from real deals", value: "$500+" },
  { label: "Your own AI sales closer, on demand", value: "$200+/mo" },
  { label: "Access to a ready product catalog", value: "$300+" },
  { label: "Objection library + script vault + SOPs", value: "$200+" },
  { label: "A vetted community + weekly live deal clinics", value: "$100+/mo" },
  { label: "Deal Room with real closed cases", value: "Priceless" },
];

export function ValueStack() {
  const [plan, setPlan] = React.useState<"monthly" | "yearly">("monthly");

  return (
    <section id="price" className="relative overflow-hidden border-b border-line py-24">
      <div className="ledger-grid absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 50% 100%, rgba(201,162,39,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="mb-3 text-xs uppercase tracking-[0.2em] text-brass">
            The Full Value
          </span>
          <h2 className="font-display text-3xl text-parchment sm:text-4xl">
            What this would cost you{" "}
            <span className="text-gradient-brass">separately</span>
          </h2>
        </div>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-full border border-line bg-panel p-1">
            <button
              onClick={() => setPlan("monthly")}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                plan === "monthly" ? "bg-brass text-ink" : "text-parchment/60 hover:text-parchment"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setPlan("yearly")}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                plan === "yearly" ? "bg-brass text-ink" : "text-parchment/60 hover:text-parchment"
              )}
            >
              Yearly
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                  plan === "yearly" ? "bg-ink/20 text-ink" : "bg-brass/15 text-brass"
                )}
              >
                Save 17%
              </span>
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line bg-panel">
          {stackItems.map((item, i) => (
            <div
              key={item.label}
              className={cn(
                "flex items-center justify-between gap-6 px-7 py-5 transition-colors hover:bg-panel-2/40",
                i < stackItems.length - 1 && "border-b border-line"
              )}
            >
              <p className="text-sm text-parchment/65">{item.label}</p>
              <p className="shrink-0 font-mono text-sm text-parchment/40">{item.value}</p>
            </div>
          ))}

          <div className="border-t-2 border-brass/30 bg-panel-2 px-7 py-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-parchment/60">Separately</p>
              <p className="font-mono text-sm font-semibold text-parchment/60 line-through">
                $1,300+/mo
              </p>
            </div>
          </div>

          <div className="border-t border-brass/30 bg-brass/5 px-7 py-6">
            <div className="flex items-center justify-between">
              <p className="font-display text-lg text-parchment">
                Inside The Merchant Standard
              </p>
              <div className="text-right">
                {plan === "monthly" ? (
                  <>
                    <p className="text-gradient-brass font-display text-4xl">$49</p>
                    <p className="font-mono text-xs text-parchment/40">/ month</p>
                  </>
                ) : (
                  <>
                    <div className="flex items-baseline justify-end gap-2">
                      <span className="font-mono text-base text-parchment/35 line-through">$588</span>
                      <p className="text-gradient-brass font-display text-4xl">$490</p>
                    </div>
                    <p className="font-mono text-xs text-parchment/40">
                      / year <span className="text-brass">· 2 months free</span>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <JoinButton
            plan={plan}
            label={plan === "monthly" ? "Join for $49/mo →" : "Join for $490/yr →"}
          />
        </div>
      </div>
    </section>
  );
}
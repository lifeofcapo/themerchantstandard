import { JoinButton } from "@/components/shared/join-button";
import { X } from "lucide-react";

const flowSteps = [
  { label: "Get the product", sub: "Partner Catalog" },
  { label: "Find buyers who actually pay", sub: "Outreach system" },
  { label: "Merchant AI closes with you", sub: "No guessing" },
  { label: "Control deals & repeat buyers", sub: "Repeatable income" },
];

const notNeeded = [
  { text: "To make beats", reason: "Partner Catalog hands you product" },
  { text: "Sales experience", reason: "Merchant AI writes your closing replies" },
  { text: "Money for inventory", reason: "$0 to start selling" },
  { text: "An audience", reason: "The system shows you where buyers are" },
];

export function Mechanism() {
  return (
    <section className="relative overflow-hidden border-b border-line py-24">
      <div className="bg-gradient-wash absolute inset-0 opacity-70" />
      <div className="ledger-grid absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brass">
            The Mechanism
          </span>
          <h2 className="font-display text-3xl text-parchment sm:text-4xl lg:text-5xl">
            You don&apos;t make the product.{" "}
            <span className="text-gradient-brass">You trade it.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base text-parchment/60">
            Producers create. Merchants get paid. You&apos;re going to be a merchant.
          </p>
        </div>

        <div className="mb-16 flex flex-col items-center gap-0 sm:flex-row sm:items-start sm:justify-center">
          {flowSteps.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center sm:flex-row">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-brass/40 bg-panel font-mono text-xs text-brass">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-3 max-w-[120px] text-sm font-semibold text-parchment">
                  {s.label}
                </p>
                <p className="mt-1 max-w-[120px] font-mono text-[10px] uppercase tracking-widest text-parchment/40">
                  {s.sub}
                </p>
              </div>
              {i < flowSteps.length - 1 && (
                <div className="mx-4 my-3 h-px w-8 shrink-0 bg-gradient-to-r from-brass/60 to-brass/20 sm:my-0 sm:mt-4 sm:h-px sm:w-10" />
              )}
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-panel p-8">
          <p className="mb-6 text-center font-mono text-xs uppercase tracking-widest text-parchment/40">
            You do NOT need:
          </p>
          <ul className="flex flex-col gap-4">
            {notNeeded.map((n) => (
              <li key={n.text} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-seal/40 bg-seal/10">
                  <X className="h-3 w-3 text-seal-light" />
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-parchment/80 line-through decoration-seal-light/60">
                    {n.text}
                  </span>
                  <span className="ml-2 text-parchment/45">— {n.reason}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex justify-center">
          <JoinButton label="Show me how it works →" />
        </div>
      </div>
    </section>
  );
}
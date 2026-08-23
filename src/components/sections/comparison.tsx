import { X, Check } from "lucide-react";
import { JoinButton } from "@/components/shared/join-button";

const theirWay = [
  "Giving away exclusive rights for whatever you're offered",
  "Guessing what to say mid-negotiation",
  "No one to check your pricing against",
  "Screenshots sitting unanswered while you overthink",
  "Learning the hard way, deal by deal",
];

const ourWay = [
  "A pricing standard you actually hold",
  "A personal AI assistant reading the deal with you",
  "A vetted community trading at real prices",
  "A structured reply ready in under a minute",
  "A library built from thousands of closed deals",
];

export function Comparison() {
  return (
    <section className="border-b border-line bg-panel/40 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-3 text-xs uppercase tracking-[0.2em] text-brass">
            Two Paths
          </span>
          <h2 className="font-display text-3xl text-parchment sm:text-4xl">
            Their Way vs. <span className="text-gradient-brass">Our Way</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-md border border-line bg-ink p-8">
            <h3 className="font-display text-xl text-parchment/50">Their Way</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {theirWay.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-parchment/40">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-parchment/30" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md border border-brass/40 bg-panel p-8">
            <h3 className="font-display text-xl text-brass">The Merchant Standard</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {ourWay.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-parchment/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <JoinButton />
        </div>
      </div>
    </section>
  );
}
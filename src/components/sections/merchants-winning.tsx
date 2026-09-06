import { JoinButton } from "@/components/shared/join-button";
import { Card, CardContent } from "@/components/ui/card";

const wins = [
  {
    name: "M. Delacroix",
    stat: "$4,200",
    label: "closed in first 60 days",
    story: "Started with zero experience.",
  },
  {
    name: "T. Nakamura",
    stat: "$900",
    label: "single exclusive deal",
    story: "One conversation, held the price with the AI.",
  },
  {
    name: "A. Reyes",
    stat: "12",
    label: "repeat buyers signed",
    story: "Turned one-off sales into a pipeline.",
  },
  {
    name: "S. Kowalski",
    stat: "$1,150",
    label: "average deal, up from $200",
    story: "Same person. One thing changed: a price standard he actually held.",
  },
];

export function MerchantsWinning() {
  return (
    <section id="wins" className="border-b border-line bg-panel/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-3 text-xs uppercase tracking-[0.2em] text-brass">
            Verified Deals · Deal Room
          </span>
          <h2 className="font-display text-3xl text-parchment sm:text-4xl">
            Merchants who are{" "}
            <span className="text-gradient-brass">winning</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wins.map((w) => (
            <Card
              key={w.name}
              className="text-center transition-transform hover:-translate-y-1"
            >
              <CardContent className="flex flex-col items-center pt-8 pb-8">
                <div className="wax-seal mb-4 flex h-12 w-12 items-center justify-center rounded-full text-[9px] font-semibold uppercase text-parchment">
                  💰
                </div>
                <p className="text-gradient-brass font-display text-3xl">{w.stat}</p>
                <p className="mt-1 text-xs text-parchment/50">{w.label}</p>
                <p className="mt-4 text-xs leading-relaxed text-parchment/40 italic">
                  {w.story}
                </p>
                <p className="mt-4 font-mono text-xs text-parchment/30">{w.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Shared statement */}
        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-brass/25 bg-brass/5 px-8 py-6 text-center">
          <p className="text-sm leading-relaxed text-parchment/70">
            What they share: they didn&apos;t just{" "}
            <span className="italic">&ldquo;learn.&rdquo;</span> They stepped into a system
            with{" "}
            <span className="font-semibold text-parchment">
              a product, an AI, and a room that holds the standard.
            </span>
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <JoinButton label="I want results like this → Join" />
        </div>
      </div>
    </section>
  );
}
import { JoinButton } from "@/components/shared/join-button";
import { Card, CardContent } from "@/components/ui/card";

const wins = [
  { name: "M. Delacroix", stat: "$4,200", label: "closed in first 60 days" },
  { name: "T. Nakamura", stat: "$900", label: "single exclusive deal" },
  { name: "A. Reyes", stat: "12", label: "repeat buyers signed" },
  { name: "S. Kowalski", stat: "$1,150", label: "average deal size, up from $200" },
];

export function Wins() {
  return (
    <section id="wins" className="border-b border-line bg-panel/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-3 text-xs uppercase tracking-[0.2em] text-brass">
            Verified Deals
          </span>
          <h2 className="font-display text-3xl text-parchment sm:text-4xl">
            Merchants who are <span className="text-gradient-brass">winning</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wins.map((w) => (
            <Card
              key={w.name}
              className="text-center transition-transform hover:-translate-y-1"
            >
              <CardContent className="flex flex-col items-center pt-8">
                <div className="wax-seal mb-4 h-12 w-12 rounded-full text-[9px] font-semibold uppercase text-parchment">
                  Sealed
                </div>
                <p className="text-gradient-brass font-display text-3xl">{w.stat}</p>
                <p className="mt-1 text-xs text-parchment/50">{w.label}</p>
                <p className="mt-4 font-mono text-xs text-parchment/40">{w.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <JoinButton />
        </div>
      </div>
    </section>
  );
}
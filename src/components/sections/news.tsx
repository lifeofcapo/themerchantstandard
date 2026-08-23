import { JoinButton } from "@/components/shared/join-button";
import { TrendingDown, Bot, Compass } from "lucide-react";

const points = [
  {
    icon: TrendingDown,
    eyebrow: "The Flood",
    title: "AI-generated beats are flooding every market",
    body: "Anyone can produce a passable beat in minutes now. The competition on price has never been higher — and it's about to get worse.",
  },
  {
    icon: Bot,
    eyebrow: "The Shift",
    title: "Volume is losing to positioning",
    body: "The producers still closing real money aren't outworking everyone else. They're the ones who know how to sell exclusivity, not just make sound.",
  },
  {
    icon: Compass,
    eyebrow: "The Move",
    title: "You need a sales standard, not just talent",
    body: "Talent gets you in the room. A repeatable way to price, negotiate, and close is what actually gets you paid — consistently.",
  },
];

export function News() {
  return (
    <section className="relative overflow-hidden border-b border-line py-24">
      <div className="bg-gradient-wash-soft absolute inset-0 opacity-80" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-3 text-xs uppercase tracking-[0.2em] text-seal-light">
            The Market Is Changing
          </span>
          <h2 className="text-balance font-display text-3xl sm:text-4xl">
            The beat market is{" "}
            <span className="text-gradient-brass">about to change</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.title}>
              <p.icon className="h-6 w-6 text-seal-light" />
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-seal-light">
                {p.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-xl text-parchment">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-parchment/60">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <JoinButton label="Get Ahead of It — Join Now" />
        </div>
      </div>
    </section>
  );
}
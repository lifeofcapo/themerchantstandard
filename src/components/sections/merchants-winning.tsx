import Image from "next/image";
import { JoinButton } from "@/components/shared/join-button";
import { Card, CardContent } from "@/components/ui/card";

type Win = {
  name: string;
  stat: string;
  label: string;
  story: string;
  // "photo" — портрет ученика (квадрат, лицо по центру)
  // "screenshot" — скрин переписки/отзыва (может быть другого соотношения сторон)
  media: { type: "photo" | "screenshot"; src: string };
};

const wins: Win[] = [
  {
    name: "M. Delacroix",
    stat: "$4,200",
    label: "closed in first 60 days",
    story: "Started with zero experience.",
    media: { type: "photo", src: "/images/wins/delacroix.jpg" },
  },
  {
    name: "T. Nakamura",
    stat: "$900",
    label: "single exclusive deal",
    story: "One conversation, held the price with the AI.",
    media: { type: "screenshot", src: "/images/wins/nakamura-deal.jpg" },
  },
  {
    name: "A. Reyes",
    stat: "12",
    label: "repeat buyers signed",
    story: "Turned one-off sales into a pipeline.",
    media: { type: "photo", src: "/images/wins/reyes.jpg" },
  },
  {
    name: "S. Kowalski",
    stat: "$1,150",
    label: "average deal, up from $200",
    story: "Same person. One thing changed: a price standard he actually held.",
    media: { type: "screenshot", src: "/images/wins/kowalski-deal.jpg" },
  },
];

export function MerchantsWinning() {
  return (
    <section id="wins" className="border-b border-line bg-panel/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-3 text-xs uppercase tracking-[0.2em] text-brass">
            Verified Deals · Deal Room
          </span>
          <h2 className="font-display text-3xl text-parchment sm:text-4xl">
            Merchants who are <span className="text-gradient-brass">winning</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wins.map((w) => (
            <Card
              key={w.name}
              className="overflow-hidden text-center transition-transform hover:-translate-y-1"
            >
              <div
                className={[
                  "relative w-full overflow-hidden border-b border-line bg-ink",
                  w.media.type === "photo" ? "aspect-square" : "aspect-[4/3]",
                ].join(" ")}
              >
                <Image
                  src={w.media.src}
                  alt={w.media.type === "photo" ? w.name : `${w.name} — deal proof`}
                  fill
                  className={
                    w.media.type === "photo" ? "object-cover" : "object-contain p-2"
                  }
                />
                <div className="wax-seal absolute right-3 top-3 flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-[10px] font-semibold text-parchment shadow-lg">
                  {w.stat}
                </div>
              </div>

              <CardContent className="flex flex-col items-center px-5 pb-7 pt-5">
                <p className="text-gradient-brass font-display text-2xl">{w.stat}</p>
                <p className="mt-1 text-xs text-parchment/50">{w.label}</p>
                <p className="mt-4 text-xs leading-relaxed text-parchment/40 italic">
                  {w.story}
                </p>
                <p className="mt-4 font-mono text-xs text-parchment/30">{w.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

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
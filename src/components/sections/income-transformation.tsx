import { JoinButton } from "@/components/shared/join-button";
import { Reveal } from "@/components/shared/reveal";

const steps = [
  {
    step: "Step 1",
    title: "Join the trading house",
    body: "Get instant access to the full curriculum, the Merchant Library, and your private AI sales assistant.",
  },
  {
    step: "Step 2",
    title: "Learn the standard",
    body: "Work through the Sales Campus and Business Operations Campus — pricing, outreach, objections, closing.",
  },
  {
    step: "Step 3",
    title: "Close deals at your price",
    body: "Take real conversations to Merchant AI, get a structured breakdown, and send a reply that actually closes.",
  },
];

export function IncomeTransformation() {
  return (
    <section className="border-b border-line bg-panel/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <Reveal delay={0}>
            <span className="mb-3 text-xs uppercase tracking-[0.2em] text-brass">
              3-Phase Path
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="font-display text-3xl text-parchment sm:text-4xl">
              From giving beats away to{" "}
              <span className="text-gradient-brass">running a trade</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 120}>
              <div className="relative">
                <div className="mb-4 font-mono text-sm text-brass">{s.step}</div>
                <h3 className="font-display text-xl text-parchment">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-parchment/80">{s.body}</p>
                {i < steps.length - 1 && (
                  <div
                    className="absolute right-[-16px] top-2 hidden h-px w-8 md:block"
                    style={{ background: "linear-gradient(90deg, var(--color-brass), transparent)" }}
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-16 flex justify-center">
            <JoinButton />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
import { JoinButton } from "@/components/shared/join-button";
import { Check } from "lucide-react";

const features = [
  {
    title: "A Structured Curriculum",
    items: [
      "Step-by-step sales and operations campuses",
      "Content updated as the market shifts",
      "No fluff — every lesson maps to a real deal stage",
    ],
    image: "/images/feature-curriculum.png",
    imageAlt: "Structured curriculum app screenshot",
    glowFrom: "rgba(201,162,39,0.18)",
    glowTo:   "rgba(201,162,39,0.06)",
  },
  {
    title: "Personal Merchant AI",
    items: [
      "Your own private AI sales space, always available",
      "Paste a conversation or a screenshot — get a plan",
      "Remembers your pricing and style between sessions",
    ],
    image: "/images/feature-ai.png",
    imageAlt: "Personal Merchant AI screenshot",
    glowFrom: "rgba(124,36,48,0.22)",
    glowTo:   "rgba(124,36,48,0.06)",
  },
  {
    title: "A Vetted Merchant Community",
    items: [
      "Deal Room with closed cases and real numbers",
      "Objection library built from thousands of trades",
      "A network that holds the same pricing standard you do",
    ],
    image: "/images/feature-community.png",
    imageAlt: "Merchant community screenshot",
    glowFrom: "rgba(201,162,39,0.18)",
    glowTo:   "rgba(201,162,39,0.06)",
  },
];

export function ExclusiveFeatures() {
  return (
    <section className="relative overflow-hidden border-b border-line py-24">

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-panel/40">
        <div
          className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(201,162,39,0.35) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute right-0 top-1/3 h-[480px] w-[480px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(124,36,48,0.4) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, rgba(201,162,39,0.3) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div className="ledger-grid absolute inset-0 opacity-60" />
      </div>

      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-3 inline-block rounded-full border border-line bg-panel-2 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-parchment/70">
            Exclusive Features
          </span>
          <h2 className="font-display text-3xl text-parchment sm:text-4xl">
            You Will Get Access To
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-line bg-panel transition-all duration-300
                         hover:border-brass/30 hover:shadow-[0_0_40px_-8px_rgba(201,162,39,0.18),inset_0_0_60px_-20px_rgba(201,162,39,0.06)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(ellipse 70% 60% at 10% 50%, ${f.glowFrom}, transparent 70%)`,
                }}
              />

              <div className="relative flex flex-col md:flex-row">
                <div className="relative min-h-[220px] w-full shrink-0 overflow-hidden bg-ink md:w-[45%]">
                  <img
                    src={f.image}
                    alt={f.imageAlt}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    draggable={false}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-wash opacity-60"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-panel"
                  />
                </div>

                <div className="flex flex-col justify-center gap-5 px-8 py-8 md:py-10">
                  <h3 className="font-display text-xl text-parchment transition-colors duration-200 group-hover:text-brass-light sm:text-2xl">
                    {f.title}
                  </h3>

                  <ul className="flex flex-col gap-2.5">
                    {f.items.map((item, i) => (
                      <li
                        key={item}
                        className={[
                          "flex cursor-default items-start gap-3 rounded-xl border px-4 py-3 text-sm font-medium",
                          "transition-all duration-200",
                          i === 0
                            ? "border-brass/20 bg-panel-2 text-parchment"
                            : "border-line bg-transparent text-parchment/65",
                          "hover:border-brass/35 hover:bg-panel-2 hover:text-parchment",
                          "hover:shadow-[0_0_20px_-6px_rgba(201,162,39,0.2)]",
                        ].join(" ")}
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass transition-transform duration-200 group-hover:scale-110" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <JoinButton />
        </div>
      </div>
    </section>
  );
}
import { JoinButton } from "@/components/shared/join-button";

const stackItems = [
  { label: "A full sales curriculum built from real deals", value: "$500+" },
  { label: "Your own AI sales closer, on demand", value: "$200+/mo" },
  { label: "Access to a ready product catalog", value: "$300+" },
  { label: "Objection library + script vault + SOPs", value: "$200+" },
  { label: "A vetted community + weekly live deal clinics", value: "$100+/mo" },
  { label: "Deal Room with real closed cases", value: "Priceless" },
];

export function ValueStack() {
  return (
    <section className="relative overflow-hidden border-b border-line py-24">
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
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-3 text-xs uppercase tracking-[0.2em] text-brass">
            The Full Value
          </span>
          <h2 className="font-display text-3xl text-parchment sm:text-4xl">
            What this would cost you{" "}
            <span className="text-gradient-brass">separately</span>
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line bg-panel">
          {stackItems.map((item, i) => (
            <div
              key={item.label}
              className={[
                "flex items-center justify-between gap-6 px-7 py-5 transition-colors hover:bg-panel-2/40",
                i < stackItems.length - 1 ? "border-b border-line" : "",
              ].join(" ")}
            >
              <p className="text-sm text-parchment/65">{item.label}</p>
              <p className="shrink-0 font-mono text-sm text-parchment/40">{item.value}</p>
            </div>
          ))}

          <div className="border-t-2 border-brass/30 bg-panel-2 px-7 py-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-parchment/60">
                Separately
              </p>
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
                <p className="text-gradient-brass font-display text-4xl">$49</p>
                <p className="font-mono text-xs text-parchment/40">/ month</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <JoinButton label="Join for $49/mo →" />
        </div>
      </div>
    </section>
  );
}
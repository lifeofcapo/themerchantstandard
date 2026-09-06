import { JoinButton } from "@/components/shared/join-button";

const pains = [
  "You want to make money online but have no idea what to actually sell.",
  "You've got beats sitting on your laptop making you $0.",
  "A buyer finally shows interest — and you freeze on what to say.",
  "You give away exclusive rights for $30 because you're scared to lose it.",
  'Every "model" out there needs money, a skill, or luck you don\'t have.',
];

export function SaltOnWound() {
  return (
    <section className="relative overflow-hidden border-b border-line py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 50% -10%, rgba(124,36,48,0.18), transparent 70%)",
        }}
      />
      <div className="ledger-grid absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-3xl px-6">
        {/* Eyebrow */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-3 text-xs uppercase tracking-[0.2em] text-seal-light">
            Sound Familiar?
          </span>
          <h2 className="font-display text-3xl text-parchment sm:text-4xl">
            If any of this hits —{" "}
            <span className="text-gradient-brass">keep reading.</span>
          </h2>
        </div>

        {/* Pain list */}
        <ul className="flex flex-col gap-4">
          {pains.map((p) => (
            <li
              key={p}
              className="flex items-start gap-4 rounded-xl border border-line bg-panel/60 px-6 py-4 text-sm leading-relaxed text-parchment/70"
            >
              <span className="mt-0.5 shrink-0 text-base">😞</span>
              {p}
            </li>
          ))}
        </ul>

        {/* Twist */}
        <div className="mt-10 rounded-xl border border-seal/30 bg-seal/5 px-8 py-7 text-center">
          <p className="font-display text-lg italic text-parchment/70">
            &ldquo;Maybe this online thing just isn&apos;t for me.&rdquo;
          </p>
          <p className="mt-5 text-sm leading-relaxed text-parchment/60">
            It&apos;s not you. Every one of those is a{" "}
            <span className="font-semibold text-parchment">broken setup</span> — no
            product, no system, no one closing with you.
          </p>
          <p className="mt-2 font-semibold text-parchment">Here&apos;s the fix.</p>
        </div>
      </div>
    </section>
  );
}
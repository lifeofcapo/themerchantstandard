import { JoinButton } from "@/components/shared/join-button";
import { Check } from "lucide-react";

const included = [
  "The product, handed to you",
  "An AI that closes deals with you",
  "The full system to run and scale it",
  "A brotherhood that holds the line",
  "$49/mo, cancel anytime",
];

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-b border-line py-24">
      <div className="bg-gradient-wash absolute inset-0 opacity-80" />
      <div className="ledger-grid absolute inset-0 opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 900px 600px at 50% 50%, rgba(201,162,39,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.2em] text-brass">
          Your Call
        </span>

        <h2 className="font-display text-3xl text-parchment sm:text-4xl lg:text-5xl">
          You&apos;ve got two options.
        </h2>

        <div className="mt-10 rounded-xl border border-line bg-ink/60 px-8 py-6 text-left">
          <p className="text-sm leading-relaxed text-parchment/45">
            Close this page and stay exactly where you are — same scroll, same{" "}
            <em>&ldquo;I&apos;ll start later,&rdquo;</em> same six months you&apos;ve already lived.
          </p>
        </div>

        <p className="my-5 font-mono text-xs uppercase tracking-widest text-parchment/30">
          or
        </p>

        <div className="rounded-xl border border-brass/35 bg-brass/5 px-8 py-7 text-left">
          <p className="mb-5 font-display text-lg text-parchment">
            Set your standard and start today:
          </p>
          <ul className="flex flex-col gap-3">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-parchment/80">
                <Check className="h-4 w-4 shrink-0 text-brass" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 text-base text-parchment/60">
          The product&apos;s ready. The AI&apos;s ready. The room&apos;s ready.
        </p>

        <div className="mt-6">
          <JoinButton
            size="lg"
            label="🔥 JOIN THE MERCHANT STANDARD → $49/mo"
          />
        </div>

        <p className="mt-4 font-mono text-xs text-parchment/30 uppercase tracking-widest">
          Product + AI closer + system + brotherhood · cancel anytime
        </p>

        <p className="mt-8 font-display text-xl italic text-brass-light">
          Exit the default. Set your standard.
        </p>
      </div>
    </section>
  );
}
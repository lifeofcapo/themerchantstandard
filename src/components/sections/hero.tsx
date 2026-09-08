import { JoinButton } from "@/components/shared/join-button";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-line">
      <div className="ledger-grid absolute inset-0 opacity-60" />
      <div className="bg-gradient-wash absolute inset-0" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-28 text-center sm:py-36">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brass/30 bg-brass/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brass">
          For Anyone Who Wants to Make Money Online — No Beats, No Sales Experience
        </span>

        <h1 className="text-balance font-display text-5xl leading-[1.05] text-parchment sm:text-6xl md:text-7xl">
          Start an online business
          <br />
          selling music products —
          <br />
          <span className="text-gradient-brass italic">
            and close your first deal
          </span>
          <br />
          without making a single beat.
        </h1>

        <p className="mt-8 max-w-2xl text-balance text-lg text-parchment/70">
          We hand you the product, an AI that closes deals for you, and the
          exact system.{" "}
          <span className="font-semibold text-parchment">$49/month. Cancel anytime.</span>
        </p>

        <p className="mt-3 max-w-xl text-balance text-base text-parchment/50">
          Even if you&apos;re starting from zero — no catalog, no experience, no audience.
        </p>

        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-parchment/35">
          Cancel anytime · No hidden fees · One closed deal pays for months
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <JoinButton
            size="lg"
            label="JOIN THE MERCHANT STANDARD → $49/mo"
          />
        </div>
      </div>
    </section>
  );
}
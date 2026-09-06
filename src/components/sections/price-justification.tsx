import { JoinButton } from "@/components/shared/join-button";

export function PriceJustification() {
  return (
    <section className="relative overflow-hidden border-b border-line py-24">
      <div className="bg-gradient-wash absolute inset-0 opacity-60" />
      <div className="ledger-grid absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="mx-auto mb-10 inline-block rounded-2xl border border-brass/40 bg-panel p-10">
          <p className="font-mono text-xs uppercase tracking-widest text-brass">
            The Merchant Standard
          </p>
          <div className="mt-4 flex items-baseline justify-center gap-2">
            <span className="text-gradient-brass font-display text-7xl">$49</span>
            <span className="text-parchment/40">/ month</span>
          </div>
          <p className="mt-3 font-mono text-xs text-parchment/35 uppercase tracking-widest">
            Cancel anytime · No hidden fees
          </p>
        </div>

        <h2 className="font-display text-2xl text-parchment sm:text-3xl">
          Why so low?
        </h2>
        <p className="mt-5 text-base leading-relaxed text-parchment/65">
          Because we want you actually selling — the more merchants closing real
          deals, the stronger the whole standard gets. That&apos;s less than one night
          out. And a single closed deal{" "}
          <span className="font-semibold text-parchment">
            ($200–$1,150 in the Deal Room)
          </span>{" "}
          pays for months of membership.
        </p>
        <p className="mt-4 font-display text-lg italic text-brass-light">
          This isn&apos;t a cost. It&apos;s the cheapest real business you&apos;ll ever start.
        </p>

        <div className="mt-10">
          <JoinButton size="lg" label="🔥 JOIN FOR $49/mo →" />
        </div>
      </div>
    </section>
  );
}
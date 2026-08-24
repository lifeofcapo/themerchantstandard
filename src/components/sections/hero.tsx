import { JoinButton } from "@/components/shared/join-button";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-line">
      <div className="ledger-grid absolute inset-0 opacity-60" />
      <div className="bg-gradient-wash absolute inset-0" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-28 text-center sm:py-36">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brass/30 bg-brass/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brass">
          Private Membership · Beat Sales Trade
        </span>

        <h1 className="text-balance font-display text-5xl leading-[1.05] text-parchment sm:text-6xl md:text-7xl">
          Sell exclusive beats
          <br />
          <span className="text-gradient-brass italic">like a merchant</span>, not a
          hobbyist.
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg text-parchment/70">
          A private trading house for producers who want to close real deals at real
          prices. Learn the craft, get a personal AI sales assistant and generate an income now with The Marchant Standard expert-led training.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <JoinButton size="lg" />
        </div>
      </div>
    </section>
  );
}
import { JoinButton } from "@/components/shared/join-button";

export function PSClosing() {
  return (
    <section className="relative overflow-hidden border-b border-line py-20">
      <div className="ledger-grid absolute inset-0 opacity-35" />

      <div className="relative mx-auto max-w-2xl px-6">
        <div className="flex flex-col gap-6 rounded-2xl border border-line bg-panel p-10">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brass">
              P.S.
            </p>
            <p className="text-sm leading-relaxed text-parchment/65">
              Remember — this isn&apos;t info you can just Google. It&apos;s a product handed
              to you, an AI that closes the deal with you, and a room that holds
              the same price standard. That combination doesn&apos;t exist anywhere
              else, because no one else is a merchant AND hands you the
              merchant&apos;s tools.
            </p>
          </div>

          <div className="h-px w-full bg-line" />

          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-seal-light">
              P.P.S.
            </p>
            <p className="text-sm leading-relaxed text-parchment/65">
              The shift is happening{" "}
              <span className="font-semibold text-parchment">now.</span> AI made
              &ldquo;just making beats&rdquo; worthless, and the merchants who move first
              will own the next few years. Every month you wait, someone else
              takes the deals.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 pt-2">
            <p className="font-display text-base italic text-parchment/50">
              Your call 👇
            </p>
            <JoinButton size="lg" label="🔥 JOIN NOW → $49/mo" />
          </div>
        </div>
      </div>
    </section>
  );
}
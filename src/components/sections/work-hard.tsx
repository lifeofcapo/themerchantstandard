import { JoinButton } from "@/components/shared/join-button";

export function WorkHard() {
  return (
    <section className="border-b border-line py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="mb-3 inline-block text-xs uppercase tracking-[0.2em] text-brass">
          Ask Yourself
        </span>
        <h2 className="text-balance font-display text-3xl text-parchment sm:text-4xl">
          Are you prepared to work for it?
        </h2>
        <p className="mt-6 text-balance leading-relaxed text-parchment/70">
          Selling is a skill, not a personality trait. It can be learned — but the
          curriculum, the AI assistant, and the community won't send messages for you.
          Every merchant inside The Merchant Standard still has to do the work: reach out,
          hold their price, and follow through on every deal.
        </p>
        <p className="mt-4 text-balance leading-relaxed text-parchment/70">
          What we provide is the standard to work against — proven pricing frameworks,
          a script for nearly every objection, and a second opinion on any conversation,
          any time. The rest is up to you.
        </p>
        <div className="mt-10 flex justify-center">
          <JoinButton />
        </div>
      </div>
    </section>
  );
}
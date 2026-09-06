import { ShieldCheck } from "lucide-react";
import { JoinButton } from "@/components/shared/join-button";

export function Guarantee() {
  return (
    <section className="border-b border-line bg-panel/40 py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <span className="wax-seal mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full">
          <ShieldCheck className="h-6 w-6 text-parchment" />
        </span>

        <span className="mb-3 block text-xs uppercase tracking-[0.2em] text-brass">
          Zero Risk
        </span>

        <h2 className="font-display text-3xl text-parchment sm:text-4xl">
          Cancel anytime —{" "}
          <span className="text-gradient-brass">no lock-in.</span>
        </h2>

        <p className="mt-6 text-base leading-relaxed text-parchment/65">
          Come in, use the system, take what you learn. If it&apos;s not for you,
          you&apos;re one click from cancelling.{" "}
          <span className="font-semibold text-parchment">
            The risk is on us to keep earning your membership every month.
          </span>
        </p>

        <p className="mt-5 font-mono text-xs text-parchment/35 uppercase tracking-widest">
          We don&apos;t promise income. We give you the system — the work is yours.
        </p>

        <div className="mt-10">
          <JoinButton />
        </div>
      </div>
    </section>
  );
}
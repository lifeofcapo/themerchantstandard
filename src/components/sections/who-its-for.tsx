import { Check, X } from "lucide-react";

const forYou = [
  "You want to make money online",
  "You're willing to reach out to people and execute",
  `You're done with recycled "guru" info`,
];

const notForYou = [
  "You want a get-rich-quick button",
  "You won't message a single buyer",
  "You expect money without doing the work",
];

export function WhoItsFor() {
  return (
    <section className="relative overflow-hidden border-b border-line py-24">
      <div className="ledger-grid absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-3 text-xs uppercase tracking-[0.2em] text-brass">
            Qualification
          </span>
          <h2 className="font-display text-3xl text-parchment sm:text-4xl">
            Is this{" "}
            <span className="text-gradient-brass">for you?</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-brass/30 bg-panel p-8">
            <h3 className="mb-6 font-display text-xl text-brass">
              ✅ This is for you if:
            </h3>
            <ul className="flex flex-col gap-4">
              {forYou.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-parchment/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-ink p-8">
            <h3 className="mb-6 font-display text-xl text-parchment/40">
              ❌ This is NOT for you if:
            </h3>
            <ul className="flex flex-col gap-4">
              {notForYou.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-parchment/40">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-parchment/25" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center font-display text-base italic text-parchment/50">
          Money-making is a skill. It can be learned — the speed depends on the
          effort you put in and the room you learn it in.
        </p>
      </div>
    </section>
  );
}
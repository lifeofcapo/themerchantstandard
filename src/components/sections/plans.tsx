import { Check } from "lucide-react";
import { JoinButton } from "@/components/shared/join-button";

const included = [
  "Full access to Sales Campus & Business Operations Campus",
  "Personal Merchant AI — your private sales assistant, on demand",
  "Merchant Library: playbooks, scripts, objection library, SOPs",
  "Partner Catalog access track once approved",
  "Deal Room — closed deals, cases, and community wins",
  "Vetted, active merchant community",
];

export function Plans() {
  return (
    <section id="plans" className="border-b border-line py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs uppercase tracking-[0.2em] text-brass">
            Membership
          </span>
          <h2 className="font-display text-3xl text-parchment sm:text-4xl">
            One membership. <span className="text-gradient-brass">Everything included.</span>
          </h2>
        </div>

        <div className="relative rounded-md border border-brass/30 bg-panel p-10">
          <div className="wax-seal absolute -top-5 right-8 h-16 w-16 rotate-6 rounded-full font-display text-[10px] uppercase tracking-wider text-parchment">
            <span className="text-center leading-tight">
              TMS
              <br />
              Sealed
            </span>
          </div>

          <p className="font-mono text-xs uppercase tracking-widest text-brass">
            The Merchant Standard
          </p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display text-6xl text-parchment">$49</span>
            <span className="text-parchment/50">/ month</span>
          </div>

          <ul className="mt-8 flex flex-col gap-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-parchment/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <JoinButton className="w-full" size="lg" label="Join for $49/mo" />
          </div>
          <p className="mt-4 text-center font-mono text-xs text-parchment/40">
            Cancel anytime · No hidden fees
          </p>
        </div>
      </div>
    </section>
  );
}
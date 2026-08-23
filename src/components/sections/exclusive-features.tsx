import { JoinButton } from "@/components/shared/join-button";
import { Check } from "lucide-react";

const features = [
  {
    title: "A Structured Curriculum",
    items: [
      "Step-by-step sales and operations campuses",
      "Content updated as the market shifts",
      "No fluff — every lesson maps to a real deal stage",
    ],
  },
  {
    title: "Personal Merchant AI",
    items: [
      "Your own private AI sales space, always available",
      "Paste a conversation or a screenshot — get a plan",
      "Remembers your pricing and style between sessions",
    ],
  },
  {
    title: "A Vetted Merchant Community",
    items: [
      "Deal Room with closed cases and real numbers",
      "Objection library built from thousands of trades",
      "A network that holds the same pricing standard you do",
    ],
  },
];

export function ExclusiveFeatures() {
  return (
    <section className="border-b border-line bg-panel/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-3 text-xs uppercase tracking-[0.2em] text-brass">
            Exclusive Access
          </span>
          <h2 className="font-display text-3xl text-parchment sm:text-4xl">
            You will get access to
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title}>
              <h3 className="font-display text-xl text-parchment">{f.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {f.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-parchment/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <JoinButton />
        </div>
      </div>
    </section>
  );
}
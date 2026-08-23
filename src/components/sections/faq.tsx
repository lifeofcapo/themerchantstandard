import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ScrollText } from "lucide-react";

const faqs = [
  {
    q: "How fast will I see results?",
    a: "It depends on how much you put in. Some members close their first higher-priced deal within a couple of weeks of applying the pricing framework. The Merchant Standard is education — results depend on your own outreach and follow-through.",
  },
  {
    q: "Do I need an existing catalog of beats to join?",
    a: "No. The curriculum works whether you're producing your own beats or planning to work through the Partner Catalog once you're approved for it.",
  },
  {
    q: "What exactly does the AI assistant do?",
    a: "You open a private space in our Discord, paste a conversation or send a screenshot of a chat with a buyer, and it gives you a read on the deal, a strategy, and a ready-to-send reply — grounded in the same pricing standard taught in the curriculum.",
  },
  {
    q: "Is this only for experienced producers?",
    a: "No. New members go through the same onboarding and get matched to a track. The curriculum assumes no prior sales experience — it's built to be learned from zero.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Your membership is a standard monthly subscription with no lock-in contract. Cancel whenever you like from the Manage Membership page linked in the footer.",
  },
  {
    q: "Will I lose access to the Discord community if I cancel?",
    a: "Your membership grants access for as long as it's active. If you cancel, access ends at the close of your current billing period.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden border-b border-line py-24">
      <div className="ledger-grid absolute inset-0 opacity-50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 800px 460px at 50% 0%, rgba(201,162,39,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="wax-seal mb-5 flex h-12 w-12 items-center justify-center rounded-full">
            <ScrollText className="h-5 w-5 text-parchment" />
          </span>
          <span className="mb-3 text-xs uppercase tracking-[0.2em] text-brass">
            Still Thinking?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl">
            Frequently Asked{" "}
            <span className="text-gradient-brass">Questions</span>
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full overflow-hidden rounded-2xl border border-brass/20 bg-panel/60 px-6 shadow-xl backdrop-blur-sm sm:px-8"
        >
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-line/70">
              <AccordionTrigger className="py-5 text-base font-semibold text-parchment hover:no-underline hover:text-brass">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-parchment/65 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

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
    <section
      id="faq"
      className="relative overflow-hidden border-b border-line py-20 sm:py-24"
    >
      <div className="ledger-grid absolute inset-0 opacity-50" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 800px 460px at 50% 0%, rgba(201,162,39,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
          <span className="wax-seal mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
            <ScrollText className="h-5 w-5 text-parchment" />
          </span>

          <span className="mb-3 text-xs uppercase tracking-[0.2em] text-brass">
            Still Thinking?
          </span>

          <h2 className="text-balance text-3xl sm:text-4xl">
            Frequently Asked{" "}
            <span className="text-gradient-brass">Questions</span>
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col gap-3"
        >
          {faqs.map((f) => (
            <AccordionItem
              key={f.q}
              value={f.q}
              className="overflow-hidden rounded-xl border border-line bg-panel/45 backdrop-blur-sm transition-colors duration-200 data-[state=open]:border-brass/40 data-[state=open]:bg-panel/70"
            >
              <AccordionTrigger
                className="
                  relative
                  min-h-[68px]
                  px-6
                  py-5
                  pr-16
                  text-center
                  text-base
                  font-semibold
                  text-parchment
                  hover:text-brass
                  sm:min-h-[72px]
                  sm:px-8
                  sm:pr-20
                  sm:text-[17px]

                  [&>span:first-child]:mx-auto
                  [&>span:first-child]:text-center

                  [&>[data-slot=accordion-trigger-icon]]:absolute
                  [&>[data-slot=accordion-trigger-icon]]:right-6
                  [&>[data-slot=accordion-trigger-icon]]:text-brass

                  sm:[&>[data-slot=accordion-trigger-icon]]:right-8
                "
              >
                <span>{f.q}</span>
              </AccordionTrigger>

              <AccordionContent
                className="
                  px-6
                  text-center
                  text-sm
                  leading-7
                  text-parchment/60
                  sm:px-12
                  sm:text-[15px]
                "
              >
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
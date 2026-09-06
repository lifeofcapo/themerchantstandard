import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ScrollText } from "lucide-react";

const faqs = [
  {
    q: "Do I need a catalog of beats?",
    a: "No. Partner Catalog gives you product to sell — you don't need to have made a single beat yourself.",
  },
  {
    q: "Do I need sales experience?",
    a: "No. Merchant AI writes your closing replies. The curriculum assumes zero prior experience and is built to be learned from scratch.",
  },
  {
    q: "Is this only for producers?",
    a: "No — it's built for total beginners too. If you want to make money online and are willing to do the outreach, you qualify.",
  },
  {
    q: "What exactly does the AI do?",
    a: "You paste a conversation or send a screenshot of a chat with a buyer. It reads the deal and gives you the exact reply to close — grounded in the same pricing standard taught in the curriculum.",
  },
  {
    q: "How fast will I see results?",
    a: "Depends on your effort. Some members close in a matter of weeks. No income guarantees — this is a skill you learn and execute.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No hidden fees, no lock-in. Cancel with one click from the Manage Membership page in the footer.",
  },
  {
    q: "Do I keep Discord access if I cancel?",
    a: "Access is part of membership. When you cancel, access continues until the end of your current billing period, then ends automatically.",
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
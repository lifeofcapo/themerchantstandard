import { JoinButton } from "@/components/shared/join-button";
import { Bot, ImageUp, MessagesSquare, Sparkles } from "lucide-react";

const flow = [
  {
    icon: ImageUp,
    title: "Screenshot the conversation",
    body: "Send the bot a screenshot of your chat with the buyer — no retyping, no context lost.",
  },
  {
    icon: Sparkles,
    title: "It reads the deal",
    body: "The bot reads the tone, the offer, and where the buyer is stalling, grounded in the same pricing standard taught in the curriculum.",
  },
  {
    icon: MessagesSquare,
    title: "You get the exact reply",
    body: "A ready-to-send message that moves the buyer off the fence and toward closing — not generic sales-speak.",
  },
];

export function AIAssistant() {
  return (
    <section
      id="ai-assistant"
      className="relative overflow-hidden border-b border-line py-24"
    >
      <div className="bg-gradient-wash absolute inset-0 opacity-70" />
      <div className="ledger-grid absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brass/30 bg-brass/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brass">
              <Bot className="h-3.5 w-3.5" />
              Built Into the Discord
            </span>

            <h2 className="text-balance font-display text-3xl leading-[1.1] sm:text-4xl">
              A bot that does the{" "}
              <span className="text-gradient-brass">closing</span> for you
            </h2>

            <p className="mt-6 max-w-lg text-balance leading-relaxed text-parchment/70">
              Every member gets access to the Merchant AI bot, live inside our Discord.
              Stuck in a negotiation? Screenshot the chat, describe the situation in a
              line, and the bot tells you exactly how to move the buyer off &quot;maybe&quot;
              and into a closed, exclusive-rights sale.
            </p>

            <ul className="mt-8 flex flex-col gap-6">
              {flow.map((f, i) => (
                <li key={f.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brass/30 bg-panel text-brass">
                    <f.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-seal-light">
                      Step {i + 1}
                    </p>
                    <h3 className="font-display text-lg text-parchment">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-parchment/60">
                      {f.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <JoinButton label="Get the AI Assistant — $49/mo" />
            </div>
          </div>

          <div className="relative rounded-2xl border border-brass/25 bg-panel/80 p-2 shadow-2xl backdrop-blur">
            <div className="rounded-xl border border-line bg-ink/60 p-5">
              <div className="mb-4 flex items-center gap-2 border-b border-line pb-4">
                <div className="wax-seal flex h-8 w-8 items-center justify-center rounded-full text-[9px] font-semibold text-parchment">
                  AI
                </div>
                <div>
                  <p className="text-sm font-semibold text-parchment">Merchant AI</p>
                  <p className="font-mono text-[11px] text-parchment/40">
                    #ai-sales-assistant
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-brass/15 px-4 py-2.5 text-sm text-parchment/90">
                  [screenshot attached] they said 80 is their max, what do I say
                </div>

                <div className="max-w-[90%] rounded-2xl rounded-tl-sm border border-brass/20 bg-panel-2 px-4 py-3 text-sm leading-relaxed text-parchment/80">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-brass">
                    Read
                  </p>
                  <p>
                    They anchored low but haven&apos;t walked away — that&apos;s a soft
                    ceiling, not a hard one.
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-brass">
                    Send this
                  </p>
                  <p className="mt-1 italic text-parchment/70">
                    &quot;Totally get it — 80 works for non-exclusive. For full exclusive
                    rights I&apos;m at 150, but I can hold that price for the next 24
                    hours.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

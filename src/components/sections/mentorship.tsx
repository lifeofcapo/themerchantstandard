import {
  Users,
  Video,
  MessageCircle,
  Clock,
  Infinity as InfinityIcon,
  Lock,
} from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { MentorshipApplyButton } from "@/components/mentorship/apply-button";

const COPY = {
  eyebrow: "Private Implementation Tier",
  subtitle: "12 weeks. Maximum 6 active merchants. Direct 1:1 access.",
  cta: "Apply for Mentorship",
  ctaNote: "Application required. Payment is requested only after acceptance.",
  stats: [
    { value: "12", label: "Weeks" },
    { value: "6", label: "Maximum active merchants" },
    { value: "12", label: "Private 1:1 calls, 60 min each" },
    { value: "2h", label: "Maximum response time" },
  ],
  included: [
    {
      icon: Video,
      title: "12 private 1:1 calls",
      text: "60 minutes each, with Roman Malushin.",
    },
    {
      icon: MessageCircle,
      title: "Private WhatsApp support",
      text: "Individual private support for each Merchant.",
    },
    {
      icon: Clock,
      title: "24/7 support",
      text: "Maximum response time: 2 hours.",
    },
    {
      icon: InfinityIcon,
      title: "Lifetime Access",
      text: "The Merchant Standard Core Membership.",
    },
  ],
  pricing: [
    { label: "Full Pay", price: "$2,490" },
    { label: "Two Payments", price: "2 × $1,350" },
  ],
  flow: [
    "Landing Page",
    "Application",
    "Review",
    "Qualified Fit Call",
    "Acceptance",
    "Payment",
    "Onboarding",
    "Week 1 Kickoff",
  ],
  faq: [] as { q: string; a: string }[],
};

export function Mentorship() {
  return (
    <section
      id="mentorship"
      className="relative overflow-hidden border-b border-line py-24 sm:py-32"
    >
      <div className="ledger-grid absolute inset-0 opacity-30" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(201,162,39,0.14), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brass/30 bg-brass/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-brass">
              <Lock className="h-3 w-3" />
              {COPY.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-balance font-display text-4xl text-parchment sm:text-5xl md:text-6xl">
              Merchant <span className="text-gradient-brass">Mentorship</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-parchment/80 sm:text-lg">
              {COPY.subtitle}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 w-full sm:w-auto">
              <MentorshipApplyButton label={COPY.cta} />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {COPY.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-panel/60 p-6 text-center">
                <p className="font-display text-5xl text-gradient-brass">{s.value}</p>
                <p className="mt-2 text-sm leading-snug text-parchment/70">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-20">
          <Reveal>
            <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-brass">
              What is included
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {COPY.included.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="h-full">
                <div className="group h-full rounded-2xl border border-line bg-panel/70 p-7 transition-colors hover:border-brass/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brass/30 bg-brass/5 text-brass">
                    <item.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-parchment">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-parchment/75">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-24">
          <Reveal>
            <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-brass">
              Investment
            </p>
          </Reveal>
          <div className="mx-auto mt-8 grid max-w-3xl gap-5 md:grid-cols-2">
            {COPY.pricing.map((p, i) => (
              <Reveal key={p.label} delay={i * 80} className="h-full">
                <div className="relative h-full overflow-hidden rounded-2xl border border-brass/30 bg-panel p-8 text-center">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,162,39,0.12), transparent 70%)",
                    }}
                  />
                  <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-parchment/65">
                    {p.label}
                  </p>
                  <p className="relative mt-4 font-display text-5xl text-parchment sm:text-6xl">
                    {p.price}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <div className="mx-auto mt-10 flex max-w-sm flex-col items-center gap-4">
              <MentorshipApplyButton label={COPY.cta} className="w-full" />
              <p className="text-center text-sm text-parchment/65">{COPY.ctaNote}</p>
            </div>
          </Reveal>
        </div>
        <div className="mt-24">
          <Reveal>
            <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-brass">
              How it works
            </p>
          </Reveal>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COPY.flow.map((step, i) => (
              <Reveal key={step} delay={(i % 4) * 70} className="h-full">
                <li
                  className={
                    "relative h-full list-none rounded-2xl border p-5 " +
                    (i === 0
                      ? "border-brass/40 bg-brass/5"
                      : "border-line bg-panel/60")
                  }
                >
                  <span className="font-mono text-xs text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 font-display text-lg text-parchment">{step}</p>
                  {i === 0 && (
                    <span className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-widest text-brass">
                      You are here
                    </span>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
        {COPY.faq.length > 0 && (
          <div className="mx-auto mt-24 max-w-2xl">
            <Reveal>
              <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-brass">
                FAQ
              </p>
            </Reveal>
            <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-panel/60">
              {COPY.faq.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="cursor-pointer list-none font-display text-lg text-parchment">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-base leading-relaxed text-parchment/75">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        )}
        <Reveal>
          <p className="mx-auto mt-20 flex max-w-md items-center justify-center gap-2 text-center text-sm text-parchment/65">
            <Users className="h-4 w-4 shrink-0 text-brass" />
            Maximum 6 active merchants at a time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
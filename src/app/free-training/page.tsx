"use client";

import * as React from "react";
import { Play, ShieldCheck, Check, X, Lock, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Footer } from "@/components/sections/footer";
import { VslLeadForm } from "@/components/shared/vsl-lead-form";
import { JoinButton } from "@/components/shared/join-button";

const pillars = [
  { title: "The Product", desc: "A ready Partner Catalog of real music products — you don't make a single one." },
  { title: "The AI", desc: "Merchant AI reads the conversation and closes the deal with you, in seconds." },
  { title: "The System", desc: "The exact process to find buyers, qualify them, close, and scale." },
];

const proofStats = [
  { value: "$4,200", label: "closed in 60 days by a total beginner" },
  { value: "$200 → $1,150", label: "one person's average deal size, same person" },
  { value: "12", label: "repeat buyers signed in 3 months" },
];

const reasons = [
  {
    title: "You never knew what to sell",
    desc: "Every model needed money, a skill, or an audience you didn't have — so you bounced between dropshipping, crypto, whatever, and none of it stuck.",
  },
  {
    title: "You had no product of your own",
    desc: "Making the product is the hardest, slowest part. Most people quit right there.",
  },
  {
    title: "You froze on what to say",
    desc: "Someone finally showed interest, lowballed you, and you sat there overthinking the reply — or caved and gave it away for scraps.",
  },
];

const everyoneElse = [
  "Chases broke artists who never pay",
  "Wastes weeks on dead chats",
  "Gives away exclusive rights for $30 out of fear",
  "Guesses what to text and gets left on read",
  "Quits the first time it goes quiet",
];

const merchantStandard = [
  "The product, handed to you",
  "Buyers, already qualified",
  "An AI that closes deals with you",
  "The full system to run and scale it",
  "A brotherhood that holds the line",
];

export default function FreeTrainingPage() {
  const [leadFormOpen, setLeadFormOpen] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);

  function handlePlay() {
    videoRef.current?.play();
    setPlaying(true);
  }

  return (
    <main className="relative flex-1 overflow-hidden">
      <section className="relative border-b border-line py-16 sm:py-24">
        <div className="ledger-grid absolute inset-0 opacity-40" />
        <div className="bg-gradient-wash-soft absolute inset-0 opacity-60" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.2em] text-brass">
              Free 12-Minute Training
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-balance font-display text-[2.1rem] leading-[1.12] text-parchment sm:text-5xl md:text-6xl">
              Start a real online business selling{" "}
              <span className="text-gradient-brass italic">music products</span> —
              without making a single beat
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 text-balance text-base leading-relaxed text-parchment/65 sm:text-lg">
              Get the product, an AI that closes deals for you, and the exact system —
              even with $0, no catalog, and zero sales experience.
            </p>
          </Reveal>

          <Reveal delay={190}>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-parchment/40">
              This is a free 12-minute training. Watch to the end — I&apos;ll show you exactly how to start.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="relative mx-auto mt-10 aspect-video w-full max-w-2xl overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl shadow-black/40">
              <video
                ref={videoRef}
                className="h-full w-full"
                src="/videos/intro.mp4"
                poster="/videos/intro-poster.jpg"
                controls={playing}
                playsInline
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
              />
              {!playing && (
                <button
                  onClick={handlePlay}
                  aria-label="Play training"
                  className="group absolute inset-0 flex items-center justify-center bg-ink/40 transition-colors hover:bg-ink/30"
                >
                  <span className="wax-seal flex h-20 w-20 items-center justify-center rounded-full transition-transform group-hover:scale-105">
                    <Play className="h-8 w-8 translate-x-0.5 text-parchment" />
                  </span>
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="border-b border-line bg-panel/40 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="text-center">
              <span className="mb-3 block font-mono text-xs uppercase tracking-[0.2em] text-brass">
                Kill Two Assumptions
              </span>
              <h2 className="text-balance font-display text-2xl text-parchment sm:text-3xl">
                This isn&apos;t a &ldquo;how to make beats&rdquo; course. And it&apos;s not
                another guru dream.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-parchment/60">
                Making beats is the saturated part now — AI spits out a passable one in
                seconds. Everybody can make. Almost nobody can sell. This is three things
                in one place, and that combination doesn&apos;t exist anywhere else.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-xl border border-line bg-ink/60 px-6 py-7 text-center">
                  <span className="wax-seal mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full font-mono text-sm text-parchment">
                    {i + 1}
                  </span>
                  <p className="font-display text-lg text-parchment">{p.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-parchment/60">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="mb-3 block font-mono text-xs uppercase tracking-[0.2em] text-brass">
              What You Walk Away With
            </span>
            <h2 className="text-balance font-display text-2xl text-parchment sm:text-3xl">
              A real online business you control — run from your phone, an hour a day.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-parchment/60">
              You don&apos;t have to be a producer. You don&apos;t need sales experience.
              You don&apos;t need money for inventory. You find people, you talk to them,
              and an AI helps you close. That&apos;s the job.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {proofStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="rounded-xl border border-brass/25 bg-brass/5 px-5 py-7">
                  <p className="font-display text-2xl text-gradient-brass sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-parchment/60">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-line bg-panel/40 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <span className="mb-3 block font-mono text-xs uppercase tracking-[0.2em] text-brass">
              &ldquo;Is This Actually Real?&rdquo;
            </span>
            <h2 className="text-balance font-display text-2xl text-parchment sm:text-3xl">
              Don&apos;t take my word for it — look at the receipts.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-parchment/65">
              These are real closed deals, real dollar amounts, from real people —
              most of whom had never sold anything before this. And here&apos;s what
              matters: they&apos;re not the most talented producers. Half of them
              can&apos;t make a beat to save their life. They just got a product,
              a system, and an AI in their corner.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <div className="text-center">
              <span className="mb-3 block font-mono text-xs uppercase tracking-[0.2em] text-brass">
                If You&apos;ve Tried Before
              </span>
              <h2 className="text-balance font-display text-2xl text-parchment sm:text-3xl">
                It almost never was you. It was three specific things.
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 flex flex-col gap-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 90}>
                <div className="rounded-xl border border-line bg-ink/60 px-6 py-5">
                  <p className="font-display text-base text-parchment">
                    <span className="text-brass">0{i + 1}.</span> {r.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-parchment/60">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={280}>
            <p className="mt-8 text-center font-display text-lg italic text-brass-light">
              It&apos;s not you. It&apos;s the setup. Change the setup, and everything changes.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="border-b border-line bg-panel/40 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <span className="mb-3 block font-mono text-xs uppercase tracking-[0.2em] text-brass">
              Our Common Enemy
            </span>
            <h2 className="text-balance font-display text-2xl text-parchment sm:text-3xl">
              The fake dream. And the flood.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-parchment/60">
              Gurus sell you &ldquo;get rich quick,&rdquo; take your money, hand you a
              folder of recycled videos, and disappear. And AI beats are drowning every
              market — if your whole plan is &ldquo;make more beats,&rdquo; you&apos;re
              racing a machine that works for free. We beat both, not by making more, but
              by learning to sell.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mx-auto mt-10 max-w-md rounded-xl border border-line bg-ink/60 px-6 py-6">
              <p className="font-mono text-xs uppercase tracking-widest text-brass">
                Why Now
              </p>
              <p className="mt-3 text-sm leading-relaxed text-parchment/65">
                AI just made &ldquo;just making beats&rdquo; almost worthless — volume is
                dead. But artists still need products, and somebody has to sell them at
                the right price. Almost nobody is positioned as that somebody yet. The
                lane is open — every month you wait is a month someone else takes deals
                that could&apos;ve been yours.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <span className="mb-3 block font-mono text-xs uppercase tracking-[0.2em] text-brass">
              Who Are We To Tell You This
            </span>
            <h2 className="text-balance font-display text-2xl text-parchment sm:text-3xl">
              We&apos;ve lived it — the broke part and the paid part.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-parchment/65">
              5 years actually selling beats to artists across the US — LA, New York,
              Detroit. Real deals closed, real prices held, real repeat buyers, over a
              hundred thousand dollars generated doing exactly what we&apos;re about to
              hand you. Then we turned everything we did by hand into a system —
              including the hardest part: knowing what to say to close. We taught that
              to an AI.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="border-b border-line bg-panel/40 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="text-center">
              <span className="mb-3 block font-mono text-xs uppercase tracking-[0.2em] text-brass">
                The Mechanism
              </span>
              <h2 className="text-balance font-display text-2xl text-parchment sm:text-3xl">
                Four steps. Watch step three happen live.
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              { n: "01", t: "Get the product", d: "A real Partner Catalog of ready music products — you don't make a single one." },
              { n: "02", t: "Find & qualify buyers", d: "The system shows you where they are and how to spot who'll actually pay." },
              { n: "03", t: "Close with Merchant AI", d: "You paste the chat, the AI hands you the exact reply that anchors and closes." },
              { n: "04", t: "Control & scale", d: "Pipeline, payments, repeat buyers — learn, apply, execute, track, improve." },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <div className="h-full rounded-xl border border-line bg-ink/60 px-6 py-5">
                  <span className="font-mono text-xs text-brass">{step.n}</span>
                  <p className="mt-1 font-display text-base text-parchment">{step.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-parchment/60">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={340}>
            <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-brass/25 bg-ink/80 p-6">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-parchment/40">
                Merchant AI — live in Discord
              </p>
              <div className="rounded-lg bg-panel px-4 py-3 text-sm text-parchment/70">
                Buyer: &ldquo;80 is my max.&rdquo;
              </div>
              <div className="mt-3 flex items-start gap-2 rounded-lg border border-brass/30 bg-brass/5 px-4 py-3 text-sm text-parchment">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                <span>
                  &ldquo;Totally get it — 80 works for non-exclusive. For full exclusive
                  rights I&apos;m at 150, but I can hold that price for the next 24
                  hours.&rdquo;
                </span>
              </div>
              <p className="mt-3 text-xs text-parchment/40">
                Anchored, held the price, created urgency — five seconds instead of an
                hour of overthinking.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="relative overflow-hidden border-b border-line py-24">
        <div className="bg-gradient-wash absolute inset-0 opacity-80" />
        <div className="ledger-grid absolute inset-0 opacity-50" />

        <div className="relative mx-auto max-w-2xl px-6">
          <Reveal>
            <h2 className="text-balance text-center font-display text-2xl text-parchment sm:text-3xl">
              This is how everyone else does it.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <ul className="mt-8 flex flex-col gap-3">
              {everyoneElse.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-line bg-ink/50 px-5 py-3 text-sm text-parchment/60"
                >
                  <X className="h-4 w-4 shrink-0 text-parchment/30" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <p className="my-6 text-center font-mono text-xs uppercase tracking-widest text-parchment/30">
              inside the merchant standard, you skip all of it
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="flex flex-col gap-3">
              {merchantStandard.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-brass/30 bg-brass/5 px-5 py-3 text-sm text-parchment/85"
                >
                  <Check className="h-4 w-4 shrink-0 text-brass" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 text-center">
              <JoinButton
                size="lg"
                label="JOIN THE MERCHANT STANDARD → $49/mo"
                className="mx-auto"
              />
              <p className="mt-3 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-parchment/35">
                <Lock className="h-3 w-3" /> Cancel anytime
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-parchment sm:text-4xl">
              You&apos;ve got two options.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 rounded-xl border border-line bg-ink/60 px-8 py-6 text-left">
              <p className="text-sm leading-relaxed text-parchment/45">
                Close this page and stay exactly where you are — same scroll, same{" "}
                <em>&ldquo;I&apos;ll start later,&rdquo;</em> same six months you&apos;ve
                already lived.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="my-5 font-mono text-xs uppercase tracking-widest text-parchment/30">
              or
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="rounded-xl border border-brass/35 bg-brass/5 px-8 py-7 text-left">
              <p className="mb-5 font-display text-lg text-parchment">
                Set your standard and start today:
              </p>
              <ul className="flex flex-col gap-3">
                {merchantStandard.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-parchment/80">
                    <Check className="h-4 w-4 shrink-0 text-brass" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8">
              <JoinButton size="lg" label="🔥 JOIN THE MERCHANT STANDARD → $49/mo" />
            </div>
            <p className="mt-4 font-display text-xl italic text-brass-light">
              Exit the default. Set your standard.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <button
              onClick={() => setLeadFormOpen(true)}
              className="mt-10 inline-flex items-center gap-1.5 text-sm text-parchment/45 underline-offset-4 hover:text-parchment/70 hover:underline"
            >
              Not ready yet? Get the details by email <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </Reveal>
        </div>
      </section>

      <Footer />

      <VslLeadForm open={leadFormOpen} onOpenChange={setLeadFormOpen} />
    </main>
  );
}
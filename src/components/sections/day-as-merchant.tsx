"use client";

import * as React from "react";
import { JoinButton } from "@/components/shared/join-button";
import {
  Smartphone, Package, Bot, DollarSign, Trophy, Lock,
  ChevronLeft, ChevronRight, ChevronDown,
  Info, User, FileText, Check, CheckCircle2, Play,
  Flame, Binoculars, MessageSquare,
} from "lucide-react";

/* ---------- общие элементы мокапов ---------- */

const WAVE = Array.from({ length: 44 }, (_, i) =>
  0.2 + 0.8 * Math.abs(Math.sin(i * 0.9) * Math.cos(i * 0.37))
);

function Wave({ className }: { className: string }) {
  return (
    <div className="flex h-9 flex-1 items-center gap-[3px]">
      {WAVE.map((h, i) => (
        <span
          key={i}
          className={`w-[2px] rounded-full ${className}`}
          style={{ height: `${h * 100}%` }}
        />
      ))}
    </div>
  );
}

function Frame({
  title,
  time,
  pill,
  className = "",
  footer,
  children,
}: {
  title: string;
  time: string;
  pill?: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d14] ${className}`}
    >
      <div className="flex shrink-0 items-center justify-between border-b border-white/5 px-5 py-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
          The Merchant Standard
        </span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-white/50">
          Workflow demo
        </span>
      </div>

      <div className="flex shrink-0 items-start justify-between px-5 pt-5">
        <div>
          <h4 className="text-2xl font-semibold tracking-tight text-white">{title}</h4>
          <p className="mt-1 text-xs text-white/40">{time}</p>
        </div>
        {pill}
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-hidden px-4 py-4 [&>*]:shrink-0">
        {children}
      </div>

      {footer && <div className="shrink-0">{footer}</div>}
    </div>
  );
}

function Footer({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 border-t border-white/5 px-5 py-3 text-xs text-white/50">
      <Icon className="h-4 w-4" />
      {children}
    </div>
  );
}

function Avatar() {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5">
      <User className="h-5 w-5 text-white/40" />
    </div>
  );
}

/* ---------- 6 экранов ---------- */

function ScreenReplies() {
  const rows = [
    { active: true, time: "09:00", w1: "w-1/3", w2: "w-4/5", w3: "w-3/5" },
    { active: false, time: "08:47", w1: "w-2/5", w2: "w-4/5", w3: "w-2/5" },
    { active: false, time: "08:32", w1: "w-1/2", w2: "w-4/5", w3: "w-1/3" },
  ];
  return (
    <Frame
      title="Artist replies"
      time="09:00"
      pill={
        <span className="rounded-full bg-[#1d5fd6] px-4 py-1.5 text-sm text-white">3 new</span>
      }
    >
      {rows.map((r, i) => (
        <div
          key={i}
          className={`flex items-center gap-3 rounded-xl border p-3 ${
            r.active ? "border-blue-500/40 bg-blue-950/30" : "border-transparent"
          }`}
        >
          <Avatar />
          <div className="flex flex-1 flex-col gap-2">
            <div className={`h-2.5 rounded bg-white/20 ${r.w1}`} />
            <div className={`h-2.5 rounded bg-white/15 ${r.w2}`} />
            <div className={`h-2.5 rounded bg-white/15 ${r.w3}`} />
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2 text-sm text-white">
              New reply
              <span className="h-2 w-2 rounded-full bg-[#1d6bff] shadow-[0_0_8px_#1d6bff]" />
            </div>
            <span className="text-xs text-white/40">{r.time}</span>
          </div>
        </div>
      ))}
      <div className="h-12 rounded-xl border border-white/5 opacity-20" />
    </Frame>
  );
}

function ScreenCatalog() {
  return (
    <Frame title="Partner Catalog" time="10:15">
      <div className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3">
        <span className="text-sm text-white/80">Artist brief</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80">
          Dark
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80">
          Melodic
        </span>
      </div>

      <div className="flex items-center gap-4 rounded-xl border border-amber-500/70 bg-amber-950/20 px-4 py-3 shadow-[0_0_30px_-8px_rgba(245,158,11,0.4)]">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-900/40">
          <FileText className="h-5 w-5 text-amber-200" />
        </div>
        <Wave className="bg-amber-400" />
        <span className="w-20 text-base text-white">Dark sample</span>
        <span className="rounded-full border border-amber-500/50 bg-amber-900/40 px-3 py-1 text-xs text-amber-300">
          Selected
        </span>
      </div>

      {["Melodic", "Street"].map((name) => (
        <div
          key={name}
          className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5">
            <FileText className="h-5 w-5 text-white/70" />
          </div>
          <Wave className="bg-white/40" />
          <span className="w-20 text-base text-white">{name}</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5">
            <Play className="h-3.5 w-3.5 fill-white/80 text-white/80" />
          </span>
        </div>
      ))}

      <Footer icon={Info}>Selection is not a reservation</Footer>
    </Frame>
  );
}

function ScreenNegotiation() {
  const rows = [
    { label: "Deal stage", value: "Offer" },
    { label: "Objection", value: "Price pushback" },
    { label: "Next move", value: "Clarify the concern" },
  ];
  return (
    <Frame title="Merchant AI" time="10:35" footer={<Footer icon={Info}>Review before sending.</Footer>}>
      <div className="flex items-start gap-3 rounded-xl border border-white/10 p-3">
        <Avatar />
        <div className="flex flex-1 flex-col gap-1.5">
          <span className="text-sm text-white/60">Buyer</span>
          <div className="w-fit rounded-xl bg-white/10 px-4 py-2 text-base text-white">
            Can you do less?
          </div>
        </div>
        <span className="text-xs text-white/40">10:35</span>
      </div>

      <div className="divide-y divide-white/5 rounded-xl border border-white/10 px-3">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-4 py-2.5">
            <span className="w-28 text-[10px] uppercase tracking-[0.2em] text-white/50">
              {r.label}
            </span>
            <span className="flex-1 rounded-lg bg-white/5 px-4 py-2 text-base text-white">
              {r.value}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 rounded-xl border border-blue-500/50 bg-blue-950/40 p-3">
        <span className="w-28 text-[10px] uppercase tracking-[0.2em] text-blue-400">
          Reply draft
        </span>
        <span className="flex-1 rounded-lg bg-white/5 px-4 py-2 text-base text-white">
          Is it the budget or the timing?
        </span>
      </div>
    </Frame>
  );
}

function ScreenDelivery() {
  const files = ["WAV", "TRACKOUTS", "EXCLUSIVE LICENSE"];
  return (
    <Frame
      title="Exclusive delivery"
      time="11:00"
      className="border-amber-500/30"
      footer={
        <div className="flex items-center gap-2 border-t border-white/5 px-5 py-3 text-xs text-white/50">
          <CheckCircle2 className="h-4 w-4 text-amber-400/80" />
          Payment logged
        </div>
      }
    >
      <div className="flex items-center gap-4 rounded-xl border border-amber-500/70 bg-amber-950/25 px-4 py-4 shadow-[0_0_30px_-8px_rgba(245,158,11,0.4)]">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-amber-400">
          <Check className="h-4 w-4 text-amber-400" />
        </span>
        <span className="flex-1 text-base text-white">Payment confirmed</span>
        <span className="text-lg font-semibold text-amber-400">$1,150</span>
        <span className="rounded-full border border-amber-500/50 bg-amber-900/40 px-3 py-1 text-[10px] tracking-wider text-amber-300">
          PAID
        </span>
      </div>

      {files.map((f) => (
        <div
          key={f}
          className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5">
            <FileText className="h-5 w-5 text-white/70" />
          </div>
          <span className="flex-1 text-sm font-semibold tracking-wide text-white">{f}</span>
          <span className="text-sm text-white/70">Sent</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400">
            <Check className="h-3 w-3 text-black" />
          </span>
        </div>
      ))}
    </Frame>
  );
}

function ScreenWins() {
  return (
    <Frame title="# wins" time="11:20">
      <div className="rounded-xl border border-emerald-500/50 bg-emerald-950/15 p-4">
        <div className="flex items-start gap-3">
          <Avatar />
          <div className="flex flex-col gap-1">
            <span className="text-sm text-white/60">Merchant</span>
            <span className="text-base text-white">Exclusive delivered. Deal logged.</span>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
            <FileText className="h-4 w-4 text-white/70" />
          </div>
          <div className="flex flex-1 flex-col gap-1.5">
            <span className="text-sm text-white">Delivery complete</span>
            <div className="h-2 w-3/4 rounded bg-white/15" />
            <div className="h-2 w-1/2 rounded bg-white/10" />
          </div>
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-emerald-400">
            <Check className="h-3.5 w-3.5 text-emerald-400" />
          </span>
        </div>

        <div className="mt-3 flex gap-2">
          <span className="flex h-8 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <Flame className="h-4 w-4 text-emerald-400" />
          </span>
          <span className="flex h-8 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <Check className="h-4 w-4 text-emerald-400" />
          </span>
          <span className="flex h-8 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <Binoculars className="h-4 w-4 text-emerald-400" />
          </span>
        </div>
        <span className="mt-2 block text-xs text-white/40">Community reactions</span>
      </div>

      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-3 px-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5">
            <User className="h-4 w-4 text-white/30" />
          </div>
          <div className="flex flex-1 flex-col gap-1.5">
            <div className="h-2 w-2/5 rounded bg-white/15" />
            <div className="h-2 w-4/5 rounded bg-white/10" />
          </div>
        </div>
      ))}

      <div className="flex items-center gap-3 rounded-xl border border-blue-500/40 bg-blue-950/20 px-3 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5">
          <MessageSquare className="h-4 w-4 text-white/70" />
        </div>
        <span className="flex-1 text-sm text-white">Next buyer reply</span>
        <span className="h-2 w-2 rounded-full bg-[#1d6bff] shadow-[0_0_8px_#1d6bff]" />
      </div>
    </Frame>
  );
}

function ScreenSession() {
  const rows = ["Payment recorded", "Files delivered", "Deal logged"];
  return (
    <Frame
      title="Session complete"
      time="11:55 AM"
      footer={<Footer icon={CheckCircle2}>Next actions saved</Footer>}
    >
      <div className="flex items-center gap-4 rounded-xl border border-blue-500/60 bg-blue-950/30 px-5 py-5">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-300">
          <Check className="h-6 w-6 text-blue-300" />
        </span>
        <span className="text-lg text-white">Morning session closed</span>
      </div>

      {rows.map((r) => (
        <div
          key={r}
          className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5">
            <FileText className="h-5 w-5 text-white/70" />
          </div>
          <span className="flex-1 text-base text-white">{r}</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-200">
            <Check className="h-3.5 w-3.5 text-slate-900" />
          </span>
        </div>
      ))}
    </Frame>
  );
}

const slides = [
  {
    step: "01",
    icon: Smartphone,
    headline: "Wakes up, checks Discord",
    body: "Three new artist replies overnight",
    visual: <ScreenReplies />,
  },
  {
    step: "02",
    icon: Package,
    headline: "Opens Partner Catalog.",
    body: "Picks the products that fit them — didn't make a single one",
    visual: <ScreenCatalog />,
  },
  {
    step: "03",
    icon: Bot,
    headline: "Buyer lowballs",
    body: "Screenshots the chat → Merchant AI hands him the exact reply",
    visual: <ScreenNegotiation />,
  },
  {
    step: "04",
    icon: DollarSign,
    headline: "Deal closed",
    body: "$1,150 exclusive. Sends the file, logs the payment",
    highlight: true,
    visual: <ScreenDelivery />,
  },
  {
    step: "05",
    icon: Trophy,
    headline: "Drops the win in #wins",
    body: "The room reacts. He's not doing this alone",
    visual: <ScreenWins />,
  },
  {
    step: "06",
    icon: Lock,
    headline: "Closes the laptop by noon.",
    body: "That's the job.",
    visual: <ScreenSession />,
  },
];

export function DayAsMerchant() {
  const [active, setActive] = React.useState(0);

  const prev = () => setActive((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setActive((i) => (i === slides.length - 1 ? 0 : i + 1));

  const slide = slides[active];

  return (
    <section className="relative overflow-hidden border-b border-line py-24">
      <div className="ledger-grid absolute inset-0 opacity-40" />
      <div className="bg-gradient-wash-soft absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-3 text-xs uppercase tracking-[0.2em] text-brass">
            A Day in The Standard
          </span>
          <h2 className="font-display text-3xl text-parchment sm:text-4xl">
            A normal day for a{" "}
            <span className="text-gradient-brass">merchant inside The Standard</span>
          </h2>
          <p className="mt-4 flex items-center justify-center gap-2 font-accent text-base italic text-parchment/65">
            Six months ago he&apos;d never sold anything. Here&apos;s his Tuesday now
            <ChevronDown className="h-4 w-4" />
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[640px]">
          <div className="mx-auto flex h-[190px] w-full max-w-[560px] flex-col items-center justify-end text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-parchment/65">
              Step {slide.step}
            </p>
            <slide.icon className="mt-3 h-8 w-8 text-brass" strokeWidth={1.5} />
            <h3
              className={`mt-3 font-display text-2xl ${
                slide.highlight ? "text-gradient-brass" : "text-parchment"
              }`}
            >
              {slide.headline}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-parchment/80">{slide.body}</p>
          </div>

          <div className="mt-6 flex items-center gap-3 sm:gap-5">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-panel text-parchment/80 transition-colors hover:border-brass/40 hover:text-brass"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div
              className={`relative h-[560px] min-w-0 flex-1 rounded-2xl transition-shadow duration-300 sm:h-[600px] ${
                slide.highlight ? "shadow-[0_0_60px_-10px_rgba(201,162,39,0.35)]" : ""
              }`}
            >
              {slide.visual}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-panel text-parchment/80 transition-colors hover:border-brass/40 hover:text-brass"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-brass" : "w-1.5 bg-parchment/20 hover:bg-parchment/40"
                }`}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center px-6 sm:px-0">
            <JoinButton label="Get This Life — Join Now" />
          </div>
        </div>
      </div>
    </section>
  );
}
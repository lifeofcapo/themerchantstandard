import { renderEmail, ctaButton } from "./email-templates";

const SITE = "https://themerchantstandard.com";
const VSL_URL = `${SITE}/free-training`;
const JOIN_URL = `${SITE}/free-training`;
import { SEQUENCE_TEST_OFFSETS } from "./email-sequence.test";
type SequenceStep = {
  dayOffset: number; 
  subject: string;
  body: (unsubscribeUrl: string) => string;
};


export const SEQUENCE: SequenceStep[] = [
  // Step 0 — Welcome (день 0)
  {
    dayOffset: SEQUENCE_TEST_OFFSETS[0],
    subject: "Your free training is inside (watch before it closes)",
    body: (u) =>
      renderEmail({
        preheader: "No beats. No experience. An AI that closes for you.",
        unsubscribeUrl: u,
        bodyHtml: `
          <h1 style="font-size:24px; margin-bottom:16px;">
            Here's the exact way people are selling music products online —
            with no catalog, no sales skills, and an AI that closes the deal.
          </h1>
          <p style="line-height:1.6; color:#f3efe4cc;">
            12 minutes. By the end you'll know what to sell, where to find
            buyers who actually pay, and how the AI writes the message that closes.
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            Watch it today, not "later." 9 out of 10 people save it and never
            come back — and stay exactly where they are. The 1 who watches now
            and takes one action is the one who closes their first deal in weeks.
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            <strong>"I can't make beats."</strong> — You don't need to. We hand you the product.<br/>
            <strong>"I've never sold anything."</strong> — That's what Merchant AI is for.<br/>
            <strong>"Is this just another course?"</strong> — No. It's a system, not info you forget.
          </p>
          ${ctaButton(VSL_URL, "Watch The Free Training")}
        `,
      }),
  },
  // Step 1 — Welcome Chain W2 (день 1)
  {
    dayOffset: SEQUENCE_TEST_OFFSETS[1],
    subject: "$4,200 in 60 days — with zero experience",
    body: (u) =>
      renderEmail({
        preheader: "Quick story before you watch the training.",
        unsubscribeUrl: u,
        bodyHtml: `
          <p style="line-height:1.6; color:#f3efe4cc;">
            A kid joined with no catalog, no sales background — nothing.
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            60 days later: $4,200 closed. Not because he got lucky.
            Because he had the product, the system, and an AI closing with him.
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            The training shows exactly how. It's still open.
          </p>
          ${ctaButton(VSL_URL, "Watch It Now")}
        `,
      }),
  },
  // Step 2 — Welcome Chain W3 (день 2)
  {
    dayOffset: SEQUENCE_TEST_OFFSETS[2],
    subject: "The AI that closes deals for you",
    body: (u) =>
      renderEmail({
        preheader: "The part people don't believe until they see it.",
        unsubscribeUrl: u,
        bodyHtml: `
          <p style="line-height:1.6; color:#f3efe4cc;">
            You get stuck in a negotiation → screenshot the chat →
            the AI reads the deal and hands you the exact reply that closes.
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            "He said 80 is his max." The AI: "Totally get it — 80 works for
            non-exclusive. Full exclusive rights I'm at 150, holding that 24 hours."
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            That's the difference between broke and paid. Watch it work.
          </p>
          ${ctaButton(VSL_URL, "See It In Action")}
        `,
      }),
  },
  // Step 3 — Welcome Chain W4 (день 3)
  {
    dayOffset: SEQUENCE_TEST_OFFSETS[3],
    subject: "Closing the free training",
    body: (u) =>
      renderEmail({
        preheader: "Last reminder on the free training — then I'll stop.",
        unsubscribeUrl: u,
        bodyHtml: `
          <p style="line-height:1.6; color:#f3efe4cc;">3 things inside:</p>
          <p style="line-height:1.6; color:#f3efe4cc;">
            1) What to sell (you don't make it)<br/>
            2) Where to find buyers who actually pay<br/>
            3) The AI that writes your closing messages
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            Watch the first 3 minutes. If it's not for you, no worries.
          </p>
          ${ctaButton(VSL_URL, "Watch The First 3 Minutes")}
          <p style="margin-top:24px; font-size:13px; color:#f3efe680;">
            P.S. At the end I show you how to get inside The Merchant Standard.
          </p>
        `,
      }),
  },
  // Step 4 — Дожим 1: Motivational (день 5)
  {
    dayOffset: SEQUENCE_TEST_OFFSETS[4],
    subject: "Two versions of your next 6 months",
    body: (u) =>
      renderEmail({
        preheader: "Same you. Very different outcome.",
        unsubscribeUrl: u,
        bodyHtml: `
          <p style="line-height:1.6; color:#f3efe4cc;">
            You watched the training but didn't join. Cool — no pressure.
            Just picture two versions of the next 6 months.
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            <strong>Version 1:</strong> same scroll, same "I'll start later," same account balance.
            6 months gone, nothing changed.
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            <strong>Version 2:</strong> you're closing music-product deals — real money you built
            yourself, with a product handed to you and an AI closing alongside you.
          </p>
          ${ctaButton(JOIN_URL, "Set Your Standard")}
        `,
      }),
  },
  // Step 5 — Дожим 2: Trust (день 6)
  {
    dayOffset: SEQUENCE_TEST_OFFSETS[5],
    subject: '"Is this legit or another scam?"',
    body: (u) =>
      renderEmail({
        preheader: "Fair question. Here are the receipts.",
        unsubscribeUrl: u,
        bodyHtml: `
          <p style="line-height:1.6; color:#f3efe4cc;">
            Let's be real — the "make money online" space is full of scams.
            So don't trust me. Trust the receipts.
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            $4,200 closed in 60 days — by a total beginner.<br/>
            $1,150 average deal, up from $200 — same person, one change.<br/>
            12 repeat buyers in 3 months.<br/>
            5 years of us selling beats to US artists, $100k+ generated.
          </p>
          ${ctaButton(JOIN_URL, "See The Deals")}
        `,
      }),
  },
  // Step 6 — Дожим 3: Value (день 7)
  {
    dayOffset: SEQUENCE_TEST_OFFSETS[6],
    subject: "What you're actually getting for $49",
    body: (u) =>
      renderEmail({
        preheader: "Breaking it down so it's clear.",
        unsubscribeUrl: u,
        bodyHtml: `
          <p style="line-height:1.6; color:#f3efe4cc;">
            Without it: guess what to sell, no product, freeze on what to text,
            give away exclusives for scraps, quit after silence.
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            Inside The Standard: the product, Merchant AI, the full sales system,
            Deal Room + library, a brotherhood that holds the price standard.
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            You're not buying "info." You're buying the shortcut.
          </p>
          ${ctaButton(JOIN_URL, "Get The Full System")}
        `,
      }),
  },
  // Step 7 — Дожим 4: Price (день 8)
  {
    dayOffset: SEQUENCE_TEST_OFFSETS[7],
    subject: "If it's the $49 stopping you, read this",
    body: (u) =>
      renderEmail({
        preheader: "Cancel anytime. One deal pays for months.",
        unsubscribeUrl: u,
        bodyHtml: `
          <p style="line-height:1.6; color:#f3efe4cc;">
            $49/month. Cancel anytime, no hidden fees. That's less than one
            night out. A single closed deal pays for months of membership.
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            Don't overthink a $49 decision that could change your income.
          </p>
          ${ctaButton(JOIN_URL, "Join Now")}
        `,
      }),
  },
  // Step 8 — SOS 1 (день 10)
  {
    dayOffset: SEQUENCE_TEST_OFFSETS[8],
    subject: "The part of the story I don't usually tell",
    body: (u) =>
      renderEmail({
        preheader: "A few years ago I was exactly where you might be.",
        unsubscribeUrl: u,
        bodyHtml: `
          <p style="line-height:1.6; color:#f3efe4cc;">
            Making beats nobody bought. Watching less talented people get paid
            while I stayed broke. I thought something was wrong with me.
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            I tried every "make money online" thing. Nothing stuck.
            Turns out it had nothing to do with talent. Tomorrow — what changed it.
          </p>
        `,
      }),
  },
  // Step 9 — SOS 2 (день 11)
  {
    dayOffset: SEQUENCE_TEST_OFFSETS[9],
    subject: "The day I almost quit for good",
    body: (u) =>
      renderEmail({
        preheader: "There was a specific night I almost walked away.",
        unsubscribeUrl: u,
        bodyHtml: `
          <p style="line-height:1.6; color:#f3efe4cc;">
            I'd spent weeks on a "perfect" catalog. Posted it. Silence.
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            Then it hit me: the problem wasn't my product. It was HOW I was
            trying to sell — guessing, hoping, giving it away.
          </p>
        `,
      }),
  },
  // Step 10 — SOS 3 (день 12)
  {
    dayOffset: SEQUENCE_TEST_OFFSETS[10],
    subject: "You're not broken — the setup is",
    body: (u) =>
      renderEmail({
        preheader: "You're probably making the same mistakes I made.",
        unsubscribeUrl: u,
        bodyHtml: `
          <p style="line-height:1.6; color:#f3efe4cc;">
            Trying to become a great producer first. Chasing artists with no
            budget. Guessing what to say. None of that could work.
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            It's not about talent, it's a system. It's not about making
            product, it's about selling it. Tomorrow: the exact system.
          </p>
        `,
      }),
  },
  // Step 11 — SOS 4 (день 13)
  {
    dayOffset: SEQUENCE_TEST_OFFSETS[11],
    subject: "The 4 steps that changed my income",
    body: (u) =>
      renderEmail({
        preheader: "I threw out 90% of what I'd been told.",
        unsubscribeUrl: u,
        bodyHtml: `
          <p style="line-height:1.6; color:#f3efe4cc;">
            1) Get the product — stopped making, started sourcing.<br/>
            2) Find buyers who actually pay — qualify, don't chase.<br/>
            3) Let the AI close.<br/>
            4) Control the business.
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            First month doing it this way, I closed more than the previous six.
          </p>
        `,
      }),
  },
  // Step 12 — SOS 5 (день 14)
  {
    dayOffset: SEQUENCE_TEST_OFFSETS[12],
    subject: "3 people who were exactly where you are",
    body: (u) =>
      renderEmail({
        preheader: '"Sure, it worked for YOU." Fair.',
        unsubscribeUrl: u,
        bodyHtml: `
          <p style="line-height:1.6; color:#f3efe4cc;">
            A beginner, zero experience → $4,200 closed in 60 days.<br/>
            A producer giving beats away → average deal $200 to $1,150.<br/>
            Someone who never closed once → 12 repeat buyers in 3 months.
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            They stepped into a system and a room. That's why we built it.
          </p>
        `,
      }),
  },
  // Step 13 — SOS 6 (день 15)
  {
    dayOffset: SEQUENCE_TEST_OFFSETS[13],
    subject: "Where you'll be in 6 months",
    body: (u) =>
      renderEmail({
        preheader: "Two roads.",
        unsubscribeUrl: u,
        bodyHtml: `
          <p style="line-height:1.6; color:#f3efe4cc;">
            Road 1: you close this like the others. Same spot in 6 months.
          </p>
          <p style="line-height:1.6; color:#f3efe4cc; margin-top:16px;">
            Road 2: you start today. First deal in weeks. In 6 months you're
            running something real.
          </p>
          ${ctaButton(JOIN_URL, "Set Your Standard")}
        `,
      }),
  },
  // Step 14 — Second window D1 (день 17)
  {
    dayOffset: SEQUENCE_TEST_OFFSETS[14],
    subject: "The doors are open — here's what's new",
    body: (u) =>
      renderEmail({
        preheader: "This is the best time to join — here's why.",
        unsubscribeUrl: u,
        bodyHtml: `
          <p style="line-height:1.6; color:#f3efe4cc;">
            One more window, straight talk: this is where you decide.
            Everything's still on the table — the product, the AI, the system, the room.
          </p>
          ${ctaButton(JOIN_URL, "Join The Merchant Standard")}
        `,
      }),
  },
  // Step 15 — Second window D2 (день 18)
  {
    dayOffset: SEQUENCE_TEST_OFFSETS[15],
    subject: "24 hours left",
    body: (u) =>
      renderEmail({
        preheader: "What happens if you wait another 6 months.",
        unsubscribeUrl: u,
        bodyHtml: `
          <p style="line-height:1.6; color:#f3efe4cc;">
            $4,200 in 60 days. $1,150 average deal. 12 repeat buyers.
            All from people who decided instead of waiting.
          </p>
          ${ctaButton(JOIN_URL, "Join Before It Closes")}
        `,
      }),
  },
  // Step 16 — Second window D3, финал (день 19)
  {
    dayOffset: SEQUENCE_TEST_OFFSETS[16],
    subject: "Closing tonight",
    body: (u) =>
      renderEmail({
        preheader: "This is it, your call.",
        unsubscribeUrl: u,
        bodyHtml: `
          <p style="line-height:1.6; color:#f3efe4cc;">
            Last message on this. The product's ready. The AI's ready.
            The room's ready. Exit the default, or set your standard.
          </p>
          ${ctaButton(JOIN_URL, "Join Now")}
        `,
      }),
  },
];
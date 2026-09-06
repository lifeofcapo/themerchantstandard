import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { DayAsMerchant } from "@/components/sections/day-as-merchant";
import { SaltOnWound } from "@/components/sections/salt-on-wound";
import { Mechanism } from "@/components/sections/mechanism";
import { MerchantAI } from "@/components/sections/merchant-ai";
import { MerchantsWinning } from "@/components/sections/merchants-winning";
import { MarketChanging } from "@/components/sections/market-changing";
import { WhatYouGet } from "@/components/sections/what-you-get";
import { TheirWayOurWay } from "@/components/sections/their-way-our-way";
import { ValueStack } from "@/components/sections/value-stack";
import { PriceJustification } from "@/components/sections/price-justification";
import { Guarantee } from "@/components/sections/guarantee";
import { WhoItsFor } from "@/components/sections/who-its-for"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta";
import { PSClosing } from "@/components/sections/ps-closing";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/shared/reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />

        <Reveal>
          <DayAsMerchant />
        </Reveal>
        <Reveal>
          <SaltOnWound />
        </Reveal>
        <Reveal>
          <Mechanism />
        </Reveal>
        <Reveal>
          <MerchantAI />
        </Reveal>
        <Reveal>
          <MerchantsWinning />
        </Reveal>
        <Reveal>
          <MarketChanging />
        </Reveal>
        <Reveal>
          <WhatYouGet />
        </Reveal>
        <Reveal>
          <TheirWayOurWay />
        </Reveal>
        <Reveal>
          <ValueStack />
        </Reveal>
        <Reveal>
          <PriceJustification />
        </Reveal>
        <Reveal>
          <Guarantee />
        </Reveal>
        <Reveal>
          <WhoItsFor />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal>
          <FinalCTA />
        </Reveal>
        <Reveal>
          <PSClosing />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
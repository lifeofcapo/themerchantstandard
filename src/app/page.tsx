import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { DayAsMerchant } from "@/components/sections/day-as-merchant";
import { SaltOnWound } from "@/components/sections/salt-on-wound";
import { Mechanism } from "@/components/sections/mechanism";
import { MerchantAI } from "@/components/sections/merchant-ai";
import { MarketChanging } from "@/components/sections/market-changing";
import { WhatYouGet } from "@/components/sections/what-you-get";
import { ValueStack } from "@/components/sections/value-stack";
import { PriceJustification } from "@/components/sections/price-justification";
import { Guarantee } from "@/components/sections/guarantee";
import { WhoItsFor } from "@/components/sections/who-its-for"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta";
import { PSClosing } from "@/components/sections/ps-closing";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/shared/reveal";
import { NewsletterSection } from "@/components/shared/news-letter-section";
import { AreYouPreparedToWork } from "@/components/sections/are-you-prepared-to-work";
import { ExclusiveFeatures } from "@/components/sections/exclusive-features";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />

          <DayAsMerchant />
          <SaltOnWound />
          <Mechanism />
          <MerchantAI />
          <MarketChanging />
          <WhatYouGet />
          <ValueStack />
          <ExclusiveFeatures />
          <PriceJustification />
          <AreYouPreparedToWork />
          <Guarantee />
          <WhoItsFor />
          <FAQ />
          <FinalCTA />
          <PSClosing />
          <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
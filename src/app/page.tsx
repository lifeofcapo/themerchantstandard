
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Reviews } from "@/components/sections/reviews";
import { Plans } from "@/components/sections/plans";
import { IncomeTransformation } from "@/components/sections/income-transformation";
import { OurCourses } from "@/components/sections/our-courses";
import { AIAssistant } from "@/components/sections/ai-assistant";
import { Comparison } from "@/components/sections/comparison";
import { News } from "@/components/sections/news";
import { Wins } from "@/components/sections/wins";
import { WorkHard } from "@/components/sections/work-hard";
import { ExclusiveFeatures } from "@/components/sections/exclusive-features";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/shared/reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Reveal>
          <Reviews />
        </Reveal>
        <Reveal>
          <Plans />
        </Reveal>
        <Reveal>
          <IncomeTransformation />
        </Reveal>
        <Reveal>
          <OurCourses />
        </Reveal>
        <Reveal>
          <AIAssistant />
        </Reveal>
        <Reveal>
          <Comparison />
        </Reveal>
        <Reveal>
          <News />
        </Reveal>
        <Reveal>
          <Wins />
        </Reveal>
        <Reveal>
          <WorkHard />
        </Reveal>
        <Reveal>
          <ExclusiveFeatures />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
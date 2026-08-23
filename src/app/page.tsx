
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

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Reviews />
        <Plans />
        <IncomeTransformation />
        <OurCourses />
        <AIAssistant />
        <Comparison />
        <News />
        <Wins />
        <WorkHard />
        <ExclusiveFeatures />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
import { JoinButton } from "@/components/shared/join-button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Briefcase, BookOpen } from "lucide-react";

const courses = [
  {
    icon: Target,
    title: "Sales Campus",
    body: "Client acquisition, outreach, conversation frameworks, pricing, objections, closing, and repeat buyers — the full sales cycle, taught in order.",
  },
  {
    icon: Briefcase,
    title: "Business Operations Campus",
    body: "Pipeline management, delivery and fulfillment, the numbers that matter, and how to systemize your trade so it scales past you.",
  },
  {
    icon: BookOpen,
    title: "Merchant Library",
    body: "A living reference: playbooks, a full script vault, an objection library, and checklists for every stage of a deal.",
  },
];

export function OurCourses() {
  return (
    <section id="courses" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-3 text-xs uppercase tracking-[0.2em] text-brass">
            Curriculum
          </span>
          <h2 className="font-display text-3xl text-parchment sm:text-4xl">
            What you <span className="text-gradient-brass">actually work through</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {courses.map((c) => (
            <Card
              key={c.title}
              className="border border-transparent transition-colors hover:border-brass/30"
            >
              <CardContent className="pt-6">
                <c.icon className="h-6 w-6 text-brass" />
                <h3 className="mt-4 font-display text-xl text-parchment">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-parchment/60">{c.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <JoinButton />
        </div>
      </div>
    </section>
  );
}
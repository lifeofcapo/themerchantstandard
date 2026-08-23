import { Card, CardContent } from "@/components/ui/card";
import { JoinButton } from "@/components/shared/join-button";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "D. Marchetti",
    country: "Italy",
    title: "Finally stopped underpricing my own work",
    body: "I used to give away exclusive rights for $80 because I didn't know how to hold a price. Three weeks in, I closed my first $600 exclusive deal using the Merchant AI script almost word for word.",
  },
  {
    name: "K. Osei",
    country: "United Kingdom",
    title: "The AI assistant is the actual unlock",
    body: "I've bought sales courses before. None of them sat next to me while I was actually in a conversation with a buyer. This one does — screenshot in, next move out.",
  },
  {
    name: "R. Fontaine",
    country: "Canada",
    title: "Worth it for the catalog alone",
    body: "Between the objection library and the partner catalog, I stopped improvising every negotiation. There's a script for almost everything now.",
  },
];

export function Reviews() {
  return (
    <section className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-3 text-xs uppercase tracking-[0.2em] text-brass">
            Member Reviews
          </span>
          <h2 className="font-display text-3xl text-parchment sm:text-4xl">
            Merchants, not students
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <Card key={r.name} className="flex flex-col justify-between">
              <CardContent className="pt-6">
                <div className="mb-4 flex gap-0.5 text-brass">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brass" />
                  ))}
                </div>
                <p className="font-display text-lg text-parchment">{r.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-parchment/60">
                  {r.body}
                </p>
                <p className="mt-6 font-mono text-xs text-parchment/40">
                  {r.name} · {r.country}
                </p>
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
import { JoinButton } from "@/components/shared/join-button";

export function WorkHard() {
  return (
    <section className="relative overflow-hidden border-b border-line py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(201,162,39,0.4) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute -right-20 top-0 h-[420px] w-[420px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(124,36,48,0.45) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="ledger-grid absolute inset-0 opacity-50" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">

          <div className="flex-1">
            <span className="mb-4 inline-block rounded-full border border-line bg-panel-2 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-parchment/70">
              Ask Yourself
            </span>

            <h2 className="text-balance font-display text-3xl text-parchment sm:text-4xl lg:text-5xl">
              Are You Prepared To{" "}
              <span className="text-gradient-brass">Work Hard?</span>
            </h2>

            <div className="mt-6 space-y-4 text-parchment/70 leading-relaxed">
              <p>
                <strong className="font-semibold text-parchment">
                  Money-making is a skill.
                </strong>{" "}
                Like every other skill it can be learned, and the speed at which
                it is learned depends on the effort you put in, your coaches and
                the learning environment you are taught in.
              </p>
              <p>
                <strong className="font-semibold text-parchment">
                  Our coaches use the business models they teach,
                </strong>{" "}
                they know what it takes to be profitable, and they are the first
                to identify and utilize new disruptive technologies and
                strategies whenever they appear.
              </p>
              <p>
                <strong className="font-semibold text-parchment">
                  There is no better place on the planet to learn how to make
                  money online today.
                </strong>
              </p>
            </div>

            <div className="mt-10">
              <JoinButton />
            </div>
          </div>

          <div className="relative w-full md:w-[48%] md:shrink-0">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(124,36,48,0.35), transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            <div className="relative overflow-hidden rounded-3xl border border-line bg-panel min-h-[420px]">
              <img
                src="/images/work-hard-phones.png"
                alt="App screenshots showing the platform in action"
                className="h-full w-full object-cover object-center"
                draggable={false}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-panel to-transparent"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
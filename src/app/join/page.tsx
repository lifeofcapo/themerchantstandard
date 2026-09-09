import { VslLeadForm } from "@/components/shared/vsl-lead-form";

const YOUTUBE_ID = "YOUR_VIDEO_ID"; // заменить на свой

export default function JoinPage() {
  return (
    <main className="relative flex-1 overflow-hidden border-b border-line">
      <div className="ledger-grid absolute inset-0 opacity-40" />
      <div className="bg-gradient-wash-soft absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
        <h1 className="text-balance font-display text-[2.25rem] leading-tight text-parchment sm:text-5xl">
          Смотри бесплатное видео —{" "}
          <span className="text-gradient-brass italic">и заявка на вход</span>
        </h1>
        <p className="mt-4 text-balance text-parchment/70">
          5 минут, чтобы понять, как работает система, прежде чем оставить заявку.
        </p>

        <div className="mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-line shadow-2xl">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
            title="The Merchant Standard — intro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="mt-10">
          <VslLeadForm />
        </div>
      </div>
    </main>
  );
}
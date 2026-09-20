"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "success">("idle");
  const [error, setError] = React.useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Something went wrong.");
        return;
      }
      setStatus("success");
      setEmail("");
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="border-b border-line px-4 py-16">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-line bg-ink px-6 py-14 text-center sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 420px 520px at 0% 50%, rgba(201,162,39,0.32), transparent 70%),
              radial-gradient(ellipse 420px 520px at 100% 50%, rgba(201,162,39,0.32), transparent 70%),
              repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 64px)
            `,
          }}
        />

        <div className="relative">
          <h2 className="text-balance font-display text-3xl font-bold text-parchment sm:text-4xl">
            Stay Up To Date With The Latest
            <br className="hidden sm:block" /> Information On Wealth Generation
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-parchment/70">
            Join our email newsletter to access the latest insights on wealth
            generation and financial success.
          </p>

          {status === "success" ? (
            <p className="mx-auto mt-8 max-w-sm rounded-full border border-brass/30 bg-brass/5 px-6 py-3 text-sm text-parchment">
              You&apos;re in — check your inbox.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                maxLength={200}
                className="min-w-0 flex-1 rounded-full border border-line bg-panel px-5 py-3.5 text-sm text-parchment placeholder:text-parchment/50 focus:border-brass focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-shine shrink-0 rounded-full bg-gradient-to-r from-brass to-brass-light px-7 py-3.5 text-sm font-bold text-ink"
              >
                {loading ? <Loader2 className="mx-auto h-4 w-4 animate-spin" /> : "Subscribe"}
              </button>
            </form>
          )}
          {error && <p className="mt-3 text-xs text-seal-light">{error}</p>}
        </div>
      </div>
    </section>
  );
}
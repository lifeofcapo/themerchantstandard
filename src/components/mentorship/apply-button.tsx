"use client";

import * as React from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { validateLeadInput } from "@/lib/lead-validation";
import { cn } from "@/lib/utils";

const field =
  "w-full rounded-xl border border-line bg-panel px-4 py-2.5 text-sm text-parchment placeholder:text-parchment/40 focus:border-brass focus:outline-none sm:py-3 sm:text-base";

export function MentorshipApplyButton({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [website, setWebsite] = React.useState(""); // honeypot
  const [agreed, setAgreed] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [loading, setLoading] = React.useState(false);
  const [done, setDone] = React.useState(false);

  function validate() {
    const next: Record<string, string> = {};
    const shared = validateLeadInput({ name, email, phone });
    if (shared) {
      const s = shared.toLowerCase();
      if (s.includes("name")) next.name = shared;
      else if (s.includes("email")) next.email = shared;
      else if (s.includes("phone")) next.phone = shared;
      else next.form = shared;
    }
    const msg = message.trim();
    if (msg.length < 20) next.message = "Please tell us a bit more (at least 20 characters).";
    if (msg.length > 1000) next.message = "Please keep it under 1000 characters.";
    if (!agreed) next.agreed = "Please confirm to continue.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/mentorship/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
          website,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setErrors({ form: data?.error ?? "Something went wrong. Try again." });
        return;
      }
      setDone(true);
    } catch {
      setErrors({ form: "Something went wrong. Try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "btn-shine btn-cta-glow inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brass to-brass-light px-8 text-base font-bold text-ink hover:opacity-90 sm:w-auto sm:min-w-[260px]",
          className
        )}
      >
        <span className="relative z-10 flex items-center gap-2">
          {label}
          <ArrowRight className="h-4 w-4" />
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] w-[calc(100vw-2rem)] max-w-md overflow-y-auto rounded-2xl border border-line bg-ink p-0 sm:w-full">
          <div className="relative px-5 pb-6 pt-6 sm:px-6 sm:pb-8 sm:pt-8">
            <div className="ledger-grid absolute inset-0 opacity-30" />
            <div className="relative">
              <DialogHeader className="mb-5 text-center">
                <DialogTitle className="text-balance font-display text-xl text-parchment sm:text-2xl">
                  Apply for <span className="text-gradient-brass">Merchant Mentorship</span>
                </DialogTitle>
                <DialogDescription className="text-sm text-parchment/65">
                  Every application is reviewed before a fit call.
                </DialogDescription>
              </DialogHeader>

              {done ? (
                <p className="rounded-xl border border-brass/30 bg-brass/5 px-6 py-4 text-center text-parchment">
                  Application received. We will review it and reach out about a fit call.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      maxLength={60}
                      className={field}
                    />
                    {errors.name && <p className="mt-1 text-xs text-seal-light">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      maxLength={200}
                      className={field}
                    />
                    {errors.email && <p className="mt-1 text-xs text-seal-light">{errors.email}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="WhatsApp number, e.g. +1 555 123 4567"
                      maxLength={20}
                      inputMode="tel"
                      autoComplete="tel"
                      className={field}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-seal-light">{errors.phone}</p>}
                  </div>
                  <div>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your situation and what you want to achieve."
                      rows={4}
                      maxLength={1000}
                      className={cn(field, "resize-none")}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-seal-light">{errors.message}</p>
                    )}
                  </div>

                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  />

                  {errors.form && <p className="text-xs text-seal-light">{errors.form}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-shine mt-1 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-brass to-brass-light text-sm font-bold text-ink disabled:opacity-60 sm:h-14 sm:text-base"
                  >
                    {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Submit application"}
                  </button>

                  <label className="mt-2 flex items-start gap-3 text-[11px] leading-relaxed text-parchment/65 sm:text-xs">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0 rounded border-line bg-panel",
                        errors.agreed && "border-seal-light"
                      )}
                    />
                    <span>
                      I agree to the processing of my data to review this application. See{" "}
                      <a href="/privacy" className="underline hover:text-parchment">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="/terms" className="underline hover:text-parchment">
                        Terms
                      </a>
                      .
                    </span>
                  </label>
                  {errors.agreed && <p className="text-xs text-seal-light">{errors.agreed}</p>}
                </form>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
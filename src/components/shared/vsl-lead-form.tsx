"use client";

import * as React from "react";
import { Loader2, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const COUNTRIES = [
  { code: "US", dial: "1", flag: "🇺🇸" },
  { code: "RU", dial: "7", flag: "🇷🇺" },
  { code: "KZ", dial: "7", flag: "🇰🇿" },
  { code: "UA", dial: "380", flag: "🇺🇦" },
  { code: "GB", dial: "44", flag: "🇬🇧" },
  { code: "DE", dial: "49", flag: "🇩🇪" },
  { code: "FR", dial: "33", flag: "🇫🇷" },
  { code: "ES", dial: "34", flag: "🇪🇸" },
] as const;

type Country = (typeof COUNTRIES)[number];

function detectDefaultCountry(): Country {
  if (typeof navigator === "undefined") return COUNTRIES[0];
  const locale = navigator.language || "en-US";
  const region = locale.split("-")[1]?.toUpperCase();
  return COUNTRIES.find((c) => c.code === region) ?? COUNTRIES[0];
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type VslLeadFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function VslLeadForm({ open, onOpenChange }: VslLeadFormProps) {
  const [country, setCountry] = React.useState<Country>(COUNTRIES[0]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [agreed, setAgreed] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [loading, setLoading] = React.useState(false);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    setCountry(detectDefaultCountry());
  }, []);

  function validate() {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Введите имя";
    if (!EMAIL_REGEX.test(email.trim())) next.email = "Введите корректный e-mail";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 6 || digits.length > 14) next.phone = "Введите корректный номер телефона";
    if (!agreed) next.agreed = "Нужно согласие на обработку данных";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: `+${country.dial}${phone.replace(/\D/g, "")}`,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setErrors({ form: data?.error ?? "Что-то пошло не так, попробуйте ещё раз." });
        return;
      }
      setDone(true);
    } catch {
      setErrors({ form: "Что-то пошло не так, попробуйте ещё раз." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md overflow-hidden rounded-3xl border border-line bg-ink p-0">
        <div className="bg-gradient-to-r from-sky-500 to-blue-500 px-6 py-3 text-center text-sm font-semibold text-white">
          $100 to 1Mill Challenge
        </div>

        <div className="px-6 pb-8 pt-6">
          <DialogHeader className="mb-2 text-center">
            <DialogTitle className="text-balance font-display text-2xl text-parchment">
              Join 100to1mil FREE circle community
            </DialogTitle>
          </DialogHeader>
          <p className="mb-6 flex items-center justify-center gap-2 text-sm text-parchment/60">
            <User className="h-4 w-4" /> Hosted by Alex Gonzalez
          </p>

          {done ? (
            <p className="rounded-xl border border-brass/30 bg-brass/5 px-6 py-4 text-center text-parchment">
              Заявка принята — мы свяжемся с вами в ближайшее время.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-parchment placeholder:text-parchment/40 focus:border-brass focus:outline-none"
                />
                {errors.name && <p className="mt-1 text-xs text-seal-light">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@gmail.com"
                  className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-parchment placeholder:text-parchment/40 focus:border-brass focus:outline-none"
                />
                {errors.email && <p className="mt-1 text-xs text-seal-light">{errors.email}</p>}
              </div>

              <div>
                <div className="flex gap-2">
                  <select
                    value={`${country.code}`}
                    onChange={(e) => {
                      const next = COUNTRIES.find((c) => c.code === e.target.value);
                      if (next) setCountry(next);
                    }}
                    className="rounded-xl border border-line bg-panel px-3 py-3 text-parchment focus:border-brass focus:outline-none"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} +{c.dial}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number"
                    className="flex-1 rounded-xl border border-line bg-panel px-4 py-3 text-parchment placeholder:text-parchment/40 focus:border-brass focus:outline-none"
                  />
                </div>
                {errors.phone && <p className="mt-1 text-xs text-seal-light">{errors.phone}</p>}
              </div>

              {errors.form && <p className="text-xs text-seal-light">{errors.form}</p>}

              <Button
                type="submit"
                disabled={loading}
                className="mt-2 h-14 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 text-base font-bold text-ink hover:opacity-90"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Secure Your Spot"}
              </Button>

              <label className="mt-2 flex items-start gap-3 text-xs text-parchment/60">
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
                  By signing up via SMS, you agree to receive recurring automated marketing messages
                  to the phone number you provided, including shopping cart reminders. Consent is not
                  a condition of purchase. See our{" "}
                  <a href="/privacy" className="underline hover:text-parchment">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" className="underline hover:text-parchment">
                    Terms of Service
                  </a>
                  . Reply STOP to unsubscribe.
                </span>
              </label>
              {errors.agreed && <p className="text-xs text-seal-light">{errors.agreed}</p>}
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
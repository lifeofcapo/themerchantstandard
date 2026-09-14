"use client";

import * as React from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import {
  AsYouType,
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js";
import { COUNTRIES, getCountryByCode, type Country } from "@/lib/countries";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function detectDefaultCountry(): Country {
  if (typeof navigator === "undefined") return COUNTRIES[0];
  const region = (navigator.language || "en-US").split("-")[1]?.toUpperCase();
  return COUNTRIES.find((c) => c.code === region) ?? COUNTRIES[0];
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type VslLeadFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function VslLeadForm({ open, onOpenChange }: VslLeadFormProps) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [country, setCountry] = React.useState<Country>(
    COUNTRIES.find((c) => c.code === "US") ?? COUNTRIES[0]
  );
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
    if (!name.trim()) next.name = "Type your name";
    if (!EMAIL_REGEX.test(email.trim())) next.email = "Type correct e-mail";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 6 || digits.length > 14) next.phone = "Type correct phone number";
    if (!agreed) next.agreed = "Agreement to the terms is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handlePhoneChange(value: string) {
    const formatter = new AsYouType();
    const formatted = formatter.input(value);
    setPhone(formatted);

    if (value.trim().startsWith("+")) {
      const detectedCode = formatter.getCountry();
      const detectedCountry = getCountryByCode(detectedCode);
      if (detectedCountry) {
        setCountry(detectedCountry);
      }
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const rawDigits = phone.replace(/\D/g, "");
      const candidate = phone.trim().startsWith("+")
        ? phone
        : `+${country.dial}${rawDigits}`;

      let finalPhone = candidate;
      try {
        const parsed = parsePhoneNumberFromString(
          candidate,
          country.code as CountryCode
        );
        if (parsed?.isValid()) {
          finalPhone = parsed.number;
        }
      } catch {
      }

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: finalPhone,
          country: country.code,
          countryDial: country.dial,
          countryFlag: country.flag,
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] w-[calc(100vw-2rem)] max-w-md overflow-y-auto rounded-2xl border border-line bg-ink p-0 sm:w-full">
        <div className="relative px-5 pb-6 pt-6 sm:px-6 sm:pb-8 sm:pt-8">
          <div className="ledger-grid absolute inset-0 opacity-30" />

          <div className="relative">
            <DialogHeader className="mb-1 text-center">
              <span className="wax-seal mx-auto mb-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full sm:mb-4">
                <Image
                  src="/logo1.png"
                  alt="The Merchant Standard"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </span>
              <DialogTitle className="text-balance font-display text-xl text-parchment sm:text-2xl">
                application for entry into{" "}
                <span className="text-gradient-brass">The Merchant Standard</span>
              </DialogTitle>
            </DialogHeader>
            <p className="mb-5 text-center text-xs text-parchment/55 sm:mb-6 sm:text-sm">
              Leave your contact details — we&rsquo;ll get in touch and explain the next step.
            </p>

            {done ? (
              <p className="rounded-xl border border-brass/30 bg-brass/5 px-6 py-4 text-center text-parchment">
                Your request has been received — we will contact you shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 sm:gap-3">
                <div>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Smith"
                    className="w-full rounded-xl border border-line bg-panel px-4 py-2.5 text-sm text-parchment placeholder:text-parchment/40 focus:border-brass focus:outline-none sm:py-3 sm:text-base"
                  />
                  {errors.name && <p className="mt-1 text-xs text-seal-light">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@gmail.com"
                    className="w-full rounded-xl border border-line bg-panel px-4 py-2.5 text-sm text-parchment placeholder:text-parchment/40 focus:border-brass focus:outline-none sm:py-3 sm:text-base"
                  />
                  {errors.email && <p className="mt-1 text-xs text-seal-light">{errors.email}</p>}
                </div>

                <div>
                  <div className="flex gap-2">
                    <div
                      className={cn(
                        "flex h-[42px] w-[74px] shrink-0 items-center justify-center gap-1",
                        "rounded-xl border border-line bg-panel",
                        "text-sm text-parchment",
                        "sm:h-[50px] sm:w-[82px]"
                      )}
                    >
                      <span className="text-lg">{country.flag}</span>
                      <span className="text-parchment/70">+{country.dial}</span>
                    </div>

                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      placeholder="+7 999 123-45-67"
                      className="min-w-0 flex-1 rounded-xl border border-line bg-panel px-4 py-2.5 text-sm text-parchment placeholder:text-parchment/40 focus:border-brass focus:outline-none sm:py-3 sm:text-base"
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-seal-light">{errors.phone}</p>}
                </div>

                {errors.form && <p className="text-xs text-seal-light">{errors.form}</p>}

                <Button
                  type="submit"
                  disabled={loading}
                  className="btn-shine mt-1 h-12 rounded-full bg-gradient-to-r from-brass to-brass-light text-sm font-bold text-ink sm:mt-2 sm:h-14 sm:text-base"
                >
                  {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Submit a request"}
                </Button>

                <label className="mt-2 flex items-start gap-3 text-[11px] leading-relaxed text-parchment/55 sm:text-xs">
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
                    By submitting the application, you agree to the processing of data and receiving
                    messages via email/phone within the scope of the application. See{" "}
                    <a href="/privacy" className="underline hover:text-parchment">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="/terms" className="underline hover:text-parchment">
                      Terms of Use
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
  );
}
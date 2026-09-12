"use client";

import * as React from "react";
import { Loader2, ShieldCheck } from "lucide-react";
import { COUNTRIES } from "@/lib/countries";
import { Country } from "@/lib/countries";
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
    if (!agreed) next.agreed = "Нужно согласие с условиями";
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
      <DialogContent className="max-w-md overflow-hidden rounded-2xl border border-line bg-ink p-0">
        <div className="relative px-6 pb-8 pt-8">
          <div className="ledger-grid absolute inset-0 opacity-30" />

          <div className="relative">
            <DialogHeader className="mb-1 text-center">
              <span className="wax-seal mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <ShieldCheck className="h-5 w-5 text-parchment" />
              </span>
              <DialogTitle className="text-balance font-display text-2xl text-parchment">
                Заявка на вход в{" "}
                <span className="text-gradient-brass">The Merchant Standard</span>
              </DialogTitle>
            </DialogHeader>
            <p className="mb-6 text-center text-sm text-parchment/55">
              Оставьте контакты — мы свяжемся с вами и расскажем следующий шаг.
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
                    placeholder="Имя"
                    className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-parchment placeholder:text-parchment/40 focus:border-brass focus:outline-none"
                  />
                  {errors.name && <p className="mt-1 text-xs text-seal-light">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Почта"
                    className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-parchment placeholder:text-parchment/40 focus:border-brass focus:outline-none"
                  />
                  {errors.email && <p className="mt-1 text-xs text-seal-light">{errors.email}</p>}
                </div>

                <div>
                  <div className="flex gap-2">
                    <select
                      value={country.code}
                      onChange={(e) => {
                        const next = COUNTRIES.find((c) => c.code === e.target.value);
                        if (next) {
                          setCountry(next);
                        }
                      }}
                      className="w-[105px] shrink-0 rounded-xl border border-line bg-panel px-3 py-3 text-parchment focus:border-brass focus:outline-none"
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.flag} +{c.dial}
                        </option>
                      ))}
                    </select>

                    <div className="flex min-w-0 flex-1 overflow-hidden rounded-xl border border-line bg-panel focus-within:border-brass">
                      <span className="flex shrink-0 items-center pl-4 text-parchment/70">
                        +{country.dial}
                      </span>

                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Телефон"
                        className="min-w-0 flex-1 bg-transparent px-2 py-3 pr-4 text-parchment placeholder:text-parchment/40 focus:outline-none"
                      />
                    </div>
                  </div>

                  {errors.phone && (
                    <p className="mt-1 text-xs text-seal-light">
                      {errors.phone}
                    </p>
                  )}
                </div>


                {errors.form && <p className="text-xs text-seal-light">{errors.form}</p>}

                <Button
                  type="submit"
                  disabled={loading}
                  className="btn-shine mt-2 h-14 rounded-full bg-gradient-to-r from-brass to-brass-light text-base font-bold text-ink"
                >
                  {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Отправить заявку"}
                </Button>

                <label className="mt-2 flex items-start gap-3 text-xs text-parchment/55">
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
                    Отправляя заявку, вы соглашаетесь на обработку данных и получение
                    сообщений по email/телефону в рамках заявки. См.{" "}
                    <a href="/privacy" className="underline hover:text-parchment">
                      Политику конфиденциальности
                    </a>{" "}
                    и{" "}
                    <a href="/terms" className="underline hover:text-parchment">
                      Условия использования
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
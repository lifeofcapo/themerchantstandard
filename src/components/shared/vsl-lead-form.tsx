"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function VslLeadForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [done, setDone] = React.useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Что-то пошло не так, попробуйте ещё раз.");
        return;
      }
      setDone(true);
    } catch {
      setError("Что-то пошло не так, попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <p className="rounded-xl border border-brass/30 bg-brass/5 px-6 py-4 text-parchment">
        Заявка принята — мы свяжемся с вами в ближайшее время.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4 text-left">
      <div className="flex flex-col gap-2">
        <Label htmlFor="lead-name">Имя</Label>
        <Input id="lead-name" required value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="lead-email">Почта</Label>
        <Input id="lead-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="lead-phone">Телефон</Label>
        <Input id="lead-phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      {error && <p className="text-xs text-seal-light">{error}</p>}
      <Button type="submit" size="lg" disabled={loading} className="btn-shine">
        {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Отправляем…</> : "Оставить заявку"}
      </Button>
    </form>
  );
}
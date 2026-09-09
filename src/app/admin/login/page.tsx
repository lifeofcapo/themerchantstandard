"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Неверный пароль.");
    }
  }

  return (
    <main className="flex flex-1 items-center justify-center px-6 py-32">
      <form onSubmit={handleSubmit} className="flex w-full max-w-sm flex-col gap-4">
        <h1 className="font-display text-2xl text-parchment">Вход в админку</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-lg border border-line bg-panel px-4 py-3 text-parchment"
          placeholder="Пароль"
          autoFocus
        />
        {error && <p className="text-xs text-seal-light">{error}</p>}
        <button type="submit" className="rounded-lg bg-brass px-4 py-3 font-semibold text-ink">
          Войти
        </button>
      </form>
    </main>
  );
}
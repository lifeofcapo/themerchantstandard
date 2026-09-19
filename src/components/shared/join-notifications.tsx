"use client";

import * as React from "react";
import { X } from "lucide-react";

const EVENTS = [
  { name: "Liam", country: "United Kingdom", flag: "🇬🇧" },
  { name: "Noah", country: "United States", flag: "🇺🇸" },
  { name: "Mateo", country: "Spain", flag: "🇪🇸" },
  { name: "Yuki", country: "Japan", flag: "🇯🇵" },
  { name: "Amara", country: "Nigeria", flag: "🇳🇬" },
  { name: "Lucas", country: "Brazil", flag: "🇧🇷" },
  { name: "Emma", country: "Germany", flag: "🇩🇪" },
  { name: "Ivan", country: "Poland", flag: "🇵🇱" },
];

export function JoinNotifications() {
  const [current, setCurrent] = React.useState<typeof EVENTS[number] | null>(null);
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    function showNext() {
      const random = EVENTS[Math.floor(Math.random() * EVENTS.length)];
      setCurrent(random);
      setDismissed(false);
    }

    const firstDelay = setTimeout(showNext, 8000);
    const interval = setInterval(showNext, 22000);

    return () => {
      clearTimeout(firstDelay);
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    if (!current || dismissed) return;
    const hide = setTimeout(() => setDismissed(true), 6000);
    return () => clearTimeout(hide);
  }, [current, dismissed]);

  if (!current || dismissed) return null;

  return (
    <>
      <div className="fixed bottom-6 left-6 z-30 hidden max-w-xs items-center gap-3 rounded-xl border border-line bg-panel/95 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-md md:flex">
        <span className="text-2xl">{current.flag}</span>
        <p className="text-sm text-parchment/85">
          <span className="font-semibold text-parchment">{current.name}</span> from{" "}
          {current.country} joined The Merchant Standard
        </p>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="ml-1 shrink-0 text-parchment/40 hover:text-parchment"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div
        className="fixed inset-x-0 z-30 flex h-20 items-center justify-between gap-3 border-t border-line bg-panel/95 px-4 backdrop-blur-md md:hidden"
        style={{ bottom: "calc(80px + env(safe-area-inset-bottom, 0px))" }}
      >
        <div className="flex min-w-0 items-center gap-3">
          <span className="shrink-0 text-2xl">{current.flag}</span>
          <p className="min-w-0 text-sm text-parchment/85">
            <span className="font-semibold text-parchment">{current.name}</span> from{" "}
            {current.country} joined
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="shrink-0 text-parchment/40 hover:text-parchment"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}
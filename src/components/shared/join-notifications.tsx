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
      setCurrent(EVENTS[Math.floor(Math.random() * EVENTS.length)]);
      setDismissed(false);
    }

    const firstDelay = setTimeout(showNext, 10000);

    const interval = setInterval(showNext, 10 * 60 * 1000);

    return () => {
      clearTimeout(firstDelay);
      clearInterval(interval);
    };
  }, []);

  if (!current || dismissed) return null;

  return (
    <>
      <div className="header-glass fixed bottom-6 left-6 z-30 hidden max-w-xs items-center gap-3 rounded-full px-4 py-2.5 md:flex">
        <span className="text-xl">{current.flag}</span>

        <p className="text-sm text-parchment/85">
          <span className="font-semibold text-parchment">
            {current.name}
          </span>{" "}
          from {current.country} joined
        </p>

        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="ml-1 shrink-0 text-parchment/40 hover:text-parchment"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      <div
        className="fixed inset-x-0 z-30 px-3 md:hidden"
        style={{
          bottom: "calc(5.75rem + env(safe-area-inset-bottom, 0px))",
        }}
      >
        <div className="header-glass flex items-center justify-between gap-3 rounded-full px-4 py-2.5">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="shrink-0 text-lg">{current.flag}</span>

            <p className="min-w-0 truncate text-sm text-parchment/85">
              <span className="font-semibold text-parchment">
                {current.name}
              </span>{" "}
              from {current.country} joined
            </p>
          </div>

          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            className="shrink-0 text-parchment/40 hover:text-parchment"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
}
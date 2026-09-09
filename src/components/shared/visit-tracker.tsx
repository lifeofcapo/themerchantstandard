"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

export function VisitTracker() {
  const pathname = usePathname();

  React.useEffect(() => {
    const key = `visit-logged:${pathname}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");

    const payload = JSON.stringify({ path: pathname, referrer: document.referrer });
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/track", new Blob([payload], { type: "application/json" }));
    } else {
      fetch("/api/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: payload, keepalive: true });
    }
  }, [pathname]);

  return null;
}
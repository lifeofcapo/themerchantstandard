"use client";

import * as React from "react";
import { JoinButton } from "@/components/shared/join-button";

export function MobileStickyCta() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-3 transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-[140%]"
      }`}
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)" }}
    >
      <div className="header-glass flex h-16 items-center justify-between gap-3 rounded-full px-4">
        <div className="min-w-0">
          <p className="truncate font-display text-sm text-parchment">
            Join The Merchant Standard
          </p>
          <p className="mt-0.5 text-[11px] text-parchment/60">$49/mo · cancel anytime</p>
        </div>
        <JoinButton size="sm" label="Join Now" className="shrink-0 rounded-full px-5 text-sm" />
      </div>
    </div>
  );
}
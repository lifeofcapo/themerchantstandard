"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
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
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex h-20 items-center justify-between gap-3 px-4">
        <div className="min-w-0">
          <p className="truncate font-display text-sm text-parchment">
            Join The Merchant Standard
          </p>
          <p className="mt-0.5 text-xs text-parchment/60">$49/mo · cancel anytime</p>
        </div>
        <JoinButton
          size="sm"
          label="Join Now"
          className="btn-shine shrink-0 rounded-full bg-gradient-to-r from-brass to-brass-light px-5 text-sm font-bold text-ink"
        />
      </div>
    </div>
  );
}
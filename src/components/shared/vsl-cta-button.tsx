"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type VslCtaButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

export function VslCtaButton({ label, onClick, className }: VslCtaButtonProps) {
  const [shining, setShining] = React.useState(false);
  const shineTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  function triggerShine() {
    if (shineTimeout.current) clearTimeout(shineTimeout.current);
    setShining(false);
    requestAnimationFrame(() => {
      setShining(true);
      shineTimeout.current = setTimeout(() => setShining(false), 900);
    });
  }

  React.useEffect(() => {
    return () => {
      if (shineTimeout.current) clearTimeout(shineTimeout.current);
    };
  }, []);

  return (
    <button
      type="button"
      onPointerDown={triggerShine}
      onClick={onClick}
      className={cn(
        "btn-shine btn-cta-glow relative inline-flex h-14 w-full items-center justify-center gap-2 rounded-full",
        "bg-gradient-to-r from-brass to-brass-light px-6 text-base font-bold text-ink",
        "sm:w-auto sm:px-10",
        shining && "btn-shine-active",
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {label}
        <ArrowRight className="h-4 w-4" />
      </span>
    </button>
  );
}
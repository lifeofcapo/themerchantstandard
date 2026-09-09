"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const raf = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  React.useEffect(() => {
    if (!ready) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" } // px вместо % — стабильнее на разных высотах экрана
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ready]);

  const Comp = as as React.ElementType;

  return (
    <Comp
      ref={ref}
      className={cn("reveal", visible && "reveal-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Comp>
  );
}
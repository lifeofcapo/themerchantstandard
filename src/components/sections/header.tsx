"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { JoinButton } from "@/components/shared/join-button";

const links = [
  { href: "#courses", label: "Courses" },
  { href: "#ai-assistant", label: "AI Assistant" },
  { href: "#wins", label: "Wins" },
  { href: "#faq", label: "FAQ" },
];

function smoothScrollTo(targetY: number, duration = 700) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function easeInOutCubic(t: number) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

export function Header() {
  const [open, setOpen] = useState(false);

  function handleNavClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) {
  e.preventDefault();
  setOpen(false);

  const el = document.querySelector(href);
  if (!el) return;

  const headerOffset = 104;

  const targetY =
    el.getBoundingClientRect().top +
    window.scrollY -
    headerOffset;

  smoothScrollTo(targetY, 700);

  history.pushState(null, "", href);
}

  return (
    <header className="fixed left-0 right-0 top-4 z-50 bg-transparent px-4">
      <div className="header-glass relative mx-auto flex h-16 max-w-3xl items-center justify-between gap-3 rounded-full px-4 sm:px-3 sm:pl-4">
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="text-sm font-medium text-parchment/70 transition-colors hover:text-brass"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="flex cursor-pointer items-center justify-center text-parchment md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-sm font-semibold tracking-wide text-parchment sm:text-base"
        >
          The Merchant <span className="text-gradient-brass">Standard</span>
        </Link>

        <div className="ml-auto flex items-center md:ml-0">
          <JoinButton size="sm" label="Join — $50/mo" className="rounded-full" />
        </div>
      </div>

      {open && (
        <div className="header-glass mx-auto mt-2 max-w-3xl rounded-3xl px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="text-sm font-medium text-parchment/70"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

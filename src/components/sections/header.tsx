"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { JoinButton } from "@/components/shared/join-button";

const links = [
  { href: "#courses", label: "Courses" },
  { href: "#ai-assistant", label: "AI Assistant" },
  { href: "#wins", label: "Wins" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 bg-transparent px-4">
      <div className="header-glass relative mx-auto flex h-16 max-w-3xl items-center justify-between rounded-full px-3 pl-4">
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-parchment/70 transition-colors hover:text-brass"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="cursor-pointer text-parchment md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link
          href="/"
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2"
        >
          <span className="hidden font-display text-sm font-semibold tracking-wide text-parchment sm:inline">
            The Merchant <span className="text-gradient-brass">Standard</span>
          </span>
        </Link>

        <div className="flex items-center">
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
                onClick={() => setOpen(false)}
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

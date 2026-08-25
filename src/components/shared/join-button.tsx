"use client";

import * as React from "react";
import { Loader2, Mail, ShieldAlert } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

type JoinButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    label?: string;
  };

export function JoinButton({
  label = "Join The Merchant Standard — $49/mo",
  className,
  variant,
  size = "lg",
  ...props
}: JoinButtonProps) {
  const [emailOpen, setEmailOpen] = React.useState(false);
  const [unavailableOpen, setUnavailableOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => null);

      if (res.status === 503 || !data) {
        setEmailOpen(false);
        setUnavailableOpen(true);
        return;
      }

      if (!res.ok) {
        setError(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      setEmailOpen(false);
      setUnavailableOpen(true);
    } catch {
      setEmailOpen(false);
      setUnavailableOpen(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Button
        type="button"
        variant={variant}
        size={size}
        className={cn(
          "btn-shine",
          size === "lg" &&
            "h-auto min-h-12 rounded-full px-6 py-3 text-center text-sm font-semibold whitespace-normal shadow-lg shadow-brass/10 sm:h-14 sm:px-8 sm:text-base",
          className
        )}
        onClick={() => setEmailOpen(true)}
        {...props}
      >
        <span className="relative z-10">{label}</span>
      </Button>

      <Dialog open={emailOpen} onOpenChange={setEmailOpen}>
        <DialogContent className="bg-[rgba(11,12,14,0.94)] backdrop-blur-2xl border-[rgba(201,162,39,0.4)]">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">
              Join The Merchant Standard
            </DialogTitle>
            <DialogDescription>
              Enter your email to continue to secure checkout — $49/month, cancel
              anytime.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="join-email">Email</Label>
              <div className="relative">
                <Mail className="pointer-events-none absolute top-1/2 left-2.5 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="join-email"
                  type="email"
                  required
                  autoFocus
                  placeholder="you@example.com"
                  className="pl-8"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {error && <p className="text-xs text-seal-light">{error}</p>}
            </div>

            <DialogFooter showCloseButton={false}>
              <Button
                type="button"
                variant="outline"
                onClick={() => setEmailOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Redirecting…
                  </>
                ) : (
                  "Continue to checkout"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={unavailableOpen} onOpenChange={setUnavailableOpen}>
        <DialogContent>
          <DialogHeader>
            <div className="wax-seal mb-2 flex h-12 w-12 items-center justify-center rounded-full">
              <ShieldAlert className="h-5 w-5 text-parchment" />
            </div>
            <DialogTitle className="font-display text-xl">
              Payments are temporarily unavailable
            </DialogTitle>
            <DialogDescription>
              We&apos;re unable to process new memberships right now. Please try
              again later, or reach out if this keeps happening.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter showCloseButton={false}>
            <Button
              variant="outline"
              onClick={() => setUnavailableOpen(false)}
              className="w-full sm:w-auto"
            >
              Got it
            </Button>
            <Button asChild className="w-full sm:w-auto">
              <a href="mailto:info@merchantstandard.com">Contact us</a>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
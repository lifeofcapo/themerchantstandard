import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <div className="wax-seal mb-8 h-20 w-20 rounded-full">
        <CheckCircle2 className="h-9 w-9 text-parchment" />
      </div>
      <h1 className="font-display text-3xl text-parchment sm:text-4xl">
        You&apos;re in.
      </h1>
      <p className="mt-4 max-w-md text-balance leading-relaxed text-parchment/70">
        Check your inbox — your Discord invite is on its way to the email you paid
        with. It can take a couple of minutes to arrive.
      </p>
      <p className="mt-2 max-w-md text-sm text-parchment/40">
        Didn&apos;t get it after 10 minutes? Check spam, or email us at{" "}
        <a href="mailto:info@merchantstandard.com" className="text-brass hover:underline">
          info@merchantstandard.com
        </a>
        .
      </p>
      <Link href="/" className="mt-10 text-sm text-brass hover:underline">
        ← Back to home
      </Link>
    </main>
  );
}

import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The Merchant Standard — Sell Exclusive Beats Like a Merchant",
  description:
    "A private trading house for beat sellers. Learn to close deals with exclusive-rights beats, get a personal AI sales assistant, and trade inside a vetted merchant community. $50/month.",
  metadataBase: new URL("https://themerchantstandard.com"),
  openGraph: {
    title: "The Merchant Standard",
    description:
      "A private trading house for beat sellers. Close deals with confidence, at your price.",
    url: "https://themerchantstandard.com",
    siteName: "The Merchant Standard",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-parchment">
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
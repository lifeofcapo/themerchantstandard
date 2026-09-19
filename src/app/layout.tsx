import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

const manrope = Manrope({
  variable: "--font-fraunces", 
  subsets: ["latin"],         
  weight: ["400", "500", "600", "700", "800"],
});

const rivieraNights = localFont({
  variable: "--font-inter", 
  src: [
    { path: "../../public/fonts/RivieraNightsTrial-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/RivieraNightsTrial-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/RivieraNightsTrial-Bold.otf", weight: "700", style: "normal" },
  ],
});

const moisette = localFont({
  variable: "--font-accent",
  src: [
    { path: "../../public/fonts/Moisette-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Moisette-Italic.otf", weight: "400", style: "italic" },
  ],
});

const SITE_URL = "https://themerchantstandard.com";
const SITE_NAME = "TheMerchantStandard";
const DEFAULT_DESCRIPTION =
  "A private trading house for beat sellers. Get a ready product catalog, an AI that closes deals with you, and the exact system to sell music products online — no beats required. Start for $49/month.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Sell Music Products Like a Merchant, Not a Producer`,
    template: `%s — ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "sell beats",
    "beat business",
    "music merchant",
    "AI sales assistant",
    "exclusive rights beats",
    "sell music products online",
  ],
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Sell Music Products Like a Merchant`,
    description: DEFAULT_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Sell Music Products Like a Merchant`,
    description: DEFAULT_DESCRIPTION,
  },
  // verification: {
  //   google: "google-site-verification-code",
  //   other: { "yandex-verification": "yandex-code" },
  // },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo1.png`,
  description: DEFAULT_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${rivieraNights.variable} ${moisette.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-parchment">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
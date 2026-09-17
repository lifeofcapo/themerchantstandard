import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://themerchantstandard.vercel.app";
  return [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/free-training`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/privacy`, lastModified: new Date(), priority: 0.2 },
    { url: `${base}/terms`, lastModified: new Date(), priority: 0.2 },
  ];
}
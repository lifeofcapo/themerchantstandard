import { NextRequest } from "next/server";

export function getClientIp(req: NextRequest): string | null {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp;
  return null;
}

export function getGeo(req: NextRequest) {
  return {
    country: req.headers.get("x-vercel-ip-country"),
    region: req.headers.get("x-vercel-ip-country-region"),
    city: req.headers.get("x-vercel-ip-city")
      ? decodeURIComponent(req.headers.get("x-vercel-ip-city")!)
      : null,
  };
}
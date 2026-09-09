import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getClientIp, getGeo } from "@/lib/request-info";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const path = typeof body?.path === "string" ? body.path.slice(0, 300) : "/";
  const referrer = typeof body?.referrer === "string" ? body.referrer.slice(0, 300) : null;

  const ipAddress = getClientIp(req);
  const geo = getGeo(req);

  try {
    await prisma.visit.create({
      data: {
        path,
        referrer: referrer ?? undefined,
        ipAddress: ipAddress ?? undefined,
        country: geo.country ?? undefined,
        region: geo.region ?? undefined,
        city: geo.city ?? undefined,
      },
    });
  } catch (err) {
    console.error("Failed to log visit:", err);
  }

  return NextResponse.json({ ok: true });
}
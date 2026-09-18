import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getClientIp, getGeo } from "@/lib/request-info";
import { validateLeadInput } from "@/lib/lead-validation";

const bodySchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().min(1).max(200),
  phone: z.string().min(1).max(40),
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = bodySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Please check your input." }, { status: 400 });
  }

  const validationError = validateLeadInput(parsed.data);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const { name, email, phone } = parsed.data;
  const ipAddress = getClientIp(req);
  const geo = getGeo(req);

  try {
    await prisma.lead.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        ipAddress: ipAddress ?? undefined,
        country: geo.country ?? undefined,
        region: geo.region ?? undefined,
        city: geo.city ?? undefined,
      },
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to save lead:", err);
    return NextResponse.json({ error: "Не удалось сохранить заявку." }, { status: 500 });
  }
}
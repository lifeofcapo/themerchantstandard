import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getClientIp } from "@/lib/request-info";
import { EMAIL_REGEX, isBlockedPhrase } from "@/lib/lead-validation";

const bodySchema = z.object({ email: z.string().min(1).max(200) });

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const email = parsed.data.email.trim().toLowerCase();
  if (/[<>"'`]/.test(email) || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (isBlockedPhrase(email.split("@")[0])) {
    return NextResponse.json({ error: "Please use your real email address." }, { status: 400 });
  }

  try {
    await prisma.newsletterSubscriber.upsert({
      where: { email },
      update: {},
      create: { email, ipAddress: getClientIp(req) ?? undefined },
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to save newsletter subscriber:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
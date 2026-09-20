import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { verifyAdminSessionToken } from "@/lib/admin-auth";

const bodySchema = z.object({
  resource: z.enum(["purchase", "lead", "newsletter"]),
  id: z.string().min(1),
});

export async function POST(req: NextRequest) {
  const token = req.cookies.get("admin_session")?.value;
  const authorized = await verifyAdminSessionToken(token);
  if (!authorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { resource, id } = parsed.data;

  try {
    if (resource === "purchase") {
      await prisma.purchase.delete({ where: { id } });
    } else if (resource === "lead") {
      await prisma.lead.delete({ where: { id } });
    } else {
      await prisma.newsletterSubscriber.delete({ where: { id } });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to delete row:", err);
    return NextResponse.json({ error: "Failed to delete." }, { status: 500 });
  }
}
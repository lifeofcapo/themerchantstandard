import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 });
  }

  const lead = await prisma.lead.findUnique({ where: { unsubscribeToken: token } });
  if (lead) {
    await prisma.lead.update({ where: { id: lead.id }, data: { unsubscribedAt: new Date() } });
  } else {
    const sub = await prisma.newsletterSubscriber.findUnique({ where: { unsubscribeToken: token } });
    if (sub) {
      await prisma.newsletterSubscriber.update({
        where: { id: sub.id },
        data: { unsubscribedAt: new Date() },
      });
    }
  }

  return new NextResponse(
    `<html><body style="font-family:sans-serif; text-align:center; padding:60px; background:#0b0c0e; color:#f3efe4;">
      <h1>You've been unsubscribed.</h1>
      <p>You won't receive further emails from us.</p>
    </body></html>`,
    { headers: { "Content-Type": "text/html" } }
  );
}
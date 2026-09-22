import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { processContact } from "@/lib/send-sequence-step";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [leads, subscribers] = await Promise.all([
    prisma.lead.findMany({ where: { convertedAt: null, unsubscribedAt: null } }),
    prisma.newsletterSubscriber.findMany({ where: { convertedAt: null, unsubscribedAt: null } }),
  ]);

  let sent = 0;

  for (const lead of leads) {
    const result = await processContact(lead, (id, data) =>
      prisma.lead.update({ where: { id }, data })
    );
    if (result === "sent") sent++;
  }

  for (const sub of subscribers) {
    const result = await processContact(sub, (id, data) =>
      prisma.newsletterSubscriber.update({ where: { id }, data })
    );
    if (result === "sent") sent++;
  }

  return NextResponse.json({ ok: true, sent, checked: leads.length + subscribers.length });
}
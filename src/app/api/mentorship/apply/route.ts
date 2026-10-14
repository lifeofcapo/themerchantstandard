import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { getClientIp, getGeo } from "@/lib/request-info";
import { validateLeadInput } from "@/lib/lead-validation";

const bodySchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().min(1).max(200),
  phone: z.string().min(1).max(40),
  message: z.string().min(1).max(2000),
  website: z.string().optional(), // honeypot
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {

  const body = await req.json().catch(() => null);
  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check your input." }, { status: 400 });
  }

  // Bots fill the hidden field. Pretend success, store nothing.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, phone } = parsed.data;
  const message = parsed.data.message
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .trim();

  const validationError = validateLeadInput({ name, email, phone });
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }
  if (message.length < 20 || message.length > 1000) {
    return NextResponse.json({ error: "Please check your message." }, { status: 400 });
  }

  const ipAddress = getClientIp(req);
  const geo = getGeo(req);

  try {
    await prisma.mentorshipApplication.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        message,
        ipAddress: ipAddress ?? undefined,
        country: geo.country ?? undefined,
      },
    });
  } catch (err) {
    console.error("Failed to save mentorship application:", err);
    return NextResponse.json({ error: "Could not save the application." }, { status: 500 });
  }

  // Owner notification. A failure here must not fail the application.
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "The Merchant Standard <hello@themerchantstandard.com>",
      to: process.env.MENTORSHIP_NOTIFY_EMAIL ?? "support@themerchantstandard.com",
      subject: `New mentorship application: ${name.trim()}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
        <p><strong>WhatsApp:</strong> ${escapeHtml(phone.trim())}</p>
        <p><strong>Country (IP):</strong> ${escapeHtml(geo.country ?? "unknown")}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });
  } catch (err) {
    console.error("Mentorship notification email failed:", err);
  }

  return NextResponse.json({ ok: true });
}
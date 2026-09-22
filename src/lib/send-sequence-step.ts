import { Resend } from "resend";
import { SEQUENCE } from "./email-sequence";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "The Merchant Standard <support@themerchantstandard.com>";
const SITE = "https://themerchantstandard.com";

type Contact = {
  id: string;
  email: string;
  createdAt: Date;
  sequenceStep: number;
  convertedAt: Date | null;
  unsubscribedAt: Date | null;
  unsubscribeToken: string;
};

export async function processContact(
  contact: Contact,
  updateFn: (id: string, data: { sequenceStep: number; lastEmailSentAt: Date }) => Promise<unknown>
) {
  if (contact.convertedAt || contact.unsubscribedAt) return "skipped";
  if (contact.sequenceStep >= SEQUENCE.length) return "sequence-complete";

  const step = SEQUENCE[contact.sequenceStep];
  const daysSinceEntry =
    (Date.now() - contact.createdAt.getTime()) / (1000 * 60 * 60 * 24);

  if (daysSinceEntry < step.dayOffset) return "not-due-yet";

  const unsubscribeUrl = `${SITE}/api/unsubscribe?token=${contact.unsubscribeToken}`;

  try {
    await resend.emails.send({
      from: FROM,
      to: contact.email,
      subject: step.subject,
      html: step.body(unsubscribeUrl),
    });
    await updateFn(contact.id, {
      sequenceStep: contact.sequenceStep + 1,
      lastEmailSentAt: new Date(),
    });
    return "sent";
  } catch (err) {
    console.error(`Failed to send sequence email to ${contact.email}:`, err);
    return "error";
  }
}
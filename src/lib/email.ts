import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "The Merchant Standard <info@merchantstandard.com>";

export async function sendInviteEmail(to: string, inviteUrl: string) {
  await resend.emails.send({
    from: FROM,
    to,
    subject: "You're in. Here's your invite to The Merchant Standard.",
    html: `
      <div style="font-family: Georgia, serif; background:#0b0c0e; color:#f3efe4; padding:40px; max-width:520px; margin:0 auto;">
        <p style="color:#c9a227; letter-spacing:2px; font-size:12px; text-transform:uppercase; margin-bottom:24px;">The Merchant Standard</p>
        <h1 style="font-size:24px; margin-bottom:16px;">Welcome to the trading house.</h1>
        <p style="line-height:1.6; color:#f3efe4cc;">
          Your membership is confirmed. Click below to join the private Discord community —
          this link is single-use and tied to your purchase.
        </p>
        <a href="${inviteUrl}"
           style="display:inline-block; margin-top:24px; background:#c9a227; color:#0b0c0e; padding:14px 28px; text-decoration:none; font-weight:600; border-radius:2px;">
          Join the Server
        </a>
        <p style="margin-top:32px; font-size:12px; color:#f3efe680;">
          This invite expires in 3 days and can only be used once. If it expires before you use it,
          reply to this email and we'll issue a new one.
        </p>
      </div>
    `,
  });
}
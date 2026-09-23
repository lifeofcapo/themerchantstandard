import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "The Merchant Standard <hello@themerchantstandard.com>";

export async function sendInviteEmail(to: string, inviteUrl: string) {
  await resend.emails.send({
    from: FROM,
    to,
    subject: "Your Purchase Is Confirmed — The Merchant Standard",
    html: `
      <div style="font-family: Georgia, serif; background:#0b0c0e; color:#f3efe4; padding:40px; max-width:520px; margin:0 auto;">
        <p style="color:#c9a227; letter-spacing:2px; font-size:12px; text-transform:uppercase; margin-bottom:24px;">The Merchant Standard</p>

        <h1 style="font-size:24px; margin-bottom:16px;">Welcome to The Merchant Standard.</h1>

        <p style="line-height:1.6; color:#f3efe4cc;">
          Your payment was successful, and your purchase has been confirmed.
        </p>

        <p style="line-height:1.6; color:#f3efe4cc;">
          Your next step is to enter our official Discord server, where you’ll find the education,
          tools, and operating environment to work toward building a profitable online business of your own.
        </p>

        <a href="${inviteUrl}"
           style="display:inline-block; margin-top:24px; background:#c9a227; color:#0b0c0e; padding:14px 28px; text-decoration:none; font-weight:600; border-radius:2px;">
          Enter The Merchant Standard
        </a>

        <p style="margin-top:32px; line-height:1.6; color:#f3efe4cc;">
          Once you’re inside, follow these steps in order:
        </p>

        <p style="line-height:1.6; color:#f3efe4cc;">
          <strong>1. #welcome</strong><br>
          Your first stop is #welcome, where Cole, our official TMS manager, will welcome you,
          introduce you to the system, and provide guidance as you learn and put it into practice.
        </p>

        <p style="line-height:1.6; color:#f3efe4cc;">
          <strong>2. #rules</strong><br>
          Review the school rules and community standards before proceeding.
        </p>

        <p style="line-height:1.6; color:#f3efe4cc;">
          <strong>3. #start-here</strong><br>
          Watch both introductory videos to understand our mission, business model, and the commercial
          opportunities you can pursue through our education and practical training.
        </p>

        <p style="line-height:1.6; color:#f3efe4cc;">
          <strong>4. SALES CAMPUS</strong><br>
          Begin with the first lesson, put the system into practice, and start building your business
          around music products and beyond.
        </p>

        <p style="line-height:1.6; color:#f3efe4cc;">
          You have access to the system. Now it’s time to learn it, put it to work, and build your
          business through real execution.
        </p>

        <p style="line-height:1.6; color:#f3efe4; font-weight:600;">
          The Standard Is Execution.
        </p>

        <p style="line-height:1.6; color:#f3efe4cc;">
          If the button doesn’t work, use this direct link:
        </p>

        <p style="line-height:1.6;">
          <a href="${inviteUrl}" style="color:#c9a227; text-decoration:underline;">
            ${inviteUrl}
          </a>
        </p>

        <p style="line-height:1.6; color:#f3efe4cc;">
          If you have trouble joining Discord or accessing your purchase, contact us at
          <a href="mailto:support@themerchantstandard.com" style="color:#c9a227;">
            support@themerchantstandard.com
          </a>.
        </p>

        <p style="margin-top:32px; font-size:12px; color:#f3efe680; letter-spacing:1px;">
          THE MERCHANT STANDARD
        </p>

        <p style="margin-top:16px; font-size:12px; color:#f3efe680;">
          This invite expires in 3 days and can only be used once. If it expires before you use it,
          reply to this email and we'll issue a new one.
        </p>
      </div>
    `,
  });
}

export function renderEmail({
  preheader,
  bodyHtml,
  unsubscribeUrl,
}: {
  preheader: string;
  bodyHtml: string;
  unsubscribeUrl: string;
}) {
  return `
    <div style="font-family: Georgia, serif; background:#0b0c0e; color:#f3efe4; padding:40px 24px; max-width:560px; margin:0 auto;">
      <div style="display:none; max-height:0; overflow:hidden;">${preheader}</div>
      <p style="color:#c9a227; letter-spacing:2px; font-size:12px; text-transform:uppercase; margin-bottom:24px;">
        The Merchant Standard
      </p>
      ${bodyHtml}
      <p style="margin-top:40px; font-size:11px; color:#f3efe650; border-top:1px solid #ffffff14; padding-top:16px;">
        You're receiving this because you interacted with The Merchant Standard.
        <a href="${unsubscribeUrl}" style="color:#f3efe680;">Unsubscribe</a>
      </p>
    </div>
  `;
}

export function ctaButton(url: string, label: string) {
  return `
    <a href="${url}"
       style="display:inline-block; margin-top:24px; background:#c9a227; color:#0b0c0e; padding:14px 28px; text-decoration:none; font-weight:600; border-radius:2px;">
      ${label}
    </a>
  `;
}
const encoder = new TextEncoder();

async function getKey() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not set");
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function createAdminSessionToken() {
  const key = await getKey();
  const payload = `admin:${Date.now()}`;
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return `${payload}.${toHex(sig)}`;
}

export async function verifyAdminSessionToken(token: string | undefined | null) {
  if (!token) return false;
  const [payload, sigHex] = token.split(".");
  if (!payload || !sigHex) return false;

  try {
    const key = await getKey();
    const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
    const expectedHex = toHex(sig);
    if (expectedHex.length !== sigHex.length) return false;

    let diff = 0;
    for (let i = 0; i < expectedHex.length; i++) {
      diff |= expectedHex.charCodeAt(i) ^ sigHex.charCodeAt(i);
    }
    return diff === 0;
  } catch {
    // ADMIN_SESSION_SECRET не задан — доступ запрещён, а не разрешён
    return false;
  }
}
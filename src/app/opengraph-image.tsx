import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";
export const alt = "The Merchant Standard";

export default async function Image() {
  const file = await readFile(join(process.cwd(), "public/ogimage.jpg"));
  return new Response(new Uint8Array(file), {
    headers: { "Content-Type": "image/jpeg" },
  });
}
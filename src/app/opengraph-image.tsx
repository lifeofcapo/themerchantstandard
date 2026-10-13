import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const file = await readFile(join(process.cwd(), "public/opengraph-image.png"));
  return new Response(file, {
    headers: { "Content-Type": "image/png" },
  });
}
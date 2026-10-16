import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/jpg";

export default async function Image() {
  const file = await readFile(join(process.cwd(), "public/ogimage.jpg"));
  return new Response(file, {
    headers: { "Content-Type": "image/jpg" },
  });
}
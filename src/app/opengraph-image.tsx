import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoBuffer = await readFile(join(process.cwd(), "public/logo1.png"));
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0B0C",
          backgroundImage:
            "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(201,162,39,0.18), transparent 70%)",
        }}
      >
        <img
          src={logoBase64}
          width={130}
          height={130}
          style={{ borderRadius: "9999px" }}
        />
        <div
          style={{
            marginTop: 36,
            fontSize: 58,
            fontWeight: 700,
            color: "#F4E9D8",
            letterSpacing: "-0.02em",
          }}
        >
          The Merchant Standard
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 28,
            color: "#C9A227",
            fontFamily: "monospace",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Sell Like a Merchant, Not a Producer
        </div>
      </div>
    ),
    { ...size }
  );
}
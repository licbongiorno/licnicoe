import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Lic. Nicolás Espíndola, psicólogo MP 11138, en su consultorio de Córdoba";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  const photo = await readFile(join(process.cwd(), "public/images/og-foto.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#faf9f5", fontFamily: "serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 64px", width: 700 }}>
          <div style={{ fontSize: 24, color: "#4f6457" }}>Psicólogo · MP 11138</div>
          <div style={{ fontSize: 68, color: "#272b29", marginTop: 18, lineHeight: 1.05 }}>Lic. Nicolás Espíndola</div>
          <div style={{ fontSize: 34, color: "#4a504d", marginTop: 26, lineHeight: 1.3 }}>Un espacio de análisis y transformación personal</div>
          <div style={{ fontSize: 26, color: "#4f6457", marginTop: 34 }}>Córdoba (barrio Juniors) · Online en español</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={500} height={630} style={{ objectFit: "cover", width: 500, height: 630 }} alt="" />
      </div>
    ),
    size
  );
}

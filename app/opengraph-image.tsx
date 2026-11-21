import { ImageResponse } from "next/og";

export const alt = "Lic. Nicolás Espíndola · Psicólogo MP 11138 · Un espacio de análisis y transformación personal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#faf9f5", position: "relative", fontFamily: "serif" }}>
        <div style={{ position: "absolute", right: -120, top: -120, width: 620, height: 620, borderRadius: 9999, background: "#b7ddd4" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 90px", width: 820 }}>
          <div style={{ fontSize: 24, letterSpacing: 6, color: "#4f6457", textTransform: "uppercase" }}>Psicólogo · MP 11138</div>
          <div style={{ fontSize: 76, color: "#272b29", marginTop: 20, lineHeight: 1.05 }}>Lic. Nicolás Espíndola</div>
          <div style={{ fontSize: 36, color: "#4a504d", marginTop: 28, lineHeight: 1.3 }}>Un espacio de análisis y transformación personal</div>
          <div style={{ fontSize: 26, color: "#4f6457", marginTop: 36 }}>Córdoba · Online en español</div>
        </div>
      </div>
    ),
    size
  );
}

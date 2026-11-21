import type { MetadataRoute } from "next";
import { asset } from "@/lib/asset";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lic. Nicolás Espíndola · Psicólogo MP 11138",
    short_name: "N. Espíndola",
    description: "Psicoterapia psicoanalítica e integrativa para adultos. Presencial en Córdoba y online en español.",
    start_url: asset("/"),
    scope: asset("/"),
    display: "standalone",
    background_color: "#faf9f5",
    theme_color: "#faf9f5",
    lang: "es-AR",
    icons: [
      { src: asset("/brand/favicon-512.png"), sizes: "512x512", type: "image/png", purpose: "any" },
      { src: asset("/apple-icon.png"), sizes: "180x180", type: "image/png" },
    ],
  };
}

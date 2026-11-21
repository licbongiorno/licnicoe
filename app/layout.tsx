import type { Metadata, Viewport } from "next";
import { Inter, Lora, Playfair_Display } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Sections";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { RevealObserver } from "@/components/Reveal";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { baseGraph } from "@/lib/schema";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap", weight: ["400", "500"] });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora", display: "swap", style: ["normal", "italic"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const title = "Psicólogo en Córdoba y online en español | Lic. Nicolás Espíndola MP 11138";
const description =
  "Psicoterapia psicoanalítica e integrativa para adultos. Atención presencial en barrio Juniors, Córdoba Capital, y online en español para Argentina y el exterior. 15 años de experiencia.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | Lic. Nicolás Espíndola" },
  description,
  applicationName: site.person.displayName,
  authors: [{ name: site.person.displayName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.person.displayName,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } } : {}),
};

export const viewport: Viewport = { themeColor: "#faf9f5", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${playfair.variable} ${lora.variable} ${inter.variable}`}>
      <body>
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-charcoal focus:px-5 focus:py-3 focus:text-paper">
          Saltar al contenido
        </a>
        <JsonLd data={baseGraph()} />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <RevealObserver />
        <Analytics />
      </body>
    </html>
  );
}

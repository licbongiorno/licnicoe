import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { BrandTree, BrandRoots, TreeStage, LogoLeaf } from "@/components/BrandTree";

export const metadata: Metadata = {
  title: "Manual de identidad",
  description: "Sistema de identidad visual del Lic. Nicolás Espíndola.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/marca" },
};

const palette = [
  { name: "Carbón", hex: "#272B29", use: "Tinta, botones primarios, fondos negativos", text: "#FAF9F5", ratio: "13.6:1 sobre blanco cálido" },
  { name: "Blanco cálido", hex: "#FAF9F5", use: "Fondo general", text: "#272B29", ratio: "—" },
  { name: "Verde agua", hex: "#B7DDD4", use: "Superficies de identidad, brotes", text: "#272B29", ratio: "Carbón sobre verde agua 9.8:1" },
  { name: "Beige cálido", hex: "#F3EADF", use: "Secciones cálidas", text: "#272B29", ratio: "Carbón sobre beige 12.1:1" },
  { name: "Verde salvia", hex: "#788F80", use: "Líneas de suelo y trazos decorativos. Nunca texto chico", text: "#FAF9F5", ratio: "3.3:1 (solo gráficos)" },
  { name: "Salvia profunda", hex: "#4F6457", use: "Raíces, etiquetas y acentos de texto", text: "#FAF9F5", ratio: "6.05:1 sobre blanco cálido" },
];

const concepts = [
  {
    file: "/brand/isotipo.svg",
    title: "Definitivo · El árbol del cliente",
    text: "Árbol con hojas sobre la línea de suelo y raíces que se abren debajo, provisto por el cliente y vectorizado para web. Lo florido y lo sepultado en una sola imagen.",
    verdict: "Isotipo oficial. Se combina con el logotipo de la ruta C.",
  },
  {
    file: "/brand/concepto-a-arbol-subterraneo.svg",
    title: "A · El árbol subterráneo",
    text: "La copa es breve y las raíces se abren más ancho y más hondo. Traduce la frase de forma directa y sigue siendo legible a 16 px.",
    verdict: "Exploración previa (reemplazada por el árbol del cliente).",
  },
  {
    file: "/brand/concepto-b-anillos.svg",
    title: "B · Anillos de crecimiento",
    text: "El corte del tronco como historia acumulada. Conceptualmente rico, pero a tamaño chico se lee como un blanco o una huella.",
    verdict: "Descartado: baja legibilidad y lectura ambigua.",
  },
  {
    file: "/brand/concepto-c-crecimiento-oculto.svg",
    title: "C · Crecimiento oculto",
    text: "Logotipo en Cormorant Garamond donde el descendente de la «p» se prolonga en raíces. Discreto, de autor.",
    verdict: "Elegido como logotipo, combinado con A.",
  },
];

export default function Page() {
  return (
    <>
      <PageIntro
        crumb="Manual de identidad"
        eyebrow="Uso interno"
        title="El árbol como lenguaje de la marca"
        lead="Raíces, tronco, ramas y flores organizan todo el sistema: el logotipo, la composición de cada sección y el movimiento."
      />
      <div className="container-x space-y-24 pb-28">
        <section aria-labelledby="c-title">
          <h2 id="c-title" className="h2">Rutas y versión definitiva</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {concepts.map((c) => (
              <figure key={c.file} className="rounded-[var(--radius-panel)] border border-charcoal/10 p-6">
                <div className="flex h-40 items-center justify-center">
                  <Image src={c.file} alt="" width={200} height={140} className="max-h-36 w-auto" unoptimized />
                </div>
                <figcaption className="mt-4">
                  <p className="font-display text-xl font-semibold">{c.title}</p>
                  <p className="mt-2 text-sm text-ink-soft">{c.text}</p>
                  <p className="mt-3 text-sm font-semibold text-sage-deep">{c.verdict}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section aria-labelledby="l-title">
          <h2 id="l-title" className="h2">Versiones del logotipo</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              ["/brand/logo-horizontal.svg", "Horizontal", "bg-paper border border-charcoal/10"],
              ["/brand/logo-horizontal-negativo.svg", "Horizontal negativo", "bg-charcoal"],
              ["/brand/logo-vertical.svg", "Vertical", "bg-beige"],
              ["/brand/logo-vertical-negativo.svg", "Vertical negativo", "bg-charcoal"],
              ["/brand/logo-horizontal-mono.svg", "Monocromático", "bg-paper border border-charcoal/10"],
              ["/brand/avatar.svg", "Avatar para redes", "bg-paper border border-charcoal/10"],
            ].map(([src, label, bg]) => (
              <figure key={src} className={`flex flex-col items-center justify-center gap-4 rounded-[var(--radius-panel)] p-10 ${bg}`}>
                <Image src={src} alt="" width={420} height={160} className="h-28 w-auto" unoptimized />
                <figcaption className={`text-sm ${bg.includes("charcoal") ? "text-paper/70" : "text-ink-soft"}`}>{label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-display text-2xl font-semibold">Área de protección</h3>
              <p className="mt-2 text-ink-soft">Alrededor del logotipo, dejar libre como mínimo la altura de la «N» de Nicolás. Alrededor del isotipo, un cuarto de su ancho.</p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold">Tamaños mínimos</h3>
              <p className="mt-2 text-ink-soft">Logotipo horizontal: 160 px de ancho (40 mm impreso). Isotipo: 24 px. Por debajo de 24 px, usar el favicon (versión simplificada).</p>
              <div className="mt-4 flex items-end gap-4">
                <Image src="/brand/favicon.svg" alt="" width={16} height={16} unoptimized />
                <Image src="/brand/favicon.svg" alt="" width={32} height={32} unoptimized />
                <BrandTree className="h-12 w-16" />
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold">No hacer</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-ink-soft">
                <li>Deformar, rotar o agregar sombras.</li>
                <li>Pintar las raíces de marrón o la copa de verde intenso.</li>
                <li>Usar el isotipo sobre fotos con mucho detalle.</li>
                <li>Reemplazar la tipografía del logotipo.</li>
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="p-title">
          <h2 id="p-title" className="h2">Paleta</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {palette.map((p) => (
              <li key={p.hex} className="overflow-hidden rounded-[var(--radius-panel)] border border-charcoal/10">
                <div className="flex h-28 items-end p-5 font-display text-2xl" style={{ background: p.hex, color: p.text }}>{p.name}</div>
                <div className="p-5 text-sm">
                  <p className="font-semibold">{p.hex}</p>
                  <p className="mt-1 text-ink-soft">{p.use}</p>
                  <p className="mt-1 text-ink-soft">Contraste: {p.ratio}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="t-title">
          <h2 id="t-title" className="h2">Tipografía</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <p className="label">Cormorant Garamond 500/600 + itálica · editorial</p>
              <p className="display mt-3 text-[length:var(--text-step-4)]">Comprender</p>
              <p className="display mt-2 text-[length:var(--text-step-3)] italic">lo que nos habita</p>
              <p className="mt-4 text-ink-soft">Títulos, citas, la frase y los textos de lectura pausada. Elegida por su origen de libro y sus itálicas caligráficas.</p>
            </div>
            <div>
              <p className="label">Manrope 400/500/600 · funcional</p>
              <p className="mt-3 text-[1.0625rem]">Texto de lectura, navegación, botones y datos. Humanista, abierta y muy legible en pantallas chicas.</p>
              <ul className="mt-6 space-y-2 text-ink-soft">
                <li>step-4: 2.6 → 5.1 rem · display</li>
                <li>step-3: 2.1 → 3.3 rem · títulos de sección</li>
                <li>step-2: 1.55 → 2 rem · subtítulos</li>
                <li>step-1: 1.25 → 1.45 rem · bajadas</li>
                <li>step-0: 1.0625 rem · cuerpo (interlineado 1.7)</li>
                <li>Ancho de lectura: 62 caracteres</li>
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="s-title">
          <h2 id="s-title" className="h2">El árbol en cada sección</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <figure className="rounded-[var(--radius-panel)] bg-beige p-6">
              <BrandTree animate="hero" className="mx-auto h-48 w-auto" />
              <figcaption className="mt-3 text-sm text-ink-soft">Introducción e inicio: el árbol de marca se arma (suelo, raíces, copa, hojas).</figcaption>
            </figure>
            <figure className="rounded-[var(--radius-panel)] bg-beige p-6">
              <div className="flex h-48 items-center"><BrandRoots className="h-auto w-full" /></div>
              <figcaption className="mt-3 text-sm text-ink-soft">Sobre mí y la frase: las raíces del mismo árbol, la historia.</figcaption>
            </figure>
            <figure className="rounded-[var(--radius-panel)] bg-beige p-6">
              <div className="flex h-48 items-end justify-center gap-2">
                {[0, 1, 2, 3].map((i) => <TreeStage key={i} stage={i as 0 | 1 | 2 | 3} className="h-auto w-1/4" />)}
              </div>
              <figcaption className="mt-3 text-sm text-ink-soft">Enfoque: el mismo árbol en cuatro etapas (raíces, tronco, ramas, copa).</figcaption>
            </figure>
            <figure className="rounded-[var(--radius-panel)] bg-beige p-6">
              <div className="flex h-48 items-center justify-center gap-3">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => <LogoLeaf key={i} n={i} className="size-7" />)}
              </div>
              <figcaption className="mt-3 text-sm text-ink-soft">Áreas: siete hojas reales del árbol. Cierre: floración.</figcaption>
            </figure>
          </div>
        </section>

        <section aria-labelledby="m-title">
          <h2 id="m-title" className="h2">Movimiento</h2>
          <ul className="mt-8 max-w-[var(--measure)] space-y-3 text-ink-soft">
            <li>Tres momentos y nada más: el árbol crece al cargar (raíces → tronco → ramas → brotes, 3,8 s), la frase se revela al llegar a ella y el cierre florece.</li>
            <li>Microgestos de 200–250 ms con curva orgánica: botones que suben 1 px, flecha que avanza 3 px, subrayados que crecen, preguntas que se despliegan.</li>
            <li>Solo se animan transform, opacity y stroke-dashoffset. Con «reducir movimiento», todo aparece directamente.</li>
          </ul>
        </section>
      </div>
    </>
  );
}

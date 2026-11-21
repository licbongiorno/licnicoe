/**
 * EL ÁRBOL COMO SISTEMA GRÁFICO
 * Cada sección usa una parte del árbol:
 *   Hero / intro → árbol de marca (BrandTree.tsx) · Sobre mí → raíces
 *   Frase → suelo + raíces                    · Enfoque → ramificaciones
 *   Áreas → brotes                            · Cierre → floración
 * Todo es SVG en línea (sin imágenes ni librerías). `pathLength={1}` permite
 * animar el crecimiento con stroke-dashoffset desde CSS.
 */
import type { CSSProperties } from "react";

const INK = "#272b29";
const ROOT = "#4f6457";
const LINE = "#788f80";
const AQUA = "#b7ddd4";
const BEIGE = "#f3eadf";

const d = (delay: number, dur?: number) => ({ "--d": `${delay}s`, ...(dur ? { "--dur": `${dur}s` } : {}) }) as CSSProperties;

/* ---------- Raíces (Sobre mí): cuelgan desde una línea de suelo ---------- */
export function RootsMotif({ className = "" }: { className?: string }) {
  const paths = [
    "M200 8 C 199 70, 214 120, 196 180 C 182 226, 206 270, 198 340 C 194 380, 202 420, 200 470",
    "M198 10 C 182 60, 140 76, 116 114 C 92 150, 102 196, 72 230 C 56 248, 40 256, 22 280",
    "M202 10 C 220 62, 262 78, 286 118 C 308 156, 296 198, 326 232 C 342 250, 360 258, 380 280",
    "M116 114 C 132 150, 118 182, 138 214 C 152 236, 140 262, 152 296",
    "M286 118 C 268 154, 284 184, 264 216 C 252 238, 266 264, 256 300",
    "M196 180 C 174 196, 164 220, 168 252",
    "M72 230 C 70 256, 58 272, 60 300",
    "M326 232 C 330 258, 344 272, 340 302",
    "M198 340 C 218 352, 226 376, 224 404",
    "M152 296 C 146 320, 130 332, 128 360",
    "M256 300 C 262 324, 278 336, 280 364",
  ];
  return (
    <svg viewBox="0 0 400 480" fill="none" aria-hidden className={className}>
      <path d="M0 8 H 400" stroke={LINE} strokeWidth="1" />
      <g stroke={ROOT} strokeLinecap="round">
        {paths.map((p, i) => (
          <path key={p} d={p} strokeWidth={i < 3 ? 1.6 : 1.1} />
        ))}
      </g>
    </svg>
  );
}

/* ---------- Ramificación (Enfoque): una rama distinta por pilar ---------- */
const branchGlyphs = [
  "M40 96 C 40 70, 36 52, 30 30 M36 58 C 46 50, 50 40, 52 26",
  "M40 96 C 42 72, 38 50, 44 28 M41 66 C 28 56, 24 42, 20 30 M42 50 C 52 44, 58 34, 60 22",
  "M40 96 C 38 74, 44 56, 38 34 M39 70 C 52 62, 58 50, 62 38 M40 54 C 28 46, 24 34, 22 22",
  "M40 96 C 40 70, 42 50, 40 26 M40 72 C 26 62, 20 48, 18 34 M40 60 C 54 52, 60 38, 62 24 M40 44 C 48 38, 52 28, 52 16",
];
const branchBuds: [number, number][][] = [
  [[30, 26], [52, 22]],
  [[44, 24], [20, 26], [60, 18]],
  [[38, 30], [62, 34], [22, 18]],
  [[40, 22], [18, 30], [62, 20], [52, 12]],
];
export function BranchGlyph({ stage, className = "" }: { stage: 0 | 1 | 2 | 3; className?: string }) {
  return (
    <svg viewBox="0 0 80 100" fill="none" aria-hidden className={className}>
      <path d={branchGlyphs[stage]} stroke={INK} strokeWidth="1.5" strokeLinecap="round" />
      {branchBuds[stage].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i === 0 ? 4 : 3} fill={stage === 3 ? AQUA : i === 0 ? AQUA : BEIGE} stroke={INK} strokeWidth=".8" />
      ))}
    </svg>
  );
}

/* ---------- Brotes (Áreas): siete variaciones pequeñas ---------- */
const sprouts = [
  "M12 30 C 12 22, 11 16, 12 8 M12 18 C 8 16, 6 12, 6 8",
  "M12 30 C 13 22, 11 16, 13 9 M12 20 C 16 17, 18 13, 19 9",
  "M12 30 C 12 24, 12 18, 12 10 M12 22 C 8 19, 5 16, 4 12 M12 17 C 16 15, 18 11, 19 7",
  "M12 30 C 10 22, 14 16, 11 8",
  "M12 30 C 12 23, 13 17, 12 11 M12 24 C 16 21, 19 19, 20 15",
  "M12 30 C 13 24, 10 18, 12 12 M12 21 C 8 19, 6 15, 7 11 M12 16 C 15 14, 16 10, 16 7",
  "M12 30 C 12 22, 12 16, 12 6 M12 14 C 9 12, 8 9, 8 6 M12 19 C 15 17, 17 14, 17 11",
];
const sproutBuds: [number, number][] = [[6, 7], [19, 8], [19, 6], [11, 7], [20, 14], [16, 6], [12, 5]];
export function Sprout({ n, className = "" }: { n: number; className?: string }) {
  const i = n % sprouts.length;
  return (
    <svg viewBox="0 0 24 32" fill="none" aria-hidden className={className}>
      <path d="M3 30 H 21" stroke={LINE} strokeWidth="1" strokeLinecap="round" />
      <path d={sprouts[i]} stroke={INK} strokeWidth="1.4" strokeLinecap="round" />
      <circle cx={sproutBuds[i][0]} cy={sproutBuds[i][1]} r="2.4" fill={AQUA} stroke={INK} strokeWidth=".7" />
    </svg>
  );
}

/* ---------- Floración (Cierre): ramas finas que florecen al entrar en pantalla ---------- */
export function Blossom({ className = "" }: { className?: string }) {
  const flowers: [number, number, number, string][] = [
    [62, 70, 7, AQUA], [118, 40, 5, BEIGE], [170, 76, 8, AQUA], [228, 34, 5, AQUA], [282, 64, 9, BEIGE],
    [336, 30, 6, AQUA], [392, 72, 7, AQUA], [446, 44, 5, BEIGE], [96, 112, 4, AQUA], [312, 108, 4, AQUA],
  ];
  return (
    <svg viewBox="0 0 500 160" fill="none" aria-hidden className={`blossom ${className}`}>
      <g stroke="#faf9f5" strokeOpacity=".35" strokeWidth="1.1" strokeLinecap="round">
        <path d="M0 160 C 60 140, 80 110, 62 70 M40 148 C 70 130, 100 120, 118 40 M70 150 C 110 130, 96 118, 96 112" />
        <path d="M150 160 C 170 130, 160 100, 170 76 M200 160 C 214 120, 222 80, 228 34" />
        <path d="M260 160 C 280 130, 276 100, 282 64 M300 160 C 316 130, 330 80, 336 30 M296 150 C 306 136, 312 120, 312 108" />
        <path d="M380 160 C 390 130, 386 100, 392 72 M430 160 C 444 120, 440 80, 446 44" />
      </g>
      {flowers.map(([cx, cy, r, fill], i) => (
        <circle key={i} className="bud" cx={cx} cy={cy} r={r} fill={fill} style={d(0.2 + i * 0.12)} />
      ))}
    </svg>
  );
}


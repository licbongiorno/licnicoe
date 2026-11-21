/**
 * EL ÁRBOL COMO SISTEMA GRÁFICO
 * Cada sección usa una parte del árbol:
 *   Hero → árbol completo (crece al cargar)   · Sobre mí → raíces
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

/* ---------- Árbol del hero ---------- */
const roots = {
  main: [
    "M210 300 C 209 350, 222 385, 204 420 C 190 448, 214 475, 205 520 C 202 540, 208 555, 206 575",
    "M207 302 C 196 335, 160 345, 138 372 C 116 398, 126 428, 98 452 C 84 464, 66 468, 52 484",
    "M213 302 C 226 338, 262 348, 282 378 C 302 406, 290 432, 318 454 C 334 466, 352 470, 368 488",
    "M208 305 C 180 315, 140 312, 100 326 C 76 334, 58 330, 34 340",
    "M212 305 C 244 316, 286 312, 322 328 C 346 338, 362 334, 386 344",
  ],
  fine: [
    "M138 372 C 152 396, 138 418, 156 440 C 168 455, 156 474, 166 492",
    "M282 378 C 266 402, 280 420, 262 444 C 252 458, 264 476, 256 494",
    "M100 326 C 92 344, 76 352, 70 370",
    "M322 328 C 332 346, 348 354, 352 372",
    "M204 420 C 186 432, 176 452, 178 470",
    "M98 452 C 96 470, 86 482, 88 500",
    "M318 454 C 322 472, 334 482, 332 500",
    "M206 520 C 222 530, 228 544, 236 556",
  ],
};
const trunk = [
  "M206 300 C 204 262, 210 232, 205 197 C 201 172, 207 160, 204 140",
  "M214 300 C 216 264, 211 234, 216 202 C 219 180, 213 166, 215 150",
];
const branches = {
  main: [
    "M206 205 C 180 190, 150 185, 125 160 C 112 147, 108 130, 112 112",
    "M214 190 C 240 176, 268 170, 292 146 C 306 132, 308 112, 300 96",
    "M205 152 C 198 126, 214 106, 205 84",
  ],
  fine: [
    "M150 182 C 140 166, 146 146, 134 130",
    "M262 168 C 274 150, 268 133, 280 118",
    "M207 122 C 228 110, 238 94, 242 78",
    "M204 132 C 186 118, 176 100, 172 86",
  ],
};
const buds: [number, number, number, string][] = [
  [112, 106, 8, AQUA],
  [134, 125, 5, BEIGE],
  [300, 90, 9, AQUA],
  [280, 113, 5, LINE],
  [205, 77, 10, AQUA],
  [242, 72, 6, BEIGE],
  [172, 80, 6, LINE],
  [125, 160, 3.5, LINE],
  [292, 146, 3.5, AQUA],
];

export function HeroTree({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 660"
      fill="none"
      className={`tree-grow ${className}`}
      role="img"
      aria-label="Ilustración de un árbol con sus raíces. Arriba: «Lo que el árbol tiene de florido». Abajo: «vive de lo que tiene sepultado»."
    >
      {/* la frase enmarca el árbol: lo florido arriba, lo sepultado abajo */}
      <text
        x="210" y="30" textAnchor="middle" className="surface" style={{ ...d(3.3), fontFamily: "var(--font-display)", fontStyle: "italic" }}
        fontSize="21" fill={INK}
      >
        Lo que el árbol tiene de florido
      </text>
      <g transform="translate(0 34)">
        <path className="ground-line" d="M18 300 H 402" stroke={LINE} strokeWidth="1" />
        <g stroke={ROOT} strokeLinecap="round">
          {roots.main.map((p, i) => (
            <path key={p} className="grow" pathLength={1} d={p} strokeWidth={1.7} style={d(0.3 + i * 0.12, 1.8)} />
          ))}
          {roots.fine.map((p, i) => (
            <path key={p} className="grow" pathLength={1} d={p} strokeWidth={1.1} style={d(1.1 + i * 0.08, 1.2)} />
          ))}
        </g>
        <g stroke={INK} strokeLinecap="round">
          {trunk.map((p) => (
            <path key={p} className="grow" pathLength={1} d={p} strokeWidth={2.2} style={d(1.7, 1)} />
          ))}
          {branches.main.map((p, i) => (
            <path key={p} className="grow" pathLength={1} d={p} strokeWidth={1.6} style={d(2.3 + i * 0.12, 1)} />
          ))}
          {branches.fine.map((p, i) => (
            <path key={p} className="grow" pathLength={1} d={p} strokeWidth={1.2} style={d(2.7 + i * 0.08, 0.8)} />
          ))}
        </g>
        {buds.map(([cx, cy, r, fill], i) => (
          <circle key={`${cx}-${cy}`} className="bud" cx={cx} cy={cy} r={r} fill={fill} stroke={INK} strokeWidth=".8" style={d(3 + i * 0.07)} />
        ))}
      </g>
      <text
        x="210" y="650" textAnchor="middle" className="surface" style={{ ...d(0.6), fontFamily: "var(--font-display)", fontStyle: "italic" }}
        fontSize="21" fill={ROOT}
      >
        vive de lo que tiene sepultado
      </text>
    </svg>
  );
}

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

/* ---------- Isotipo (versión en línea del archivo /public/brand/isotipo.svg) ---------- */
export function Isotipo({ className = "", negative = false }: { className?: string; negative?: boolean }) {
  const ink = negative ? "#faf9f5" : INK;
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden fill="none">
      <path d="M8 28 H 56" stroke={LINE} strokeWidth="1.2" strokeLinecap="round" />
      <g stroke={ink} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 28 C 32 22, 31 18, 32.5 11" />
        <path d="M31.6 21 C 28 19.5, 24.5 17, 22 12" />
        <path d="M32 16.5 C 35 15, 37.5 13, 39 9.5" />
        <path d="M32 28 C 32.5 36, 30 42, 31 50 C 31.5 55, 30.5 58, 31 61" />
        <path d="M31 29 C 27 32.5, 21 34, 15.5 38 C 12 40.5, 10 43, 6.5 44.5" />
        <path d="M33 29 C 37 32, 43 33, 48 36.5 C 51.5 39, 53.5 41.5, 57.5 42" />
        <path d="M30.5 31 C 27.5 37, 23 41, 21 48" />
        <path d="M33.5 31.5 C 36.5 38, 40.5 43, 41 51" />
      </g>
      <circle cx="21.5" cy="10.5" r="2.7" fill={AQUA} stroke={ink} strokeWidth="1.2" />
      <circle cx="32.6" cy="8.6" r="3.1" fill={AQUA} stroke={ink} strokeWidth="1.2" />
    </svg>
  );
}

/**
 * Ilustración del árbol: raíces (historia, inconsciente), tronco (identidad),
 * ramas (posibilidades) y flores (transformación).
 * Trazo de línea continua que evoluciona el "garabato" de la identidad anterior.
 * Todo vectorial (≈2 KB), sin imágenes.
 */
type Props = { className?: string; animated?: boolean; title?: string };

export function TreeArt({ className = "", animated = false, title }: Props) {
  const labelled = Boolean(title);
  return (
    <svg
      viewBox="0 0 400 520"
      fill="none"
      className={`${animated ? "tree-draw" : ""} ${className}`}
      role={labelled ? "img" : undefined}
      aria-hidden={labelled ? undefined : true}
      aria-label={title}
    >
      {/* suelo */}
      <path d="M40 300 C 140 292, 260 292, 360 300" stroke="#788f80" strokeWidth="1.2" pathLength={1} opacity=".6" />
      {/* tronco */}
      <g stroke="#272b29" strokeWidth="2.2" strokeLinecap="round">
        <path pathLength={1} d="M196 300 C 194 260, 200 230, 194 200 C 188 170, 204 150, 200 120" />
        <path pathLength={1} d="M206 300 C 208 262, 204 232, 210 204 C 214 182, 204 160, 206 132" />
      </g>
      {/* ramas */}
      <g className="branches" stroke="#272b29" strokeWidth="1.6" strokeLinecap="round">
        <path pathLength={1} d="M198 200 C 170 180, 140 176, 112 150 C 96 136, 92 116, 98 96" />
        <path pathLength={1} d="M150 172 C 140 150, 146 128, 132 110" />
        <path pathLength={1} d="M208 186 C 236 170, 262 166, 286 140 C 300 124, 300 104, 292 86" />
        <path pathLength={1} d="M256 162 C 266 140, 258 122, 270 104" />
        <path pathLength={1} d="M202 130 C 196 104, 214 84, 204 58" />
        <path pathLength={1} d="M204 110 C 226 96, 236 80, 238 62" />
        <path pathLength={1} d="M200 116 C 180 102, 172 84, 168 66" />
      </g>
      {/* raíces: el garabato de lo que está "sepultado" */}
      <g className="root" stroke="#4f6457" strokeWidth="1.5" strokeLinecap="round">
        <path pathLength={1} d="M198 300 C 190 330, 160 340, 140 366 C 120 392, 132 420, 104 444 C 92 454, 76 456, 64 470" />
        <path pathLength={1} d="M204 300 C 212 336, 244 344, 262 372 C 280 400, 268 424, 296 446 C 310 456, 326 458, 338 474" />
        <path pathLength={1} d="M201 300 C 200 350, 214 380, 196 410 C 182 434, 206 456, 198 496" />
        <path pathLength={1} d="M150 356 C 168 380, 150 400, 172 420 C 186 432, 170 452, 182 468" />
        <path pathLength={1} d="M252 360 C 236 384, 252 402, 232 424 C 222 436, 236 452, 226 470" />
        <path pathLength={1} d="M120 398 C 100 396, 86 404, 70 400" />
        <path pathLength={1} d="M276 404 C 300 400, 314 410, 332 404" />
      </g>
      {/* flores */}
      <g className="flowers">
        {[
          [98, 92, 9, "#b7ddd4"],
          [132, 106, 6, "#f3eadf"],
          [292, 82, 10, "#b7ddd4"],
          [270, 100, 6, "#788f80"],
          [204, 54, 11, "#b7ddd4"],
          [238, 58, 7, "#f3eadf"],
          [168, 62, 7, "#788f80"],
          [114, 150, 5, "#788f80"],
          [286, 140, 5, "#b7ddd4"],
        ].map(([cx, cy, r, fill], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill={fill as string} stroke="#272b29" strokeWidth=".8" />
        ))}
      </g>
    </svg>
  );
}

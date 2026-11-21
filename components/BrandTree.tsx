/**
 * ÁRBOL DE MARCA (definitivo)
 * Árbol provisto por el cliente, vectorizado con potrace (scripts/trace_tree.py).
 * Los trazos viven en /brand/tree-sprite.svg (se descarga una vez y queda en caché)
 * y se reutilizan con <use>, así el árbol aparece varias veces sin engordar el HTML.
 *
 * Animación de armado (solo CSS):
 *   suelo → raíces que bajan → tronco y copa que suben → hojas en 4 anillos, del centro hacia afuera.
 */
import { useId } from "react";
import { GROUND_Y, LEAF_ICONS } from "./treeData";

const VB = "62 10 166 124"; // recorte del lienzo original (277×146) alrededor del árbol

const SPRITE = "/brand/tree-sprite.svg";
const RINGS = [0, 1, 2, 3];

type Props = {
  className?: string;
  /** "intro" | "hero": se arma con animación. false: estático. */
  animate?: "intro" | "hero" | false;
  color?: string;
  ground?: string;
  title?: string;
};

export function BrandTree({ className = "", animate = false, color = "#2c3f37", ground = "#788f80", title }: Props) {
  const uid = useId().replace(/:/g, "");
  const a11y = title ? { role: "img", "aria-label": title } : { "aria-hidden": true as const };

  if (!animate) {
    return (
      <svg viewBox={VB} className={className} fill={color} {...a11y}>
        <path d={`M66 ${GROUND_Y} H 224`} stroke={ground} strokeWidth="0.9" strokeLinecap="round" />
        <use href={`${SPRITE}#tr-trunk`} />
        <use href={`${SPRITE}#tr-roots`} />
        {RINGS.map((i) => (
          <use key={i} href={`${SPRITE}#tr-leaves-${i}`} />
        ))}
      </svg>
    );
  }

  const crown = `crown-${uid}`;
  const roots = `roots-${uid}`;
  return (
    <svg viewBox={VB} className={`bt-anim bt-${animate} ${className}`} fill={color} {...a11y}>
      <defs>
        <clipPath id={crown}>
          <rect className="bt-crown-clip" x="0" y="0" width="277" height={GROUND_Y + 0.6} />
        </clipPath>
        <clipPath id={roots}>
          <rect className="bt-roots-clip" x="0" y={GROUND_Y - 0.6} width="277" height={146 - GROUND_Y} />
        </clipPath>
      </defs>
      <path className="bt-ground" d={`M66 ${GROUND_Y} H 224`} stroke={ground} strokeWidth="0.9" strokeLinecap="round" />
      <g clipPath={`url(#${roots})`}>
        <use href={`${SPRITE}#tr-trunk`} />
        <use href={`${SPRITE}#tr-roots`} />
      </g>
      <g clipPath={`url(#${crown})`}>
        <use href={`${SPRITE}#tr-trunk`} />
      </g>
      {RINGS.map((i) => (
        <use key={i} href={`${SPRITE}#tr-leaves-${i}`} className="bt-ring" style={{ ["--r" as string]: i }} />
      ))}
    </svg>
  );
}

/**
 * Solo las raíces del árbol de marca (lo que está bajo la línea de suelo).
 * Se usa en «Sobre mí» y en la sección de la frase, para que todas las raíces
 * de la web sean las mismas del logo.
 * animate: las raíces bajan desde el suelo cuando la sección entra en pantalla (.is-visible).
 */
export function BrandRoots({ className = "", animate = false, color = "#2c3f37", ground = "#788f80" }: { className?: string; animate?: boolean; color?: string; ground?: string }) {
  const uid = useId().replace(/:/g, "");
  const clip = `roots-only-${uid}`;
  return (
    <svg viewBox={`70 ${GROUND_Y - 1} 150 37`} className={className} fill={color} aria-hidden>
      <defs>
        <clipPath id={clip}>
          <rect className={animate ? "br-clip" : undefined} x="0" y={GROUND_Y} width="277" height={146 - GROUND_Y} />
        </clipPath>
      </defs>
      <path d={`M70 ${GROUND_Y} H 220`} stroke={ground} strokeWidth="0.5" strokeLinecap="round" />
      <g clipPath={`url(#${clip})`}>
        <use href={`${SPRITE}#tr-trunk`} />
        <use href={`${SPRITE}#tr-roots`} />
      </g>
    </svg>
  );
}

/**
 * Etapas de crecimiento del mismo árbol (pilares del enfoque):
 * 0 Analizar: solo raíces · 1 Desarrollar: raíces + tronco · 2 Acompañar: ramas y primeras hojas · 3 Transformar: árbol completo.
 */
const STAGE_CUT = [GROUND_Y, 58, 0, 0]; // hasta qué altura se ve el tronco/ramas
const STAGE_RINGS = [0, 0, 2, 4]; // cuántos anillos de hojas
export function TreeStage({ stage, className = "", color = "#2c3f37", ground = "#788f80" }: { stage: 0 | 1 | 2 | 3; className?: string; color?: string; ground?: string }) {
  const uid = useId().replace(/:/g, "");
  const clip = `stage-${uid}`;
  const cut = STAGE_CUT[stage];
  return (
    <svg viewBox={VB} className={className} fill={color} aria-hidden>
      <defs>
        <clipPath id={clip}>
          <rect x="0" y={cut} width="277" height={146 - cut} />
        </clipPath>
      </defs>
      <path d={`M66 ${GROUND_Y} H 224`} stroke={ground} strokeWidth="0.9" strokeLinecap="round" />
      <g clipPath={`url(#${clip})`}>
        <use href={`${SPRITE}#tr-trunk`} />
      </g>
      <use href={`${SPRITE}#tr-roots`} />
      {RINGS.slice(0, STAGE_RINGS[stage]).map((i) => (
        <use key={i} href={`${SPRITE}#tr-leaves-${i}`} />
      ))}
    </svg>
  );
}

/** Una hoja real del árbol de marca (íconos de «Áreas»). */
export function LogoLeaf({ n, className = "", color = "#2c3f37" }: { n: number; className?: string; color?: string }) {
  const leaf = LEAF_ICONS[n % LEAF_ICONS.length];
  return (
    <svg viewBox={leaf.vb} className={className} fill={color} aria-hidden>
      <use href={`${SPRITE}#${leaf.id}`} />
    </svg>
  );
}

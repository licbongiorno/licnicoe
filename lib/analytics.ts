/**
 * Medición respetuosa de la privacidad.
 * Solo se envían eventos agregados (tipo de clic + sección). Nunca el contenido de una consulta.
 */
type Props = Record<string, string>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, opts?: { props?: Props }) => void;
  }
}

export function trackEvent(name: string, props: Props = {}) {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", name, props);
    window.plausible?.(name, { props });
  } catch {
    /* la analítica nunca debe romper la navegación */
  }
}

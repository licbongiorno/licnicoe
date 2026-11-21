import { site } from "@/data/site";
import { BrandTree } from "./BrandTree";
import { IntroSkip } from "./IntroSkip";

/**
 * Introducción: el árbol se arma (suelo, raíces, tronco, copa, hojas), aparece el nombre
 * y la capa se retira para mostrar la web, que se arma a continuación.
 * - Funciona solo con CSS (sin JavaScript también termina y desaparece).
 * - Se muestra una vez por sesión y nunca con "reducir movimiento" (script en <head>).
 * - Dura ~3 s y se puede saltar (botón, clic o Escape).
 */
export function Intro() {
  return (
    <>
      <div className="intro" aria-hidden="true">
        <div className="flex flex-col items-center px-6 text-center">
          <BrandTree animate="intro" className="h-auto w-[min(78vw,22rem)]" />
          <p className="intro-name mt-4 font-display text-[clamp(1.9rem,1.4rem+2vw,2.6rem)] font-semibold leading-none">
            {site.person.name}
          </p>
          <p className="intro-role mt-3 text-sm text-sage-deep">
            Psicólogo · {site.person.license}
          </p>
        </div>
      </div>
      <IntroSkip />
    </>
  );
}

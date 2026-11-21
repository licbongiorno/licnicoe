import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageIntro({ crumb, eyebrow, title, lead }: { crumb: string; eyebrow: string; title: string; lead: string }) {
  return (
    <section className="relative overflow-hidden pt-[4.5rem]">
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 size-[30rem] rounded-[46%_54%_42%_58%/55%_45%_55%_45%] bg-aqua/50" />
      <div className="container-x relative py-16 md:py-24">
        <nav aria-label="Ruta de navegación" className="text-sm text-ink-soft">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="underline-offset-4 hover:underline">Inicio</Link></li>
            <li aria-hidden><ChevronRight className="size-3.5" /></li>
            <li aria-current="page">{crumb}</li>
          </ol>
        </nav>
        <p className="eyebrow mt-8">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.1rem,1.4rem+3vw,3.6rem)] leading-[1.08] font-medium text-balance">{title}</h1>
        <p className="lead mt-6 max-w-2xl">{lead}</p>
      </div>
    </section>
  );
}

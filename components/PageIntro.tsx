import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageIntro({ crumb, eyebrow, title, lead }: { crumb: string; eyebrow: string; title: string; lead: string }) {
  return (
    <section className="relative overflow-hidden pt-[4.5rem]">
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 size-[30rem] bg-aqua/45" style={{ borderRadius: "var(--radius-organic)" }} />
      <div className="container-x relative py-16 md:py-24">
        <nav aria-label="Ruta de navegación" className="text-sm text-ink-soft">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="underline-offset-4 hover:underline">Inicio</Link></li>
            <li aria-hidden><ChevronRight className="size-3.5" /></li>
            <li aria-current="page">{crumb}</li>
          </ol>
        </nav>
        <p className="label mt-8">{eyebrow}</p>
        <h1 className="display mt-4 max-w-3xl text-[length:var(--text-step-4)]">{title}</h1>
        <p className="lead mt-6 max-w-2xl">{lead}</p>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { JsonLd } from "@/components/JsonLd";
import { LogoLeaf } from "@/components/BrandTree";
import { breadcrumb } from "@/lib/schema";
import { articles } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog: psicoterapia, vínculos y transformación personal",
  description: "Artículos del Lic. Nicolás Espíndola, psicólogo MP 11138, sobre psicoterapia, terapia online en español y procesos de transformación personal.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog" },
};

const fmt = (iso: string) => new Intl.DateTimeFormat("es-AR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${iso}T12:00:00`));

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Blog", path: "/blog" }])} />
      <PageIntro
        crumb="Blog"
        eyebrow="Escritos"
        title="Un espacio para pensar lo que nos pasa"
        lead="Textos breves sobre psicoterapia, vínculos y procesos de transformación personal. No reemplazan una consulta profesional."
      />
      <section className="pb-24">
        <ul className="container-x grid gap-px overflow-hidden rounded-[var(--radius-panel)] bg-charcoal/10 md:grid-cols-3">
          {articles.map((a, i) => (
            <li key={a.slug} className="bg-paper">
              <Link href={`/blog/${a.slug}`} className="group flex h-full flex-col gap-4 p-8 transition-colors hover:bg-aqua-soft">
                <LogoLeaf n={i} className="size-7" />
                <h2 className="font-display text-[1.7rem] font-semibold leading-tight group-hover:text-sage-deep">{a.title}</h2>
                <p className="text-ink-soft">{a.description}</p>
                <p className="mt-auto text-sm text-ink-soft">
                  <time dateTime={a.published}>{fmt(a.published)}</time> · {a.readingMinutes} min de lectura
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

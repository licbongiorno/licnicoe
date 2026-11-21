import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { ContactButton } from "@/components/ContactButton";
import { BrandRoots } from "@/components/BrandTree";
import { breadcrumb } from "@/lib/schema";
import { articles, getArticle } from "@/data/blog";
import { site } from "@/data/site";
import { asset } from "@/lib/asset";

export const dynamicParams = false;
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = getArticle((await params).slug);
  if (!a) return {};
  return {
    title: a.seoTitle,
    description: a.description,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: { type: "article", url: `/blog/${a.slug}`, title: a.seoTitle, description: a.description, publishedTime: a.published, modifiedTime: a.updated },
  };
}

const fmt = (iso: string) => new Intl.DateTimeFormat("es-AR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${iso}T12:00:00`));

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const url = `${site.url}/blog/${a.slug}`;
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Blog", path: "/blog" }, { name: a.title, path: `/blog/${a.slug}` }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: a.title,
          description: a.description,
          datePublished: a.published,
          dateModified: a.updated,
          inLanguage: "es",
          mainEntityOfPage: url,
          url,
          image: `${site.url}/images/og.png`,
          author: { "@id": `${site.url}/#persona` },
          publisher: { "@id": `${site.url}/#servicio` },
        }}
      />
      <article className="pt-[4.5rem]">
        <header className="container-x max-w-3xl pt-12 md:pt-16">
          <nav aria-label="Ruta de navegación" className="text-sm text-ink-soft">
            <ol className="flex flex-wrap items-center gap-1">
              <li><Link href="/" className="link-u">Inicio</Link></li>
              <li aria-hidden><ChevronRight className="size-3.5" /></li>
              <li><Link href="/blog" className="link-u">Blog</Link></li>
            </ol>
          </nav>
          <h1 className="display mt-8 text-[length:var(--text-step-3)]">{a.title}</h1>
          <p className="lead mt-6">{a.intro}</p>
          <div className="mt-8 flex items-center gap-3 border-y border-charcoal/10 py-4 text-sm">
            {site.photos.profile && (
              <Image src={asset(site.photos.profile)} alt="" width={44} height={44} className="size-11 rounded-full object-cover" />
            )}
            <p className="leading-snug">
              <span className="block font-semibold">{site.person.displayName}</span>
              <span className="text-ink-soft">
                Psicólogo {site.person.license} · <time dateTime={a.published}>{fmt(a.published)}</time> · {a.readingMinutes} min
              </span>
            </p>
          </div>
        </header>

        <div className="container-x max-w-3xl pb-10">
          {a.sections.map((s) => (
            <section key={s.h2} className="mt-12">
              <h2 className="font-display text-[length:var(--text-step-2)] font-semibold leading-tight">{s.h2}</h2>
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 30)} className="mt-4 text-[1.08rem] leading-[1.8] text-ink-soft">{p}</p>
              ))}
            </section>
          ))}

          <BrandRoots className="mx-auto mt-16 h-auto w-full max-w-md" />

          <aside className="mt-8 rounded-[var(--radius-panel)] bg-beige p-8 md:p-10">
            <p className="font-display text-[length:var(--text-step-1)] leading-snug">{a.cta.text}</p>
            <div className="mt-6">
              <ContactButton intent={a.cta.intent} location={`blog-${a.slug}`}>{a.cta.label}</ContactButton>
            </div>
            <p className="mt-6 text-sm text-ink-soft">
              Este texto es informativo y no reemplaza una consulta profesional. Ante una urgencia, comunicate con los servicios de emergencia de tu lugar (en Argentina: 107 o 911).
            </p>
          </aside>

          <nav aria-label="Seguir leyendo" className="mt-12">
            <p className="label">Seguir leyendo</p>
            <ul className="mt-3 space-y-2">
              {a.related.map((r) => (
                <li key={r.href}><Link href={r.href} className="link-static font-display text-xl">{r.label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
      </article>
    </>
  );
}

import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Closing } from "@/components/Sections";
import { PageIntro } from "@/components/PageIntro";
import { ContactButton } from "@/components/ContactButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { areas } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Orientación y desarrollo profesional · Psicología laboral",
  description:
    "Orientación profesional y desarrollo de carrera para adultos, presencial en Córdoba u online. Lic. Nicolás Espíndola, psicólogo clínico y laboral, MP 11138.",
  alternates: { canonical: "/orientacion-profesional" },
  openGraph: { url: "/orientacion-profesional" },
};

const blocks = [
  { title: "Explorar intereses y motivaciones", text: "Pensar qué te interesa de verdad, más allá de lo que se espera de vos." },
  { title: "Transiciones profesionales", text: "Cambios de trabajo, de rubro o de país; reinserciones y nuevas etapas." },
  { title: "Tomar decisiones", text: "Un espacio para ordenar opciones, revisar supuestos y decidir con más claridad." },
  { title: "Malestar en el trabajo", text: "Conflictos, desgaste o estancamiento vinculados a tu trayectoria laboral." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Orientación profesional", path: "/orientacion-profesional" }])} />
      <PageIntro
        crumb="Orientación profesional"
        eyebrow={areas.career.eyebrow}
        title="Orientación y desarrollo profesional"
        lead="El trabajo ocupa un lugar central en la vida. Te propongo un espacio para pensar tu recorrido laboral: qué te interesa, qué te mueve y hacia dónde querés ir."
      />
      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <ul className="grid gap-4 sm:grid-cols-2">
            {blocks.map((b) => (
              <li key={b.title} className="rounded-3xl bg-beige p-8">
                <h2 className="font-display text-2xl font-medium">{b.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-soft">{b.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-8 rounded-3xl border border-charcoal/10 p-8 md:grid-cols-2 md:p-12">
            <div>
              <h2 className="font-display text-2xl font-medium">Cómo trabajamos</h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Es un proceso individual, de sesiones de {site.session.durationMinutes} minutos, presencial en Córdoba u online. Partimos de tu pregunta y de tu historia laboral para construir una dirección propia.
              </p>
            </div>
            <ul className="space-y-3">
              {areas.career.items.map((it) => (
                <li key={it} className="flex gap-3"><Check aria-hidden className="mt-1 size-4 shrink-0 text-sage-deep" />{it}</li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <ContactButton intent="career" location="career-page">Consultar por orientación profesional</ContactButton>
          </div>
        </div>
      </section>
      <Closing />
    </>
  );
}

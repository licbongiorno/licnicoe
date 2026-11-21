import type { Metadata } from "next";
import { Online, Faq, Closing } from "@/components/Sections";
import { PageIntro } from "@/components/PageIntro";
import { ContactButton } from "@/components/ContactButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, faqSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Psicólogo online en español · Terapia para hispanohablantes en el exterior",
  description:
    "Psicoterapia online en español con el Lic. Nicolás Espíndola (MP 11138, UNC). Sesiones de 40 minutos por videollamada para adultos en Argentina y otros países.",
  alternates: { canonical: "/terapia-online-en-espanol" },
  openGraph: { url: "/terapia-online-en-espanol" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Terapia online en español", path: "/terapia-online-en-espanol" }])} />
      <JsonLd data={faqSchema()} />
      <PageIntro
        crumb="Terapia online en español"
        eyebrow="Psicoterapia online"
        title="Psicólogo online en español, estés donde estés"
        lead={`Vivir lejos puede implicar distancia de los afectos, del idioma y de las propias referencias. Te ofrezco un espacio de escucha en español, con ${site.person.yearsOfExperience} años de experiencia clínica y un enfoque psicoanalítico e integrativo.`}
      />
      <div className="container-x -mt-6 mb-16 flex flex-col gap-3 sm:flex-row">
        <ContactButton intent="international" location="online-page-top">Consultar desde el exterior</ContactButton>
        <ContactButton intent="online" variant="secondary" location="online-page-top-ar">Vivo en Argentina</ContactButton>
      </div>
      <Online />
      <Faq />
      <Closing />
    </>
  );
}

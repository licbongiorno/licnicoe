import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo se tratan los datos personales en el sitio del Lic. Nicolás Espíndola, psicólogo MP 11138.",
  alternates: { canonical: "/privacidad" },
};

const updated = "noviembre de 2026";

export default function Page() {
  return (
    <>
      <PageIntro crumb="Política de privacidad" eyebrow="Legal" title="Política de privacidad" lead={`Última actualización: ${updated}. Texto inicial a revisar por un/a profesional del derecho antes de la publicación definitiva.`} />
      <article className="container-x max-w-3xl pb-24 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-medium [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-ink-soft [&_li]:mt-2 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-ink-soft">
        <h2>1. Responsable</h2>
        <p>
          El responsable del sitio es {site.person.displayName}, {site.person.profession.toLowerCase()}, matrícula {site.person.license}, con domicilio profesional en {site.location.street}, {site.location.neighborhood}, Córdoba, Argentina.
        </p>

        <h2>2. Qué datos se recogen</h2>
        <p>Este sitio no tiene formularios ni pide datos de salud. Los únicos datos que pueden tratarse son:</p>
        <ul>
          <li>Los que vos decidas enviar al escribir por WhatsApp (nombre, número de teléfono y el mensaje).</li>
          <li>Datos técnicos y estadísticos agregados de navegación (páginas visitadas, país aproximado, tipo de dispositivo, origen de la visita), si está activa la herramienta de analítica.</li>
        </ul>

        <h2>3. Para qué se usan</h2>
        <ul>
          <li>Responder tu consulta y coordinar una entrevista.</li>
          <li>Mejorar el sitio a partir de estadísticas anónimas o agregadas.</li>
        </ul>
        <p>No se venden ni ceden datos a terceros con fines comerciales. No se usan para publicidad personalizada basada en salud.</p>

        <h2>4. Información sensible</h2>
        <p>
          Te pido que no envíes información clínica o sensible por WhatsApp, correo o redes. Lo que se conversa en sesión está protegido por el secreto profesional y la normativa aplicable a la actividad.
        </p>

        <h2>5. Servicios de terceros</h2>
        <p>
          Al hacer clic en un botón de WhatsApp, la comunicación se realiza a través de WhatsApp (Meta), sujeta a sus propias políticas. El sitio puede usar una herramienta de analítica (por ejemplo, Google Analytics configurado sin señales publicitarias, o Plausible, sin cookies). El enlace a Google Maps abre un servicio de Google.
        </p>

        <h2>6. Tus derechos</h2>
        <p>
          Podés solicitar el acceso, la rectificación, la actualización o la supresión de tus datos escribiendo por el mismo medio por el que te comunicaste. En Argentina, la Agencia de Acceso a la Información Pública, en su carácter de órgano de control de la Ley 25.326, tiene la atribución de atender denuncias y reclamos de quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.
        </p>

        <h2>7. Emergencias</h2>
        <p>Este sitio no es un servicio de emergencias. Ante una situación de riesgo, comunicate con los servicios de emergencia del lugar donde te encontrás (en Argentina: 107 o 911).</p>
      </article>
    </>
  );
}

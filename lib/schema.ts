import { site } from "@/data/site";
import { faq } from "@/data/content";

const personId = `${site.url}/#persona`;
const serviceId = `${site.url}/#servicio`;

/** Person + ProfessionalService. Sin ratings ni reseñas (no hay datos verificados). */
export function baseGraph() {
  const sameAs = [site.links.googleBusiness, site.links.mundoPsicologos, site.links.instagram, site.links.linkedin].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.person.name,
        honorificPrefix: "Lic.",
        jobTitle: site.person.profession,
        description: `${site.person.degree} (${site.person.university}, ${site.person.graduationYear}). ${site.person.postgraduate}. Psicoterapia psicoanalítica e integrativa para adultos.`,
        alumniOf: { "@type": "CollegeOrUniversity", name: site.person.university },
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Matrícula profesional",
            name: `Psicólogo ${site.person.license}`,
            recognizedBy: { "@type": "Organization", name: site.person.licenseBody },
          },
          { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: site.person.degree },
          { "@type": "EducationalOccupationalCredential", credentialCategory: "Posgrado", name: site.person.postgraduate },
        ],
        knowsLanguage: site.person.languages,
        knowsAbout: ["Psicoanálisis", "Psicoterapia", "Salud mental", "Orientación profesional"],
        worksFor: { "@id": serviceId },
        url: site.url,
        ...(site.photos.portrait
          ? {
              image: {
                "@type": "ImageObject",
                url: `${site.url}${site.photos.portrait}`,
                caption: `${site.person.displayName}, psicólogo, en su consultorio de barrio Juniors, Córdoba`,
              },
            }
          : {}),
        workLocation: { "@id": serviceId },
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        "@type": "ProfessionalService",
        "@id": serviceId,
        name: `${site.person.displayName} · Psicólogo ${site.person.license}`,
        description: "Psicoterapia psicoanalítica e integrativa para adultos, presencial en Córdoba y online en español. Orientación y desarrollo profesional.",
        url: site.url,
        logo: `${site.url}/brand/favicon-512.png`,
        image: [`${site.url}/images/og.png`, ...(site.photos.portrait ? [`${site.url}${site.photos.portrait}`] : [])],
        hasMap: site.location.mapsSearchUrl,
        slogan: site.brand.tagline,
        serviceType: ["Psicoterapia para adultos", "Psicoterapia online", "Orientación profesional"],
        audience: { "@type": "PeopleAudience", audienceType: "Adultos" },
        knowsLanguage: site.person.languages,
        founder: { "@id": personId },
        employee: { "@id": personId },
        address: {
          "@type": "PostalAddress",
          streetAddress: site.location.street,
          addressLocality: `${site.location.city} (${site.location.neighborhood})`,
          addressRegion: site.location.region,
          addressCountry: site.location.country,
        },
        openingHoursSpecification: site.hours.schema.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.days,
          opens: h.opens,
          closes: h.closes,
        })),
        areaServed: [
          { "@type": "City", name: "Córdoba, Argentina" },
          { "@type": "Country", name: "Argentina" },
        ],
        availableLanguage: site.person.languages,
        ...(site.whatsapp.enabled ? { telephone: `+${site.whatsapp.number}` } : {}),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios",
          itemListElement: [
            "Psicoterapia para adultos (presencial)",
            "Psicoterapia online en español",
            "Orientación y desarrollo profesional",
          ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
        },
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#web`,
        url: site.url,
        name: site.person.displayName,
        inLanguage: "es",
        publisher: { "@id": personId },
        creator: { "@type": "Person", name: site.designer.name, description: "Diseño y desarrollo web" },
      },
    ],
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Inicio", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

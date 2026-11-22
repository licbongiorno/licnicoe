/**
 * CONFIGURACIÓN CENTRAL DEL SITIO
 * ------------------------------------------------------------------
 * Todos los datos del profesional viven acá. Cambiar un dato en este
 * archivo lo actualiza en toda la web (textos, botones, SEO, JSON-LD).
 *
 * Convención: `null` = dato pendiente de confirmación. Los componentes
 * NO muestran nada que esté en `null` (no hay enlaces falsos).
 */

export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.espaciodeanalisis.com.ar").replace(/\/$/, ""),
  locale: "es_AR",
  lang: "es",

  person: {
    name: "Nicolás Espíndola",
    displayName: "Lic. Nicolás Espíndola",
    profession: "Psicólogo clínico y laboral",
    license: "MP 11138",
    licenseBody: "Colegio de Psicólogos de la Provincia de Córdoba", // verificar denominación exacta
    degree: "Licenciado en Psicología",
    university: "Universidad Nacional de Córdoba",
    universityShort: "UNC",
    graduationYear: 2011,
    yearsOfExperience: 15,
    postgraduate: "Posgrado en Psicoanálisis y Salud Mental",
    orientation: ["Psicoanalítica", "Integrativa"],
    population: "Adultos",
    languages: ["Español"],
  },

  brand: {
    tagline: "Un espacio de análisis y transformación personal",
    motto: "Lo que el árbol tiene de florido vive de lo que tiene sepultado",
    triad: "Comprender. Cuestionar. Transformar.",
  },

  location: {
    street: "Posadas 331",
    neighborhood: "Barrio Juniors",
    city: "Córdoba",
    region: "Córdoba",
    country: "AR",
    countryName: "Argentina",
    reference: "A unos 10 minutos del centro de Córdoba",
    /** Mapa incrustado: búsqueda por dirección (no usa coordenadas inventadas).
     *  Si se prefiere el pin exacto de Google Business, reemplazar por la URL de "Compartir → Insertar un mapa". */
    mapEmbedUrl:
      "https://www.google.com/maps?q=" + encodeURIComponent("Posadas 331, Juniors, Córdoba, Argentina") + "&z=16&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent("Posadas 331, Juniors, Córdoba, Argentina"),
    /** Enlace de búsqueda (no inventa coordenadas: deja que Google Maps resuelva la dirección). */
    mapsSearchUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("Posadas 331, Juniors, Córdoba, Argentina"),
  },

  hours: {
    label: "Lunes a viernes, de 8:00 a 20:00",
    schema: [{ days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "20:00" }],
    timezone: "America/Argentina/Cordoba",
    timezoneLabel: "hora de Argentina (GMT-3)",
  },

  session: {
    durationMinutes: 40,
  },

  coverage: {
    insurers: ["GEA"], // NO agregar otras obras sociales sin confirmación
    privatePatients: true,
  },

  fees: {
    argentina: null as string | null, // se informa por privado
    international: {
      amount: 40,
      currency: "USD",
      /** Mientras sea false, el precio se muestra como "referencia, a confirmar". */
      confirmed: false,
    },
  },

  /**
   * WHATSAPP
   * number: formato internacional sin "+" ni espacios (Argentina móvil: 549 + área + número).
   * enabled: si es false, los botones se muestran como "Contacto disponible próximamente"
   *          y el botón flotante no aparece.
   * isBusiness: cambiar a true cuando se migre a WhatsApp Business (no requiere otros cambios).
   */
  whatsapp: {
    number: "5493515959914",
    enabled: true,
    isBusiness: false,
  },

  email: null as string | null,

  links: {
    googleBusiness: null as string | null, // pegar el enlace "Compartir perfil" de Google Business
    mundoPsicologos: "https://www.mundopsicologos.com.ar/procard/espindola-nicolas",
    instagram: null as string | null, // no publicar hasta confirmar
    linkedin: null as string | null,
  },

  /** Crédito de diseño y desarrollo web (igual que en las otras webs del estudio). */
  designer: {
    name: "Lic. Nicolás Bongiorno",
    whatsapp: "5493516575261",
    whatsappLabel: "351 657-5261",
    message: "Hola Nicolás, vi la web del Lic. Nicolás Espíndola y me gustaría una página web para mi proyecto.",
  },

  photos: {
    /** Retrato principal (sección Sobre mí). Subir el archivo a /public/images/nicolas-espindola-retrato.jpg
     *  y cambiar este valor a "/images/nicolas-espindola-retrato.jpg". Encuadre ideal 4:5, mínimo 1200 px de ancho. */
    portrait: "/images/nicolas-espindola-retrato.webp" as string | null,
    office: null as string | null,
    /** Foto de perfil (recorte cuadrado del retrato). */
    profile: "/images/nicolas-espindola-perfil.webp" as string | null,
  },
} as const;

export const yearsLabel = `${site.person.yearsOfExperience} años de experiencia`;
export const credentialLine = `${site.person.displayName} · Psicólogo ${site.person.license}`;
export const internationalFeeLabel = `${site.fees.international.currency} ${site.fees.international.amount}`;

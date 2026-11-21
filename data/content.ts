import { site, internationalFeeLabel } from "./site";

export const nav = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#enfoque", label: "Enfoque" },
  { href: "/#areas", label: "Áreas de trabajo" },
  { href: "/#online", label: "Atención online" },
  { href: "/#contacto", label: "Contacto" },
];

export const hero = {
  subtitle: site.brand.tagline,
  title: "Hay cosas que necesitan ser comprendidas antes de poder transformarse",
  description:
    "Psicoterapia psicoanalítica e integrativa para adultos. Un espacio de escucha, comprensión y construcción de nuevas posibilidades.",
  facts: [
    "Online en español, desde cualquier país",
    "Presencial en Córdoba Capital",
    `Sesiones de ${site.session.durationMinutes} minutos`,
  ],
};

export const about = {
  title: "Cada persona tiene una historia que merece ser escuchada",
  paragraphs: [
    `Soy Nicolás Espíndola, Licenciado en Psicología por la Universidad Nacional de Córdoba. Me recibí en ${site.person.graduationYear} y cuento con ${site.person.yearsOfExperience} años de experiencia profesional.`,
    "Tengo formación de posgrado en Psicoanálisis y Salud Mental. Mi práctica clínica integra una perspectiva psicoanalítica con aportes de distintas corrientes de la psicología.",
    "Entiendo la terapia como un proceso singular, en el que cada persona puede encontrar un espacio para comprender su malestar, reconocer aquello que se repite y construir otras posibilidades.",
  ],
  credentials: [
    { label: "Matrícula", value: `Psicólogo ${site.person.license}` },
    { label: "Formación", value: "Lic. en Psicología · UNC" },
    { label: "Posgrado", value: "Psicoanálisis y Salud Mental" },
    { label: "Experiencia", value: `${site.person.yearsOfExperience} años · desde ${site.person.graduationYear}` },
  ],
};

export const approach = {
  title: "Un espacio de análisis y transformación personal",
  intro:
    "La terapia es también un espacio para hacerse preguntas, cuestionarse y encontrar la propia verdad. Nadie llega con un manual de instrucciones, y nadie te va a entregar uno.",
  explainers: [
    {
      title: "Una perspectiva psicoanalítica",
      text: "Parte de la idea de que lo que nos pasa tiene sentido, aunque todavía no lo entendamos. Hablar con libertad permite que aparezcan relaciones entre tu historia, tus vínculos y aquello que se repite.",
    },
    {
      title: "Una mirada integrativa",
      text: "Según lo que cada proceso necesita, el trabajo también incorpora aportes de otras corrientes de la psicología, orientados a reconocer recursos y abrir alternativas concretas.",
    },
    {
      title: "Cómo se construye el proceso",
      text: "Empezamos por escuchar tu consulta y entender qué te trae, que a veces no coincide con lo primero que aparece. A partir de ahí construimos juntos una dirección de trabajo propia, sin recetas.",
    },
  ],
  pillars: [
    { n: "01", title: "Analizar", text: "Comprender el malestar, la historia y los conflictos." },
    { n: "02", title: "Desarrollar", text: "Reconocer recursos, posibilidades y nuevas perspectivas." },
    { n: "03", title: "Acompañar", text: "Un vínculo terapéutico basado en la escucha y la calidez." },
    { n: "04", title: "Transformar", text: "Abrir alternativas y nuevas formas de posicionarte frente a tu vida." },
  ],
};

export const phrase = {
  top: "Lo que el árbol tiene de florido",
  bottom: "vive de lo que tiene sepultado",
  reading: [
    "En el árbol, las raíces sostienen. En una vida, ese lugar lo ocupan la historia, lo vivido y aquello que todavía no encontró palabras.",
    "Lo que florece se alimenta de ahí. Por eso el trabajo empieza abajo, comprendiendo, y desde esa comprensión se abren otras posibilidades.",
  ],
};

export const areas = {
  title: "¿Qué te está pasando? Podemos empezar por ahí",
  intro:
    "Estos son algunos motivos frecuentes de consulta. No hace falta que lo que te pasa encaje en una categoría: cada historia se escucha en su singularidad.",
  items: [
    {
      title: "Ansiedad y angustia",
      text: "Preocupación constante, ataques de pánico, una inquietud difícil de nombrar. Comprender de dónde viene ayuda a convivir de otra manera con ella.",
    },
    {
      title: "Estrés y agotamiento",
      text: "Cuando el cansancio ya no se va con descansar y sentís que estás funcionando en automático.",
    },
    {
      title: "Autoestima y conflictos personales",
      text: "Inseguridad, exigencia, desmotivación o la sensación de no estar a la altura. Un espacio para revisar cómo te mirás.",
    },
    {
      title: "Vínculos y relaciones",
      text: "Pareja, familia, amistades, trabajo. Patrones que se repiten y que vale la pena pensar.",
    },
    {
      title: "Duelos y separaciones",
      text: "Pérdidas, rupturas y despedidas que necesitan tiempo y un lugar donde ser elaboradas.",
    },
    {
      title: "Crisis y cambios vitales",
      text: "Mudanzas, migraciones, cambios de etapa o momentos en los que algo dejó de funcionar como antes.",
    },
    {
      title: "Desarrollo personal",
      text: "No siempre se consulta por un problema. A veces es el deseo de conocerse y entender mejor la propia vida.",
    },
  ],
  career: {
    eyebrow: "Psicología laboral",
    title: "Orientación y desarrollo profesional",
    text: "Un espacio para pensar tu recorrido laboral: qué te interesa, qué te mueve y hacia dónde querés ir.",
    items: [
      "Orientación profesional y exploración de intereses",
      "Desarrollo de carrera y transiciones laborales",
      "Toma de decisiones sobre tu trabajo",
      "Malestar y conflictos vinculados a la trayectoria profesional",
    ],
  },
};

export const online = {
  title: "Un espacio terapéutico, estés donde estés",
  subtitle: "Psicoterapia online en español para personas que viven en Argentina y en otros países.",
  steps: [
    {
      title: "Escribís por WhatsApp",
      text: "Contame si buscás terapia online y desde qué país y zona horaria escribís. No hace falta que expliques tu situación por mensaje.",
    },
    {
      title: "Coordinamos una primera entrevista",
      text: `Buscamos un horario que funcione en tu zona horaria (atiendo de lunes a viernes, de 8:00 a 20:00, ${site.hours.timezoneLabel}).`,
    },
    {
      title: "Antes de empezar, recibís la información",
      text: "Te comparto por escrito el encuadre: honorarios, forma de pago, plataforma de videollamada, frecuencia y política de cancelación.",
    },
    {
      title: "Comenzamos",
      text: `Sesiones de ${site.session.durationMinutes} minutos por videollamada, con la misma confidencialidad que en el consultorio.`,
    },
  ],
  requirements: [
    "Un lugar privado donde puedas hablar sin ser escuchado/a",
    "Conexión a internet estable",
    "Celular o computadora con cámara y auriculares",
  ],
  international: {
    title: "Si vivís fuera de Argentina",
    points: [
      "Las sesiones son en español, con alguien que entiende de dónde venís y también lo que implica vivir en otro lugar.",
      "Coordinamos horarios considerando la diferencia horaria con tu país.",
      `Honorario de referencia: ${internationalFeeLabel} por sesión de ${site.session.durationMinutes} minutos. Se confirma por escrito antes de comenzar.`,
    ],
    legal:
      "La disponibilidad y el encuadre de la atención online internacional están sujetos a las condiciones profesionales y regulatorias del país donde residís. En la primera conversación lo revisamos con vos de forma transparente y, si no fuera posible un tratamiento, te lo voy a decir con claridad.",
  },
};

export const presencial = {
  title: "Un espacio de encuentro en Córdoba",
  text: "Para quienes prefieren el encuentro cara a cara, atiendo en un consultorio tranquilo en barrio Juniors, cerca del centro.",
};

export const coverage = {
  title: "Modalidades y cobertura",
  items: [
    {
      title: "Pacientes particulares",
      text: "Honorarios informados por mensaje privado según modalidad.",
    },
    {
      title: "Obra social GEA",
      text: "Atención directa a afiliados, según autorización y condiciones de tu cobertura.",
    },
    {
      title: "Atención online",
      text: `Para Argentina y el exterior. Referencia internacional: ${internationalFeeLabel} por sesión, a confirmar.`,
    },
    {
      title: "Atención presencial",
      text: "Consultorio en Posadas 331, barrio Juniors, Córdoba Capital.",
    },
  ],
};

export const faq = [
  {
    q: "¿Cómo es la primera entrevista?",
    a: "Es un primer encuentro para conocernos. Me contás qué te trae, en la medida en que puedas y quieras, y yo te explico cómo trabajo. Al final, ambos podemos evaluar si tiene sentido continuar. No hay compromiso de seguir.",
  },
  {
    q: "¿Cuánto dura una sesión?",
    a: `Cada sesión dura ${site.session.durationMinutes} minutos. La frecuencia (en general semanal) se acuerda según cada proceso.`,
  },
  {
    q: "¿Cómo funciona la terapia online?",
    a: "Nos encontramos por videollamada en el día y horario acordados. Antes de empezar te paso por escrito la plataforma, el encuadre y la forma de pago. El trabajo es el mismo que en el consultorio.",
  },
  {
    q: "¿Puedo hacer terapia si vivo en otro país?",
    a: "Sí, atiendo online a personas hispanohablantes que viven fuera de Argentina. La posibilidad concreta depende también de las condiciones regulatorias del país donde residís; lo revisamos juntos en la primera conversación.",
  },
  {
    q: "¿Qué pasa si nunca hice terapia?",
    a: "No necesitás saber cómo es ni tener claro qué decir. Muchas personas llegan con una sensación difusa de que algo no anda bien. Empezar por ahí es suficiente.",
  },
  {
    q: "¿Cómo solicito un turno?",
    a: "Escribiendo por WhatsApp. Te respondo para coordinar día y horario de la primera entrevista. Te pido que no envíes información sensible por mensaje: eso lo hablamos en sesión.",
  },
  {
    q: "¿Trabajás con obras sociales?",
    a: "Atiendo de forma directa a afiliados de GEA, según autorización y condiciones de cobertura. También atiendo pacientes particulares.",
  },
  {
    q: "¿Cuál es el valor de una sesión?",
    a: `Para Argentina, los honorarios se informan por mensaje privado. Para pacientes en el exterior, la referencia es ${internationalFeeLabel} por sesión, y se confirma por escrito antes de comenzar.`,
  },
  {
    q: "¿Qué necesito para una sesión online?",
    a: "Un lugar privado y tranquilo, buena conexión a internet y un dispositivo con cámara. Los auriculares ayudan a cuidar la privacidad.",
  },
  {
    q: "¿Este espacio sirve para urgencias?",
    a: "No. Si estás atravesando una situación de riesgo o emergencia, comunicate de inmediato con los servicios de emergencia del lugar donde te encontrás. En Argentina podés llamar al 107 (emergencias médicas) o al 911.",
  },
];

export const closing = {
  title: "Toda transformación comienza con una pregunta",
  text: "Quizás no tengas todas las respuestas. No es necesario tenerlas para empezar. A veces, el primer paso es animarse a formular nuevas preguntas.",
  cta: "Consultar por una entrevista",
};

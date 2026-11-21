import type { ContactIntent } from "@/lib/whatsapp";

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  published: string; // ISO
  updated: string; // ISO
  readingMinutes: number;
  intro: string;
  sections: { h2: string; paragraphs: string[] }[];
  cta: { text: string; intent: ContactIntent; label: string };
  related: { href: string; label: string }[];
};

export const articles: Article[] = [
  {
    slug: "psicoterapia-online-en-espanol-como-funciona",
    title: "Psicoterapia online en español: cómo funciona",
    seoTitle: "Psicoterapia online en español: cómo funciona, paso a paso",
    description:
      "Qué necesitás, cómo se coordinan los horarios desde otro país, cuánto dura una sesión y cómo se cuida la confidencialidad en la terapia online en español.",
    published: "2026-11-21",
    updated: "2026-11-21",
    readingMinutes: 5,
    intro:
      "Cada vez más personas hacen terapia por videollamada. Algunas porque viven lejos del consultorio, otras porque se mudaron a otro país y quieren hablar de lo que les pasa en su propio idioma. Acá te cuento, de forma concreta, cómo funciona.",
    sections: [
      {
        h2: "Qué es la psicoterapia online",
        paragraphs: [
          "Es el mismo trabajo que se hace en un consultorio, pero el encuentro ocurre por videollamada. Hay un día y un horario fijos, una duración acordada y un encuadre que se respeta: confidencialidad, puntualidad y una forma clara de comunicarse fuera de las sesiones.",
          "Lo que cambia es el lugar. Vos elegís desde dónde conectarte, y eso implica cuidar algunos detalles para que ese espacio sea realmente tuyo durante la sesión.",
        ],
      },
      {
        h2: "Cómo es una sesión",
        paragraphs: [
          "Cada sesión dura 40 minutos. Nos conectamos a la hora acordada por la plataforma que definimos al comienzo, y el trabajo es el mismo que en el consultorio: hablar de lo que te trae, de lo que se repite, de lo que todavía no tiene palabras.",
          "La frecuencia suele ser semanal, aunque se acuerda según cada proceso. No hace falta preparar nada: alcanza con llegar con lo que haya ese día.",
        ],
      },
      {
        h2: "Qué necesitás",
        paragraphs: [
          "Un lugar donde puedas hablar sin que te escuchen. Para muchas personas es un cuarto con la puerta cerrada; para otras, el auto estacionado o una oficina después de hora. Lo importante es que te sientas con libertad para decir lo que necesites.",
          "Una conexión a internet estable y un celular o computadora con cámara. Los auriculares ayudan mucho a cuidar la privacidad.",
        ],
      },
      {
        h2: "Si vivís en otro país: la diferencia horaria",
        paragraphs: [
          "Atiendo de lunes a viernes, de 8 a 20 h de Argentina (GMT-3). Según dónde estés, eso puede ser de mañana, de tarde o de noche. En la página de terapia online hay un conversor que te muestra ese horario en tu hora local.",
          "La disponibilidad y el encuadre de la atención internacional dependen también de las condiciones profesionales y regulatorias del país donde residís. Lo revisamos juntos en la primera conversación, con claridad.",
        ],
      },
      {
        h2: "Confidencialidad",
        paragraphs: [
          "Lo que se habla en sesión está protegido por el secreto profesional, igual que en el consultorio.",
          "Te pido que no envíes información clínica o sensible por WhatsApp ni por mensajes: esos canales sirven para coordinar horarios. Lo importante lo conversamos en sesión.",
        ],
      },
      {
        h2: "Cómo empezar",
        paragraphs: [
          "Escribís por WhatsApp contando si buscás terapia online y desde qué país y zona horaria escribís. Coordinamos una primera entrevista y, antes de comenzar, te envío por escrito el encuadre: honorarios, forma de pago, plataforma y política de cancelación.",
        ],
      },
    ],
    cta: { text: "Si estás pensando en empezar terapia online en español, podés escribirme para coordinar una primera entrevista.", intent: "international", label: "Consultar por terapia online" },
    related: [
      { href: "/terapia-online-en-espanol", label: "Psicólogo online en español" },
      { href: "/blog/que-significa-comenzar-un-proceso-terapeutico", label: "¿Qué significa comenzar un proceso terapéutico?" },
    ],
  },
  {
    slug: "que-significa-comenzar-un-proceso-terapeutico",
    title: "¿Qué significa comenzar un proceso terapéutico?",
    seoTitle: "Comenzar terapia: qué esperar de un proceso terapéutico",
    description:
      "Qué pasa en la primera entrevista, cuánto dura una sesión y cómo se construye un proceso terapéutico. Una guía clara para quien está pensando en empezar.",
    published: "2026-11-21",
    updated: "2026-11-21",
    readingMinutes: 5,
    intro:
      "Pedir una primera entrevista suele costar. A veces se posterga durante meses. Saber qué esperar puede hacer ese primer paso un poco más sencillo.",
    sections: [
      {
        h2: "Por qué cuesta dar el primer paso",
        paragraphs: [
          "Consultar implica reconocer que algo nos está pasando y que, solos, no terminamos de entenderlo. Es habitual sentir dudas: si lo que me pasa «es para tanto», si voy a saber qué decir, si voy a sentirme juzgado.",
          "Ninguna de esas dudas es un impedimento. De hecho, suelen ser parte de lo que se empieza a conversar.",
        ],
      },
      {
        h2: "Qué pasa en la primera entrevista",
        paragraphs: [
          "Es un encuentro para conocernos. Me contás qué te trae, en la medida en que puedas y quieras, y yo te explico cómo trabajo. No hay preguntas que tengas que responder «bien» ni un orden correcto para contar las cosas.",
          "Al final, ambos podemos evaluar si tiene sentido continuar. No hay compromiso de seguir.",
        ],
      },
      {
        h2: "La demanda: lo que te trae y lo que aparece después",
        paragraphs: [
          "Muchas veces se consulta por algo puntual: ansiedad, una separación, un problema en el trabajo. Con el tiempo, ese motivo inicial suele abrirse a otras preguntas sobre la propia historia, los vínculos o aquello que se repite.",
          "Por eso, más que una solución estándar, el trabajo consiste en construir una dirección propia, a partir de lo que cada persona trae.",
        ],
      },
      {
        h2: "Cuánto dura y con qué frecuencia",
        paragraphs: [
          "Cada sesión dura 40 minutos y la frecuencia suele ser semanal. La duración total del proceso no se fija de antemano: depende de lo que se vaya trabajando y se revisa en conjunto.",
        ],
      },
      {
        h2: "Un espacio para hacerse preguntas",
        paragraphs: [
          "La terapia no promete respuestas rápidas. Propone un espacio para comprender lo que te pasa, cuestionar algunas respuestas que ya no funcionan y, desde ahí, abrir otras posibilidades.",
          "Como dice la frase que acompaña este espacio: lo que el árbol tiene de florido vive de lo que tiene sepultado.",
        ],
      },
    ],
    cta: { text: "Si estás pensando en empezar, podés escribirme para coordinar una primera entrevista, presencial en Córdoba u online.", intent: "general", label: "Solicitar una entrevista" },
    related: [
      { href: "/#enfoque", label: "Mi enfoque terapéutico" },
      { href: "/blog/cuando-es-momento-de-consultar-a-un-psicologo", label: "¿Cuándo es momento de consultar a un psicólogo?" },
    ],
  },
  {
    slug: "cuando-es-momento-de-consultar-a-un-psicologo",
    title: "¿Cuándo es momento de consultar a un psicólogo?",
    seoTitle: "¿Cuándo ir al psicólogo? Señales para considerar una consulta",
    description:
      "No hace falta «estar mal» para consultar. Algunas situaciones en las que un espacio terapéutico puede ayudar, y cómo elegir profesional.",
    published: "2026-11-21",
    updated: "2026-11-21",
    readingMinutes: 4,
    intro:
      "No existe un umbral exacto a partir del cual «corresponde» ir al psicólogo. Pero hay algunas señales que vale la pena escuchar.",
    sections: [
      {
        h2: "No hace falta llegar al límite",
        paragraphs: [
          "Muchas personas consultan recién cuando el malestar ya es muy intenso. No es necesario esperar a ese punto: también se puede consultar porque algo incomoda, se repite o simplemente no se entiende.",
        ],
      },
      {
        h2: "Algunas señales",
        paragraphs: [
          "Cuando una preocupación ocupa buena parte del día o aparece una angustia difícil de nombrar. Cuando el cansancio ya no se va con descansar.",
          "Cuando en distintas relaciones parece repetirse la misma historia. Cuando una pérdida, una separación o un cambio importante resultan difíciles de atravesar.",
          "Cuando hay ganas de conocerse mejor y entender la propia vida, aunque no haya un problema puntual.",
        ],
      },
      {
        h2: "Consultar sin saber qué decir",
        paragraphs: [
          "No necesitás tener claro qué te pasa ni saber explicarlo. Muchas consultas empiezan con un «no sé bien por qué vengo». Ese punto de partida es suficiente.",
        ],
      },
      {
        h2: "Cómo elegir profesional",
        paragraphs: [
          "Verificá que la persona tenga matrícula profesional vigente; en Córdoba, la matrícula de psicólogo se identifica con las siglas MP y un número. Preguntá por su enfoque y por cómo trabaja, y prestá atención a si el encuadre (honorarios, duración, frecuencia) se explica con claridad.",
          "También importa algo menos medible: que sientas que ese espacio es de escucha y no de juicio.",
        ],
      },
      {
        h2: "Si es una urgencia",
        paragraphs: [
          "Si estás atravesando una situación de riesgo, no esperes una entrevista: comunicate de inmediato con los servicios de emergencia del lugar donde te encontrás. En Argentina, podés llamar al 107 o al 911.",
        ],
      },
    ],
    cta: { text: "Si alguna de estas situaciones te resuena, podés escribirme y lo conversamos.", intent: "general", label: "Hacer una consulta" },
    related: [
      { href: "/#areas", label: "Áreas de consulta" },
      { href: "/blog/psicoterapia-online-en-espanol-como-funciona", label: "Psicoterapia online en español: cómo funciona" },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

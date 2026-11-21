import Image from "next/image";
import Link from "next/link";
import { Clock, Globe2, Headphones, MapPin, ShieldCheck, Video, Wifi, Plus } from "lucide-react";
import { site } from "@/data/site";
import { hero, about, approach, phrase, areas, online, presencial, coverage, faq, closing } from "@/data/content";
import { ContactButton } from "./ContactButton";
import { DesignerCredit } from "./DesignerCredit";
import { BrandTree, BrandRoots, TreeStage, LogoLeaf } from "./BrandTree";

/* =========================================================
   HERO — el árbol completo
   ========================================================= */
export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden pt-[4.5rem]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 -right-56 size-[40rem] bg-aqua/45 md:-right-32"
        style={{ borderRadius: "var(--radius-organic)" }}
      />
      <div className="container-x relative grid items-center gap-x-16 gap-y-10 pt-10 pb-16 md:pt-16 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.2fr_0.8fr] lg:py-12">
        <div>
          <p className="label build" style={{ ["--i" as string]: 0 }}>{hero.subtitle}</p>
          <h1 id="hero-title" className="display build-soft mt-5 text-[length:var(--text-step-4)]">
            {hero.title}
          </h1>
          <p className="build mt-7 max-w-[34rem] text-[1.08rem] leading-relaxed text-ink-soft" style={{ ["--i" as string]: 2 }}>{hero.description}</p>

          <div className="build mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ ["--i" as string]: 3 }}>
            <ContactButton location="hero">Solicitar una entrevista</ContactButton>
            <Link href="/#enfoque" className="btn btn-outline">
              Conocer mi enfoque
            </Link>
          </div>

          {/* Firma */}
          <div className="build mt-12 flex items-center gap-4" style={{ ["--i" as string]: 4 }}>
            {site.photos.profile && (
              <Image
                src={site.photos.profile}
                alt={`Retrato de ${site.person.displayName}`}
                width={60}
                height={60}
                priority
                className="size-[3.75rem] rounded-full object-cover ring-4 ring-paper"
              />
            )}
            <p className="leading-snug">
              <span className="block font-display text-xl font-semibold">{site.person.displayName}</span>
              <span className="block text-sm text-ink-soft">
                {site.person.profession}. {site.person.license}
              </span>
            </p>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-[30rem]">
          <p className="hero-phrase-top text-center font-display text-[1.35rem] italic">{phrase.top}</p>
          <BrandTree
            animate="hero"
            className="my-2 h-auto w-full"
            title="Árbol con sus raíces: lo florido arriba de la tierra, lo sepultado debajo."
          />
          <p className="hero-phrase-bottom text-center font-display text-[1.35rem] italic text-sage-deep">{phrase.bottom}</p>
        </figure>
      </div>
    </section>
  );
}

/* =========================================================
   SOBRE MÍ — las raíces
   ========================================================= */
export function About() {
  return (
    <section id="sobre-mi" aria-labelledby="about-title" className="relative bg-beige/70 py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className={`lg:pt-2 ${site.photos.portrait ? "" : "order-last lg:order-first"}`}>
          <Portrait />
        </div>
        <div>
          <h2 id="about-title" className="h2">{about.title}</h2>
          <div className="mt-8 max-w-[var(--measure)] space-y-5 text-ink-soft">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "font-display text-[length:var(--text-step-1)] leading-snug text-charcoal" : ""}>
                {p}
              </p>
            ))}
          </div>
          <dl className="mt-10 grid max-w-[var(--measure)] grid-cols-1 gap-x-10 sm:grid-cols-2">
            {about.credentials.map((c) => (
              <div key={c.label} className="border-t border-charcoal/15 py-4">
                <dt className="label">{c.label}</dt>
                <dd className="mt-1 font-medium">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/** Retrato real cuando exista; mientras tanto, las raíces (no simula una fotografía). */
function Portrait() {
  const src = site.photos.portrait;
  if (src) {
    return (
      <figure>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-panel)] bg-aqua">
          <Image
            src={src}
            alt={`${site.person.displayName}, psicólogo, en su consultorio`}
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="object-cover object-top"
          />
        </div>
        <figcaption className="mt-3 text-sm text-ink-soft">{site.person.displayName} en su consultorio de barrio Juniors, Córdoba.</figcaption>
        <BrandRoots className="mx-auto mt-6 hidden h-auto w-full lg:block" />
      </figure>
    );
  }
  return (
    <div aria-hidden className="relative">
      <BrandRoots className="mx-auto h-auto w-full max-w-md" />
    </div>
  );
}

/* =========================================================
   LA FRASE — sección editorial: suelo, raíces y lo que florece
   ========================================================= */
export function Phrase() {
  const groupsTop = ["Lo que el árbol", "tiene de florido"];
  const groupsBottom = ["vive de lo que", "tiene sepultado"];
  return (
    <section aria-labelledby="phrase-title" className="phrase reveal-target relative overflow-hidden py-24 md:py-36">
      <h2 id="phrase-title" className="sr-only">
        {phrase.top} {phrase.bottom}
      </h2>
      <div className="container-x" aria-hidden>
        <p className="display text-center text-[length:var(--text-step-4)] italic">
          {groupsTop.map((g, i) => (
            <span key={g} className="rise inline-block" style={{ ["--d" as string]: `${0.5 + i * 0.35}s` }}>
              {g}
              {i === 0 ? " " : ""}
            </span>
          ))}
        </p>
        {/* el suelo y, debajo, las mismas raíces del logo; lo «sepultado» queda bajo tierra */}
        <div className="ground-draw ground mt-6 md:mt-8" />
        <BrandRoots animate className="mx-auto -mt-px h-auto w-full max-w-3xl" ground="transparent" />
        <p className="display mt-2 text-center text-[length:var(--text-step-4)] italic text-sage-deep">
          {groupsBottom.map((g, i) => (
            <span key={g} className="fall inline-block" style={{ ["--d" as string]: `${2.3 + i * 0.35}s` }}>
              {g}
              {i === 0 ? " " : ""}
            </span>
          ))}
        </p>
      </div>
      <div className="container-x mt-10 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-12">
        {phrase.reading.map((p) => (
          <p key={p} className="max-w-[34rem] text-ink-soft md:first:justify-self-end">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   ENFOQUE — las ramificaciones
   ========================================================= */
export function Approach() {
  return (
    <section id="enfoque" aria-labelledby="approach-title" className="py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <h2 id="approach-title" className="h2">{approach.title}</h2>
          <p className="lead self-end">{approach.intro}</p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
          {approach.explainers.map((e) => (
            <div key={e.title}>
              <h3 className="font-display text-[1.6rem] font-semibold leading-tight">{e.title}</h3>
              <p className="mt-3 text-ink-soft">{e.text}</p>
            </div>
          ))}
        </div>

        {/* Los cuatro pilares: el mismo árbol del logo en cuatro etapas de crecimiento */}
        <ol className="mt-20 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
          {approach.pillars.map((p, i) => (
            <li key={p.n} className="flex items-center gap-5 sm:flex-col sm:items-stretch sm:gap-5">
              <TreeStage stage={i as 0 | 1 | 2 | 3} className="h-auto w-28 shrink-0 sm:order-first sm:w-full sm:max-w-[13rem]" />
              <div>
                <p className="font-display text-lg text-sage-deep">{p.n}</p>
                <h3 className="font-display text-[2rem] font-semibold leading-none">{p.title}</h3>
                <p className="mt-3 max-w-[22rem] text-ink-soft">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <blockquote className="mx-auto mt-20 max-w-2xl text-center font-display text-[length:var(--text-step-2)] italic leading-snug">
          “Para transformar es necesaria una alternativa diferente.”
        </blockquote>
      </div>
    </section>
  );
}

/* =========================================================
   ÁREAS — los brotes
   ========================================================= */
export function Areas() {
  return (
    <section id="areas" aria-labelledby="areas-title" className="bg-paper pb-20 md:pb-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <h2 id="areas-title" className="h2">{areas.title}</h2>
          <p className="mt-6 max-w-[var(--measure)] text-ink-soft">{areas.intro}</p>
        </div>

        <ul className="mt-14 grid gap-x-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {areas.items.map((a, i) => (
            <li key={a.title} className="group flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-beige transition-transform duration-300 group-hover:-translate-y-0.5">
                <LogoLeaf n={i} className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-[1.55rem] font-semibold leading-tight">{a.title}</h3>
                <p className="mt-2 text-ink-soft">{a.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-start gap-5 border-t border-charcoal/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-[length:var(--text-step-1)] italic">“Un espacio para comprender aquello que nos habita.”</p>
          <ContactButton location="areas" variant="outline">Contame qué te pasa</ContactButton>
        </div>

        {/* Psicología laboral, diferenciada */}
        <div id="orientacion" className="mt-16 grid gap-10 rounded-[var(--radius-panel)] bg-charcoal p-8 text-paper md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-semibold text-aqua">{areas.career.eyebrow}</p>
            <h3 className="mt-3 font-display text-[length:var(--text-step-3)] font-medium leading-[1.05]">{areas.career.title}</h3>
            <p className="mt-5 text-paper/80">{areas.career.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ContactButton intent="career" location="career" variant="light">Consultar por orientación profesional</ContactButton>
              <Link href="/orientacion-profesional" className="link-u inline-flex min-h-11 items-center self-start px-1 text-sm text-paper sm:self-center">
                Más sobre orientación profesional
              </Link>
            </div>
          </div>
          <ul className="self-center">
            {areas.career.items.map((it, i) => (
              <li key={it} className="flex gap-4 border-b border-paper/15 py-4 last:border-0">
                <span className="font-display text-lg text-aqua">{String(i + 1).padStart(2, "0")}</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ONLINE — prioridad comercial
   ========================================================= */
export function Online({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const H = headingLevel === 1 ? "h1" : "h2";
  const req: [typeof Wifi, string][] = [
    [ShieldCheck, online.requirements[0]],
    [Wifi, online.requirements[1]],
    [Headphones, online.requirements[2]],
    [Video, `Sesiones de ${site.session.durationMinutes} minutos por videollamada`],
  ];
  return (
    <section id="online" aria-labelledby="online-title" className="relative overflow-hidden bg-aqua/45 py-20 md:py-28">
      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="label flex items-center gap-2">
              <Globe2 aria-hidden className="size-4" /> Psicólogo online en español
            </p>
            <H id="online-title" className="h2 mt-4">{online.title}</H>
          </div>
          <p className="lead self-end !text-charcoal/80">{online.subtitle}</p>
        </div>

        {/* Recorrido: es una secuencia real, por eso va numerado */}
        <ol className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-panel)] bg-charcoal/10 md:grid-cols-2 lg:grid-cols-4">
          {online.steps.map((s, i) => (
            <li key={s.title} className="bg-paper p-7">
              <span className="font-display text-[2.4rem] leading-none text-sage-deep">{i + 1}</span>
              <h3 className="mt-4 font-display text-[1.45rem] font-semibold leading-tight">{s.title}</h3>
              <p className="mt-3 text-[0.98rem] text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[var(--radius-panel)] bg-charcoal p-8 text-paper md:p-10">
            <h3 className="font-display text-[length:var(--text-step-2)] font-medium">{online.international.title}</h3>
            <ul className="mt-6 space-y-4">
              {online.international.points.map((p) => (
                <li key={p} className="flex gap-3 text-paper/85">
                  <span aria-hidden className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-aqua" /> {p}
                </li>
              ))}
            </ul>
            <p className="mt-7 flex gap-3 border-t border-paper/15 pt-6 text-sm leading-relaxed text-paper/75">
              <ShieldCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-aqua" />
              {online.international.legal}
            </p>
            <div className="mt-8">
              <ContactButton intent="international" variant="light" location="online-international">
                Consultar desde el exterior
              </ContactButton>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 rounded-[var(--radius-panel)] bg-paper p-8 md:p-10">
            <div>
              <h3 className="font-display text-[1.6rem] font-semibold">Qué necesitás</h3>
              <ul className="mt-5 space-y-4 text-ink-soft">
                {req.map(([I, text]) => (
                  <li key={text} className="flex gap-3">
                    <I aria-hidden className="mt-1 size-5 shrink-0 text-sage-deep" strokeWidth={1.6} /> {text}
                  </li>
                ))}
              </ul>
            </div>
            <ContactButton intent="online" location="online">Consultar por terapia online</ContactButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PRESENCIAL
   ========================================================= */
export function Presencial() {
  const { location, hours } = site;
  return (
    <section id="presencial" aria-labelledby="presencial-title" className="py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="presencial-title" className="h2">{presencial.title}</h2>
          <p className="mt-6 max-w-[var(--measure)] text-ink-soft">{presencial.text}</p>
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-sage-deep" />
              <p>
                <span className="sr-only">Dirección: </span>
                <span className="font-semibold">
                  {location.street}, {location.neighborhood}
                </span>
                <br />
                <span className="text-ink-soft">
                  Córdoba Capital, {location.countryName}. {location.reference}.
                </span>
              </p>
            </li>
            <li className="flex gap-4">
              <Clock aria-hidden className="mt-1 size-5 shrink-0 text-sage-deep" />
              <p>
                <span className="sr-only">Horario: </span>
                {hours.label}
              </p>
            </li>
          </ul>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ContactButton intent="presencial" location="presencial">Solicitar turno presencial</ContactButton>
            <a href={location.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <MapPin aria-hidden className="size-4" /> Cómo llegar
              <span className="sr-only"> (abre Google Maps en una pestaña nueva)</span>
            </a>
          </div>
        </div>

        <figure>
          <iframe
            src={location.mapEmbedUrl}
            title={`Mapa: ${location.street}, ${location.neighborhood}, Córdoba`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="aspect-[4/3] w-full rounded-[var(--radius-panel)] border-0 bg-beige"
          />
          <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-ink-soft">
            <span>
              {location.street}, {location.neighborhood}. {location.reference}.
            </span>
            <a href={location.directionsUrl} target="_blank" rel="noopener noreferrer" className="link-static font-semibold text-charcoal">
              Cómo llegar<span className="sr-only"> (abre Google Maps en una pestaña nueva)</span>
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* =========================================================
   MODALIDADES Y COBERTURA
   ========================================================= */
export function Coverage() {
  return (
    <section id="modalidades" aria-labelledby="coverage-title" className="bg-beige/70 py-20 md:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <h2 id="coverage-title" className="h2">{coverage.title}</h2>
        <dl className="grid gap-x-10 sm:grid-cols-2">
          {coverage.items.map((c) => (
            <div key={c.title} className="border-t border-charcoal/15 py-5">
              <dt className="font-display text-[1.5rem] font-semibold">{c.title}</dt>
              <dd className="mt-1 text-ink-soft">{c.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* =========================================================
   FAQ
   ========================================================= */
export function Faq() {
  return (
    <section id="preguntas" aria-labelledby="faq-title" className="py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 id="faq-title" className="h2">Lo que suele preguntarse antes de empezar</h2>
          <p className="mt-6 text-ink-soft">Si tu duda no está acá, escribime y lo conversamos.</p>
          <div className="mt-8">
            <ContactButton location="faq" variant="outline">Hacer una consulta</ContactButton>
          </div>
        </div>
        <div className="faq border-t border-charcoal/15">
          {faq.map((f) => (
            <details key={f.q} className="group border-b border-charcoal/15">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-[1.4rem] font-semibold leading-snug transition-colors hover:text-sage-deep [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus aria-hidden className="faq-icon size-5 shrink-0 text-sage-deep" strokeWidth={1.6} />
              </summary>
              <p className="max-w-[var(--measure)] pr-8 pb-6 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CIERRE — la floración
   ========================================================= */
export function Closing() {
  return (
    <section id="contacto" aria-labelledby="closing-title" className="relative overflow-hidden bg-charcoal pt-16 pb-24 text-paper md:pb-32">
      <BrandTree color="#b7ddd4" ground="#788f80" className="mx-auto h-auto w-44 md:w-52" />
      <div className="container-x relative mt-8 max-w-3xl text-center">
        <p className="text-sm font-semibold text-aqua">{site.brand.triad}</p>
        <h2 id="closing-title" className="display mt-5 text-[length:var(--text-step-3)]">
          {closing.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-display text-[length:var(--text-step-1)] leading-relaxed text-paper/80">{closing.text}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ContactButton location="closing" variant="light">{closing.cta}</ContactButton>
          <ContactButton location="closing-international" intent="international" variant="ghost-light">
            Escribo desde otro país
          </ContactButton>
        </div>
        <p className="mt-12 text-sm text-paper/70">
          {site.person.displayName}. Psicólogo {site.person.license}
        </p>
      </div>
    </section>
  );
}

/* =========================================================
   FOOTER
   ========================================================= */
export function Footer() {
  const year = new Date().getFullYear();
  const { links } = site;
  return (
    <footer className="bg-paper pt-16 pb-28 text-sm md:pb-10">
      <div className="container-x">
        <div className="grid gap-10 border-b border-charcoal/10 pb-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <BrandTree className="h-12 w-16 shrink-0" />
              <div>
                <p className="font-display text-xl font-semibold">{site.person.displayName}</p>
                <p className="text-ink-soft">
                  {site.person.profession}. {site.person.license}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-ink-soft">
              {site.person.degree} ({site.person.university}, {site.person.graduationYear}). {site.person.postgraduate}.
            </p>
          </div>
          <div>
            <p className="font-semibold">Atención</p>
            <ul className="mt-3 space-y-2 text-ink-soft">
              <li>Online, en Argentina y el exterior</li>
              <li>
                Presencial en {site.location.street}, {site.location.neighborhood}, Córdoba
              </li>
              <li>{site.hours.label}</li>
              <li>Particulares y obra social GEA</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Contacto</p>
            <ul className="mt-3 space-y-3">
              <li>
                <ContactButton location="footer" variant="outline" className="!min-h-10 !px-4 !py-2 !text-sm">
                  WhatsApp
                </ContactButton>
              </li>
              {site.email && <li><a className="link-static" href={`mailto:${site.email}`}>{site.email}</a></li>}
              {links.googleBusiness && <li><a className="link-static" href={links.googleBusiness} target="_blank" rel="noopener noreferrer">Perfil de Google</a></li>}
              {links.instagram && <li><a className="link-static" href={links.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>}
              <li><Link className="link-static" href="/terapia-online-en-espanol">Terapia online en español</Link></li>
              <li><Link className="link-static" href="/orientacion-profesional">Orientación profesional</Link></li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 py-8 text-ink-soft md:grid-cols-2">
          <p>
            <strong className="font-semibold text-charcoal">Confidencialidad.</strong> Todo lo conversado en sesión está protegido por el secreto profesional. Por favor, no envíes información clínica por WhatsApp ni por redes.
          </p>
          <p>
            <strong className="font-semibold text-charcoal">Este sitio no es un servicio de emergencias.</strong> Ante una situación de riesgo, acudí a los servicios de emergencia del lugar donde te encontrás (en Argentina: 107 o 911).
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-charcoal/10 pt-6 text-ink-soft md:flex-row md:justify-between">
          <p>© {year} {site.person.displayName}. Todos los derechos reservados.</p>
          <Link href="/privacidad" className="link-static">Política de privacidad</Link>
        </div>

        {/* Crédito de diseño y desarrollo web */}
        <DesignerCredit />
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Check, Clock, Globe2, MapPin, Monitor, ShieldCheck, Video, Wifi, Headphones, Briefcase } from "lucide-react";
import { site, credentialLine } from "@/data/site";
import { hero, about, approach, areas, online, presencial, coverage, faq, closing } from "@/data/content";
import { ContactButton } from "./ContactButton";
import { TreeArt } from "./TreeArt";
import { Logo } from "./Logo";

/* ---------- HERO ---------- */
export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden pt-[4.5rem]">
      {/* forma orgánica de fondo */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 size-[36rem] rounded-[46%_54%_42%_58%/55%_45%_55%_45%] bg-aqua/55 blur-[2px] md:-right-24" />
      <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 size-[26rem] rounded-[58%_42%_50%_50%/45%_55%_45%_55%] bg-beige" />

      <div className="container-x relative grid items-center gap-10 pt-8 pb-14 md:py-20 lg:min-h-[calc(92vh-4.5rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="mt-5 font-display text-[clamp(2.2rem,1.4rem+3.6vw,4.1rem)] leading-[1.06] font-medium tracking-[-0.015em] text-balance">
            {hero.title}
          </h1>
          <p className="lead mt-6 max-w-xl">{hero.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ContactButton location="hero">Solicitar una entrevista</ContactButton>
            <Link
              href="/#enfoque"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-charcoal/80 px-6 py-3 text-[0.95rem] font-medium transition-colors hover:bg-charcoal hover:text-paper"
            >
              Conocer mi enfoque
              <ArrowDown aria-hidden className="size-4" />
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-charcoal/10 pt-6">
            {site.photos.profile && (
              <Image
                src={site.photos.profile}
                alt={`Retrato de ${site.person.displayName}`}
                width={56}
                height={56}
                priority
                className="size-14 rounded-full object-cover ring-2 ring-paper"
              />
            )}
            <div className="text-sm leading-relaxed">
              <p className="font-medium">{credentialLine}</p>
              <p className="text-ink-soft">
                UNC · {site.person.yearsOfExperience} años de experiencia · Posgrado en Psicoanálisis y Salud Mental
              </p>
            </div>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-soft">
            {hero.facts.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <Check aria-hidden className="size-4 text-sage-deep" /> {f}
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <TreeArt animated className="mx-auto h-auto w-full max-w-[22rem]" />
          <figcaption className="mx-auto mt-2 max-w-xs text-center font-serif text-[0.95rem] leading-relaxed text-ink-soft italic">
            “{site.brand.motto}”
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ---------- SOBRE MÍ ---------- */
export function About() {
  return (
    <section id="sobre-mi" aria-labelledby="about-title" className="bg-beige/60 py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="reveal">
          <PhotoSlot src={site.photos.portrait} alt={`${site.person.displayName}, psicólogo, en su consultorio`} />
        </div>
        <div className="reveal">
          <p className="eyebrow">Sobre mí</p>
          <h2 id="about-title" className="h-section mt-4">{about.title}</h2>
          <div className="mt-6 space-y-5 font-serif text-[1.08rem] leading-[1.8] text-ink-soft">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2">
            {about.credentials.map((c) => (
              <div key={c.label} className="bg-paper px-5 py-4">
                <dt className="text-xs tracking-[0.14em] text-sage-deep uppercase">{c.label}</dt>
                <dd className="mt-1 font-medium">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/** Espacio para fotografía real. Sin foto: composición gráfica abstracta (no simula un consultorio). */
function PhotoSlot({ src, alt }: { src: string | null; alt: string }) {
  if (src) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
      </div>
    );
  }
  return (
    <div aria-hidden className="relative flex aspect-[4/5] items-end justify-center overflow-hidden rounded-[2rem] bg-aqua/60">
      <div className="absolute -top-16 -left-10 size-64 rounded-[50%_50%_44%_56%/58%_42%_58%_42%] bg-paper/50" />
      <div className="absolute right-6 bottom-10 size-40 rounded-full bg-beige/80" />
      <TreeArt className="relative h-[88%] w-auto" />
    </div>
  );
}

/* ---------- ENFOQUE ---------- */
export function Approach() {
  return (
    <section id="enfoque" aria-labelledby="approach-title" className="py-20 md:py-28">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Enfoque</p>
          <h2 id="approach-title" className="h-section mt-4">{approach.title}</h2>
          <p className="lead mt-6">{approach.intro}</p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {approach.explainers.map((e) => (
            <div key={e.title} className="reveal border-t border-charcoal/15 pt-6">
              <h3 className="font-display text-xl font-medium">{e.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{e.text}</p>
            </div>
          ))}
        </div>

        <ol className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {approach.pillars.map((p, i) => (
            <li
              key={p.n}
              className={`reveal relative overflow-hidden rounded-3xl p-7 ${
                i === 3 ? "bg-charcoal text-paper" : i === 0 ? "bg-aqua/70" : "bg-beige"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className={`font-display text-sm ${i === 3 ? "text-aqua" : "text-sage-deep"}`}>{p.n}</span>
              <h3 className="mt-6 font-display text-2xl font-medium">{p.title}</h3>
              <p className={`mt-3 leading-relaxed ${i === 3 ? "text-paper/85" : "text-ink-soft"}`}>{p.text}</p>
            </li>
          ))}
        </ol>

        <blockquote className="reveal mx-auto mt-20 max-w-2xl text-center font-serif text-[clamp(1.25rem,1rem+1vw,1.65rem)] leading-snug italic">
          “Para transformar es necesaria una alternativa diferente.”
        </blockquote>
      </div>
    </section>
  );
}

/* ---------- ÁREAS ---------- */
export function Areas() {
  return (
    <section id="areas" aria-labelledby="areas-title" className="bg-paper pb-20 md:pb-28">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Áreas de trabajo</p>
          <h2 id="areas-title" className="h-section mt-4">{areas.title}</h2>
          <p className="lead mt-6">{areas.intro}</p>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
          {areas.items.map((a) => (
            <li key={a.title} className="bg-paper p-7 transition-colors hover:bg-aqua-soft">
              <h3 className="font-display text-xl font-medium">{a.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{a.text}</p>
            </li>
          ))}
          <li className="flex flex-col justify-between gap-6 bg-beige p-7 lg:col-span-2 lg:flex-row lg:items-center">
            <p className="font-serif text-lg leading-relaxed italic">“Un espacio para comprender aquello que nos habita.”</p>
            <ContactButton location="areas" variant="secondary" className="self-start">
              Contame qué te pasa
            </ContactButton>
          </li>
        </ul>

        {/* Psicología laboral, diferenciada */}
        <div id="orientacion" className="reveal mt-10 grid gap-8 rounded-3xl bg-charcoal p-8 text-paper md:grid-cols-[1fr_1fr] md:p-12">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-aqua uppercase">
              <Briefcase aria-hidden className="size-4" /> {areas.career.eyebrow}
            </p>
            <h3 className="mt-4 font-display text-3xl font-medium">{areas.career.title}</h3>
            <p className="mt-4 leading-relaxed text-paper/80">{areas.career.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ContactButton intent="career" location="career" variant="light">
                Consultar por orientación profesional
              </ContactButton>
              <Link href="/orientacion-profesional" className="inline-flex min-h-12 items-center px-2 text-sm underline underline-offset-4 hover:text-aqua">
                Más sobre orientación profesional
              </Link>
            </div>
          </div>
          <ul className="space-y-4 self-center">
            {areas.career.items.map((it) => (
              <li key={it} className="flex gap-3 border-b border-paper/15 pb-4 last:border-0">
                <Check aria-hidden className="mt-1 size-4 shrink-0 text-aqua" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- ONLINE ---------- */
export function Online({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const H = headingLevel === 1 ? "h1" : "h2";
  return (
    <section id="online" aria-labelledby="online-title" className="relative overflow-hidden bg-aqua/45 py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute -right-24 top-10 size-80 rounded-[52%_48%_40%_60%/50%_60%_40%_50%] bg-paper/40" />
      <div className="container-x relative">
        <div className="reveal max-w-3xl">
          <p className="eyebrow flex items-center gap-2">
            <Globe2 aria-hidden className="size-4" /> Psicólogo online en español
          </p>
          <H id="online-title" className="h-section mt-4">{online.title}</H>
          <p className="lead mt-6 !text-charcoal/80">{online.subtitle}</p>
        </div>

        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {online.steps.map((s, i) => (
            <li key={s.title} className="reveal rounded-3xl bg-paper p-7" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="flex size-9 items-center justify-center rounded-full bg-charcoal font-display text-sm text-paper">{i + 1}</span>
              <h3 className="mt-5 font-display text-xl font-medium">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="reveal rounded-3xl bg-charcoal p-8 text-paper md:p-10">
            <h3 className="flex items-center gap-3 font-display text-2xl font-medium">
              <Globe2 aria-hidden className="size-6 text-aqua" /> {online.international.title}
            </h3>
            <ul className="mt-6 space-y-4">
              {online.international.points.map((p) => (
                <li key={p} className="flex gap-3 leading-relaxed text-paper/85">
                  <Check aria-hidden className="mt-1 size-4 shrink-0 text-aqua" /> {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex gap-3 rounded-2xl bg-paper/8 p-4 text-sm leading-relaxed text-paper/75">
              <ShieldCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-aqua" />
              {online.international.legal}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactButton intent="international" variant="light" location="online-international">
                Consultar desde el exterior
              </ContactButton>
            </div>
          </div>

          <div className="reveal flex flex-col justify-between gap-8 rounded-3xl bg-paper p-8 md:p-10">
            <div>
              <h3 className="font-display text-xl font-medium">Qué necesitás</h3>
              <ul className="mt-5 space-y-4 text-ink-soft">
                {[
                  [ShieldCheck, online.requirements[0]],
                  [Wifi, online.requirements[1]],
                  [Headphones, online.requirements[2]],
                ].map(([Icon, text]) => {
                  const I = Icon as typeof Wifi;
                  return (
                    <li key={text as string} className="flex gap-3">
                      <I aria-hidden className="mt-0.5 size-5 shrink-0 text-sage-deep" strokeWidth={1.6} /> {text as string}
                    </li>
                  );
                })}
                <li className="flex gap-3">
                  <Video aria-hidden className="mt-0.5 size-5 shrink-0 text-sage-deep" strokeWidth={1.6} />
                  Sesiones de {site.session.durationMinutes} minutos por videollamada
                </li>
              </ul>
            </div>
            <ContactButton intent="online" location="online">Consultar por terapia online</ContactButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PRESENCIAL ---------- */
export function Presencial() {
  const { location, hours } = site;
  return (
    <section id="presencial" aria-labelledby="presencial-title" className="py-20 md:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <p className="eyebrow">Atención presencial</p>
          <h2 id="presencial-title" className="h-section mt-4">{presencial.title}</h2>
          <p className="lead mt-6">{presencial.text}</p>
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-sage-deep" />
              <div>
                <span className="sr-only">Dirección: </span>
                <p>
                  <span className="font-medium">{location.street}, {location.neighborhood}</span>
                  <br />
                  <span className="text-ink-soft">{location.city} Capital, {location.countryName} · {location.reference}</span>
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock aria-hidden className="mt-1 size-5 shrink-0 text-sage-deep" />
              <p><span className="sr-only">Horario: </span>{hours.label}</p>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ContactButton intent="presencial" location="presencial">Solicitar turno presencial</ContactButton>
            <a
              href={location.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-charcoal/80 px-6 py-3 text-[0.95rem] font-medium transition-colors hover:bg-charcoal hover:text-paper"
            >
              <MapPin aria-hidden className="size-4" /> Ver en Google Maps
              <span className="sr-only"> (abre en una nueva pestaña)</span>
            </a>
          </div>
        </div>

        <div className="reveal">
          {location.mapEmbedUrl ? (
            <iframe
              src={location.mapEmbedUrl}
              title={`Mapa: ${location.street}, ${location.neighborhood}, ${location.city}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full rounded-3xl border-0"
            />
          ) : (
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-beige">
              {/* Plano abstracto: no representa coordenadas reales */}
              <svg aria-hidden viewBox="0 0 400 300" className="absolute inset-0 size-full opacity-60">
                <g stroke="#788f80" strokeWidth="1" fill="none">
                  <path d="M0 80 C 120 70 260 100 400 60" />
                  <path d="M0 190 C 140 210 250 170 400 200" />
                  <path d="M120 0 C 130 110 100 200 140 300" />
                  <path d="M280 0 C 260 120 300 200 270 300" />
                  <path d="M0 250 C 80 240 160 260 220 300" />
                </g>
              </svg>
              <div className="relative flex flex-col items-center gap-3 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-charcoal text-paper">
                  <MapPin aria-hidden className="size-6" />
                </span>
                <p className="font-display text-lg">{location.street}</p>
                <p className="text-sm text-ink-soft">{location.neighborhood} · Córdoba Capital</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- MODALIDADES Y COBERTURA ---------- */
export function Coverage() {
  const icons = [ShieldCheck, Check, Monitor, MapPin];
  return (
    <section id="modalidades" aria-labelledby="coverage-title" className="bg-beige/60 py-20 md:py-24">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Condiciones</p>
          <h2 id="coverage-title" className="h-section mt-4">{coverage.title}</h2>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coverage.items.map((c, i) => {
            const I = icons[i];
            return (
              <li key={c.title} className="reveal rounded-3xl bg-paper p-7">
                <I aria-hidden className="size-6 text-sage-deep" strokeWidth={1.6} />
                <h3 className="mt-5 font-display text-xl font-medium">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{c.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function Faq() {
  return (
    <section id="preguntas" aria-labelledby="faq-title" className="py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="reveal">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 id="faq-title" className="h-section mt-4">Lo que suele preguntarse antes de empezar</h2>
          <p className="lead mt-6">Si tu duda no está acá, podés escribirme y lo conversamos.</p>
          <div className="mt-8">
            <ContactButton location="faq" variant="secondary">Hacer una consulta</ContactButton>
          </div>
        </div>
        <div className="divide-y divide-charcoal/12 border-y border-charcoal/12">
          {faq.map((f) => (
            <details key={f.q} className="group py-1">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-lg font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="relative size-4 shrink-0">
                  <span className="absolute top-1/2 left-0 h-px w-4 bg-charcoal" />
                  <span className="absolute top-0 left-1/2 h-4 w-px bg-charcoal transition-transform duration-300 group-open:scale-y-0" />
                </span>
              </summary>
              <p className="pr-10 pb-6 leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CIERRE ---------- */
export function Closing() {
  return (
    <section id="contacto" aria-labelledby="closing-title" className="relative overflow-hidden bg-charcoal py-24 text-paper md:py-32">
      <TreeArt className="pointer-events-none absolute -right-16 -bottom-24 h-[130%] w-auto opacity-[0.12] invert" />
      <div className="container-x relative max-w-3xl text-center">
        <p className="text-xs font-semibold tracking-[0.18em] text-aqua uppercase">{site.brand.triad}</p>
        <h2 id="closing-title" className="mt-6 font-display text-[clamp(2rem,1.3rem+3vw,3.4rem)] leading-[1.1] font-medium text-balance">
          {closing.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-serif text-lg leading-relaxed text-paper/80">{closing.text}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ContactButton location="closing" variant="light">{closing.cta}</ContactButton>
          <ContactButton location="closing-international" intent="international" variant="secondary" className="!border-paper/50 !text-paper hover:!bg-paper hover:!text-charcoal">
            Escribo desde otro país
          </ContactButton>
        </div>
        <p className="mt-10 text-sm text-paper/70">
          {site.person.displayName} · Psicólogo {site.person.license}
        </p>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
export function Footer() {
  const year = new Date().getFullYear();
  const { links } = site;
  return (
    <footer className="bg-paper pt-16 pb-10 text-sm">
      <div className="container-x">
        <div className="grid gap-10 border-b border-charcoal/10 pb-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Logo className="size-10 text-charcoal" />
              <div>
                <p className="font-display text-lg">{site.person.displayName}</p>
                <p className="text-ink-soft">{site.person.profession} · {site.person.license}</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm font-serif leading-relaxed text-ink-soft italic">“{site.brand.motto}”</p>
          </div>
          <div>
            <p className="font-semibold">Atención</p>
            <ul className="mt-3 space-y-2 text-ink-soft">
              <li>Online · Argentina y exterior</li>
              <li>Presencial · {site.location.street}, {site.location.neighborhood}, Córdoba</li>
              <li>{site.hours.label}</li>
              <li>Particulares y obra social GEA</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Contacto</p>
            <ul className="mt-3 space-y-2">
              <li><ContactButton location="footer" variant="secondary" className="!min-h-10 !px-4 !py-2 !text-sm">WhatsApp</ContactButton></li>
              {site.email && <li><a className="underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a></li>}
              {links.googleBusiness && <li><a className="underline underline-offset-4" href={links.googleBusiness} target="_blank" rel="noopener noreferrer">Perfil de Google</a></li>}
              {links.instagram && <li><a className="underline underline-offset-4" href={links.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>}
              <li><Link className="underline underline-offset-4" href="/terapia-online-en-espanol">Terapia online en español</Link></li>
              <li><Link className="underline underline-offset-4" href="/orientacion-profesional">Orientación profesional</Link></li>
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
          <Link href="/privacidad" className="underline underline-offset-4">Política de privacidad</Link>
        </div>
      </div>
    </footer>
  );
}

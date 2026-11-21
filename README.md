# Lic. Nicolás Espíndola · Psicólogo MP 11138

> "Lo que el árbol tiene de florido vive de lo que tiene sepultado".

Landing page profesional: psicoterapia psicoanalítica e integrativa para adultos, presencial en Córdoba (barrio Juniors) y online en español.

**Stack:** Next.js 16 (App Router, salida estática) · React 19 · TypeScript · Tailwind CSS 4 · Lucide. Sin otras dependencias.

## Estructura
```
app/                     rutas: /, /terapia-online-en-espanol, /orientacion-profesional, /privacidad
                         + sitemap.xml, robots.txt, opengraph-image, icon.svg
components/              Header, Sections (todas las secciones), ContactButton, FloatingWhatsApp,
                         TreeArt (ilustración SVG), Logo, PageIntro, JsonLd, Analytics, Reveal
data/site.ts             ⭐ CONFIGURACIÓN CENTRAL (datos, WhatsApp, tarifas, fotos, enlaces)
data/content.ts          todos los textos de la web
lib/whatsapp.ts          enlaces y mensajes precargados por intención
lib/analytics.ts         evento de contacto (sin datos sensibles)
lib/schema.ts            datos estructurados JSON-LD
public/images/           fotos (hoy: avatar provisorio)
docs/                    estrategia, SEO, WhatsApp, blog, plan 90 días, cobros, analítica
```

## Cómo cambiar datos (sin tocar código)
Todo está en `data/site.ts`. Un valor `null` significa "pendiente" y **no se muestra**.
- **WhatsApp:** `whatsapp.number` (formato `549` + área + número) y `whatsapp.enabled`.
- **Tarifa internacional:** `fees.international.amount` / `confirmed`.
- **Fotos:** copiar el archivo a `public/images/` y completar `photos.portrait` / `photos.profile`.
- **Google Business, Instagram, email:** `links.*`, `email`.
- **Mapa:** pegar la URL de "Insertar mapa" de Google Maps en `location.mapEmbedUrl`.

## Instalación local
Requisitos: Node.js 20.9 o superior.

```bash
npm install
```

```bash
cp .env.example .env.local
```

```bash
npm run dev
```

Abrir http://localhost:3000. Para verificar el build de producción:

```bash
npm run build && npm start
```

## Despliegue en Vercel (paso a paso)
1. **Repositorio:** el código ya está en GitHub (`licbongiorno/licnicoe`). Fusionar la rama de trabajo en `main` (o elegir la rama en Vercel).
2. **Vercel:** vercel.com → *Add New → Project* → importar el repositorio. Framework: Next.js (detectado). No cambiar comandos.
3. **Variables de entorno** (*Settings → Environment Variables*):
   - `NEXT_PUBLIC_SITE_URL` = `https://www.tudominio.com.ar` (obligatoria para canonical, sitemap y Open Graph)
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` o `NEXT_PUBLIC_GA_ID` (opcional)
   - `NEXT_PUBLIC_GSC_VERIFICATION` (opcional, código de Search Console)
4. **Deploy.** Cada push a `main` vuelve a publicar automáticamente.
5. **Dominio:** comprar en NIC Argentina (.com.ar) u otro registrador → en Vercel *Settings → Domains* agregar `tudominio.com.ar` y `www.tudominio.com.ar` → cargar en el registrador los DNS que indica Vercel (registro A `76.76.21.21` para el raíz y CNAME `cname.vercel-dns.com` para `www`, o los valores que muestre Vercel en ese momento). HTTPS se activa solo.
6. Actualizar `NEXT_PUBLIC_SITE_URL` con el dominio final y redeploy.

## Search Console
1. search.google.com/search-console → *Agregar propiedad* → tipo **Dominio** (verificación por DNS TXT en el registrador) o **Prefijo de URL** (usar `NEXT_PUBLIC_GSC_VERIFICATION`).
2. *Sitemaps* → enviar `sitemap.xml`.
3. *Inspección de URL* → solicitar indexación de `/` y `/terapia-online-en-espanol`.

## Google Analytics / Plausible
Ver `docs/07-analitica-y-metricas.md`. El evento de conversión es `contact_click`.

## WhatsApp
Ver `docs/02-whatsapp-business.md`. Si se cambia de número, solo editar `data/site.ts`.

## Checklist de publicación
- [ ] Confirmar número de WhatsApp (hoy: +54 9 351 595 9914) y probar un botón desde el celular
- [ ] Dominio comprado y conectado; `NEXT_PUBLIC_SITE_URL` actualizado
- [ ] Fotos profesionales reales cargadas (`site.photos`)
- [ ] Tarifa internacional confirmada o texto de "referencia" revisado
- [ ] Revisar política de privacidad con asesoría legal
- [ ] Verificar denominación del colegio en `person.licenseBody`
- [ ] Consulta al Colegio sobre atención a residentes en el exterior (doc 06)
- [ ] Perfil de MundoPsicólogos corregido (doc 01)
- [ ] Google Business actualizado y enlazado (`links.googleBusiness`)
- [ ] Search Console verificado y sitemap enviado
- [ ] Analítica activa y evento `contact_click` visible
- [ ] Probar Open Graph pegando la URL en WhatsApp
- [ ] Lighthouse móvil sobre el dominio final

## Checklist de mantenimiento
**Mensual:** revisar métricas (doc 07) · publicar 1–2 artículos · 1 publicación en Google Business · revisar que horarios y datos coincidan en todos los perfiles.
**Trimestral:** `npm outdated` y actualizar dependencias menores, `npm run build`, revisar Lighthouse · revisar textos de CTA según conversiones · revisar condiciones de proveedores de pago y regulación.
**Anual:** renovar dominio · actualizar años de experiencia (`person.yearsOfExperience`) · revisar política de privacidad.

## Validación realizada
- `npm run build`: OK, 10 rutas estáticas, sin errores de TypeScript.
- Lighthouse 12 (móvil, servidor local de producción): Performance 92 · Accesibilidad 100 · Buenas prácticas 100 · SEO 100. Volver a medir en el dominio final.
- Sin desbordamiento horizontal a 390 px; menú móvil accesible (Escape, `aria-expanded`); sin errores de consola.

## Documentación estratégica
1. `docs/01-auditoria-y-estrategia.md` — auditoría, CRO internacional, sistema de marca
2. `docs/02-whatsapp-business.md`
3. `docs/03-seo-local-internacional-geo.md`
4. `docs/04-blog-estrategia-contenidos.md`
5. `docs/05-plan-90-dias-y-publicidad.md`
6. `docs/06-regulacion-y-cobros-internacionales.md`
7. `docs/07-analitica-y-metricas.md`

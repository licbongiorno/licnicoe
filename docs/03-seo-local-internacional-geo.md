# 03 · SEO técnico, local, internacional y GEO

## SEO técnico implementado
| Elemento | Dónde |
|---|---|
| Title y description únicos por página | `app/layout.tsx` y `metadata` de cada página |
| Canonical | `alternates.canonical` en cada página |
| Sitemap XML | `app/sitemap.ts` → `/sitemap.xml` |
| Robots | `app/robots.ts` → `/robots.txt` |
| Open Graph + Twitter Card | layout + `public/images/og.png` (1200×630, con la foto real) |
| Jerarquía H1/H2/H3 | 1 H1 por página; secciones con H2; tarjetas con H3 |
| JSON-LD | `Person`, `ProfessionalService`, `WebSite` (todas las páginas), `FAQPage` (inicio y online), `BreadcrumbList` (páginas internas) |
| Imágenes | `next/image` (AVIF/WebP, lazy, tamaños responsivos); ilustraciones en SVG |
| Fuentes | auto-hospedadas con `next/font` |
| `lang="es-AR"` | layout |
| Verificación Search Console | variable `NEXT_PUBLIC_GSC_VERIFICATION` |

No se usa `MedicalClinic`, `Physician` ni `AggregateRating` (no corresponden o no hay datos verificados).

## Mapa de palabras clave → página
> Los volúmenes **no** están medidos. Validar con Google Keyword Planner (gratis con cuenta de Ads) y Search Console a los 30–60 días.

| Página | Intención | Palabras clave objetivo |
|---|---|---|
| `/` | Local + marca | psicólogo Córdoba Capital, psicólogo barrio Juniors, psicólogo clínico Córdoba, psicoterapia adultos Córdoba, psicólogo presencial Córdoba, psicólogo GEA Córdoba, psicoanalista Córdoba |
| `/terapia-online-en-espanol` | Internacional | psicólogo online en español, psicoterapia online en español, psicólogo argentino online, psicólogo para argentinos en el exterior, terapia online para hispanohablantes, psicólogo online Argentina |
| `/orientacion-profesional` | Laboral | orientación profesional adultos Córdoba, orientación vocacional adultos online, psicólogo laboral Córdoba, desarrollo de carrera psicólogo |

Decisión: **no** crear páginas por país ("psicólogo online en Madrid") mientras no se haya verificado la viabilidad regulatoria en ese país; serían páginas artificiales que prometen algo no confirmado.

## Google Business Profile: mejoras sugeridas
(No crear un segundo perfil. Editar el existente.)
1. **Nombre:** exactamente el nombre real ("Nicolás Espíndola" o "Lic. Nicolás Espíndola – Psicólogo"). No agregar palabras clave al nombre (viola las directrices de Google).
2. **Categoría principal:** Psicólogo. Secundarias posibles: Psicoterapeuta, Servicio de orientación profesional (si existe en el listado).
3. **Descripción (750 car.):**
   > Psicólogo clínico y laboral, matrícula MP 11138. Licenciado en Psicología por la Universidad Nacional de Córdoba (2011), con posgrado en Psicoanálisis y Salud Mental y 15 años de experiencia. Psicoterapia psicoanalítica e integrativa para adultos: un espacio de análisis y transformación personal. Atención presencial en barrio Juniors, a 10 minutos del centro de Córdoba, y online en español para personas en Argentina y otros países. También orientación y desarrollo profesional. Pacientes particulares y afiliados a GEA. Sesiones de 40 minutos, de lunes a viernes de 8 a 20 h.
4. **Servicios:** Psicoterapia para adultos · Psicoterapia online · Orientación y desarrollo profesional · Primera entrevista.
5. **Atributos:** "Citas online", "Solo con cita previa".
6. **Horario:** L–V 8:00–20:00 (igual que la web).
7. **Dirección:** Posadas 331, Juniors, Córdoba. Verificar que el pin esté en la puerta correcta. La web ya incrusta un mapa por dirección; si se quiere mostrar exactamente la ficha de Google Business, reemplazar `site.location.mapEmbedUrl` por la URL de "Compartir → Insertar un mapa" del perfil.
8. **Sitio web:** https://www.espaciodeanalisis.com.ar. **Botón de chat/WhatsApp** con el mismo número.
9. **Fotos reales:** fachada, sala de espera, consultorio (sin pacientes), retrato. Nada de stock.
10. **Reseñas:** se pueden pedir, pero con cuidado ético: nunca como condición, sin incentivos, sin responder revelando que la persona es paciente (secreto profesional). Considerar no pedirlas activamente a pacientes en tratamiento; revisar el código de ética del Colegio.
11. **Publicaciones:** 1 por mes (artículo del blog, modalidad online, horarios).
12. Pegar el enlace "Compartir perfil" en `site.links.googleBusiness` para que aparezca en el footer y en `sameAs`.

## Consistencia NAP y perfiles externos
Nombre, dirección, teléfono, matrícula y **orientación** deben ser idénticos en: web · Google Business · MundoPsicólogos · Doctoralia/TopDoctors (si existen) · WhatsApp Business · redes. Corregir MundoPsicólogos (ver doc 01).

## GEO (optimización para motores con IA)
Lo que ya hace la web para que asistentes de IA describan bien al profesional:
- Hechos en frases simples y repetidas de forma coherente: "Lic. Nicolás Espíndola, psicólogo MP 11138, UNC 2011, posgrado en Psicoanálisis y Salud Mental, 15 años, adultos, psicoanalítica e integrativa, Posadas 331 barrio Juniors Córdoba, online en español".
- Credenciales en una lista de definiciones (`<dl>`) y en JSON-LD (`hasCredential`, `alumniOf`, `knowsLanguage`).
- FAQ en lenguaje natural con marcado `FAQPage`.
- `sameAs` conecta web ↔ Google Business ↔ MundoPsicólogos (completar enlaces).

Pendiente: unificar perfiles externos (la principal fuente de contradicción hoy).

## Posibles próximos pasos de contenido
- Publicar el blog (doc 04) en `/blog/[slug]` con `Article` + `BreadcrumbList`. Empezar por los artículos 9 (online), 1 (empezar terapia) y 4 (cuándo consultar).

## Indexación en motores con IA (complemento GEO)
- **Google Search Console:** enviar el sitemap (AI Overviews y Gemini usan el índice de Google).
- **Bing Webmaster Tools:** verificar el sitio e importar desde Search Console (ChatGPT con búsqueda y Copilot usan el índice de Bing).
- **Brave Search:** enviar la URL en search.brave.com/submit-url (Claude usa Brave cuando busca).

# 05 · Plan de captación de 90 días y publicidad digital

> No se prometen pacientes ni ingresos. Los escenarios usan supuestos explícitos que deben reemplazarse por datos reales a partir del día 30.

## Días 1–30 · Fundamentos
| Tarea | Responsable | Hecho cuando… |
|---|---|---|
| Comprar dominio (.com.ar en NIC Argentina y/o .com) | Nicolás | Dominio activo |
| Publicar en Vercel y conectar dominio (README) | Técnico | HTTPS OK |
| WhatsApp Business (doc 02) | Nicolás | Bienvenida + ausencia + respuestas rápidas |
| Corregir MundoPsicólogos (doc 01) | Nicolás | Orientación, población y especialidades coherentes |
| Optimizar Google Business (doc 03) | Nicolás | Descripción, servicios, fotos, web |
| Sesión de fotos y carga en la web | Nicolás + fotógrafo/a | `site.photos` completo |
| Search Console + sitemap | Técnico | Sitemap "correcto" |
| Analítica (doc 07) | Técnico | Evento `contact_click` visible |
| Planilla de consultas (doc 07) | Nicolás | Registro desde el día 1 |
| Definir tarifa internacional y medio de cobro (doc 06) | Nicolás + contador/a | `fees.international.confirmed = true` |

## Días 31–60 · Posicionamiento
- Publicar 2 artículos (9 y 1) y difundirlos en Google Business.
- Redes: 2 publicaciones semanales (citas de marca, preguntas frecuentes, "cómo es la terapia online"). Sin testimonios ni casos.
- Keyword Planner: medir volumen real y CPC de las palabras del doc 03 en Argentina, España, EE.UU., Italia, Canadá, Alemania.
- **Prueba de Google Ads** (ver abajo), presupuesto acotado.
- Medir: consultas por canal y por país.

## Días 61–90 · Optimización
- Analizar países de procedencia (agregado) y consultas por país.
- Calcular costo por consulta y por paciente nuevo por canal.
- Ajustar textos de CTA/anuncios según qué intención convierte más.
- Identificar páginas con mejor tasa de clic en contacto.
- Decidir si se escala, se mantiene o se pausa la captación internacional (ver rentabilidad).

## Escenarios (90 días) — supuestos ilustrativos
Supuestos comunes: presupuesto Ads USD 150/mes durante 60 días (USD 300 total); tasa consulta → primera entrevista 40%; entrevista → paciente 50%; permanencia media 10 sesiones a USD 40 (internacional).

| | Conservador | Intermedio | Optimista |
|---|---|---|---|
| CPC promedio supuesto | USD 1,20 | USD 0,80 | USD 0,50 |
| Clics pagos (USD 300) | 250 | 375 | 600 |
| Tasa clic → consulta WhatsApp | 3% | 5% | 7% |
| Consultas pagas | ~7 | ~19 | ~42 |
| Consultas orgánicas/GBP | 3 | 8 | 15 |
| Pacientes nuevos (×0,4×0,5) | ~2 | ~5 | ~11 |
| Costo por paciente (solo Ads) | ~USD 150+ | ~USD 60–80 | ~USD 30–40 |
| Ingreso potencial (×10×40) | ~USD 800 | ~USD 2.000 | ~USD 4.400 |

Lectura: si el costo por paciente supera ~USD 100 (2,5 sesiones), revisar segmentación y mensajes antes de aumentar presupuesto. **Todos los números son hipótesis**; reemplazar por los reales al día 60.

## Google Ads (prioridad)
Campaña de Búsqueda, sin Display ni remarketing.

| Grupo | Palabras (concordancia frase/exacta) | URL final | Mensaje |
|---|---|---|---|
| 1. Psicólogo online en español | "psicólogo online en español", "psicólogo argentino online", "terapia online en español" | `/terapia-online-en-espanol` | Psicoterapia online en español · Lic. MP 11138 · 15 años de experiencia · Sesiones de 40 min |
| 2. Psicólogo en Córdoba | "psicólogo Córdoba", "psicólogo barrio Juniors", "psicólogo clínico Córdoba" | `/` | Consultorio en barrio Juniors · Particulares y GEA · L a V 8–20 |
| 3. Psicoterapia para adultos | "psicoterapia adultos", "psicoanalista Córdoba" | `/#enfoque` | Psicoanalítica e integrativa · Un espacio de análisis y transformación personal |
| 4. Orientación profesional | "orientación profesional adultos", "orientación vocacional adultos" | `/orientacion-profesional` | Pensar tu recorrido laboral · Presencial u online |

- **Segmentación geográfica:** grupo 1 por país (España, EE.UU., Italia primero) **solo donde se haya revisado la viabilidad regulatoria** (doc 06); grupos 2–4 Córdoba ciudad + radio.
- **Negativas:** gratis, gratuito, empleo, trabajo de psicólogo, carrera de psicología, curso, test, psiquiatra, PDF, infantil, niños.
- **Conversión:** clic en WhatsApp (`contact_click`) importado desde GA4.
- **Políticas:** Google restringe ciertos anuncios de salud; los servicios de psicoterapia en general se permiten, pero los textos no deben prometer resultados ni apuntar a condiciones de salud del usuario ("¿Tenés depresión?"). Las audiencias personalizadas basadas en salud no están permitidas.
- **Volumen y CPC:** desconocidos hasta medir con Keyword Planner; no se afirma ningún valor.

## Meta Ads (secundario, opcional desde día 60)
Solo alcance/marca con contenido educativo (artículos). Sin segmentar por intereses de salud mental, sin remarketing, sin píxel en la web (riesgo de privacidad). Medir con UTMs.

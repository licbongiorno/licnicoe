# 07 · Analítica respetuosa de la privacidad

## Qué está implementado
- `lib/analytics.ts → trackEvent()` envía **un único tipo de evento**: `contact_click` con tres propiedades no sensibles:
  - `channel`: `whatsapp`
  - `intent`: `general` · `online` · `international` · `career` · `presencial`
  - `location`: sección del clic (`hero`, `header`, `online`, `faq`, `closing`, `floating`, …)
- Nunca se envía el texto del mensaje, el número de la persona ni datos de salud.
- Los scripts **solo se cargan** si existe la variable de entorno:
  - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` → Plausible (sin cookies, pago, el más respetuoso).
  - `NEXT_PUBLIC_GA_ID` → Google Analytics 4, con `allow_google_signals: false` y sin personalización de anuncios.
- Recomendación: **Plausible** o Vercel Web Analytics (sin cookies). Usar GA4 solo si se va a hacer Google Ads y se necesita importar conversiones.

## Configuración GA4 (si se usa)
1. analytics.google.com → crear propiedad "Nicolás Espíndola – Web", zona horaria Argentina, moneda USD.
2. Flujo de datos web → copiar el ID `G-XXXX` → variable `NEXT_PUBLIC_GA_ID` en Vercel → redeploy.
3. Admin → Eventos → marcar `contact_click` como **evento clave** (conversión).
4. Admin → Configuración de datos → retención 2 meses; desactivar Google Signals.
5. Dimensiones personalizadas (ámbito evento): `intent`, `location`.
6. Vincular con Search Console y (si corresponde) Google Ads.
7. UTMs en todos los enlaces externos: `?utm_source=instagram&utm_medium=bio&utm_campaign=perfil`.

## Planilla de consultas (fuera de la web, sin datos clínicos)
Columnas: fecha · canal de llegada (Google, GBP, Ads, MundoPsicólogos, recomendación, redes) · país · modalidad · ¿primera entrevista? (sí/no) · ¿inició proceso? (sí/no) · sesiones acumuladas. **Sin nombre completo ni motivo de consulta.**

## Dashboard sugerido (mensual)
| # | Indicador | Fuente | Cálculo |
|---|---|---|---|
| 1 | Visitas orgánicas | GA4/Plausible + Search Console | Sesiones con medio `organic` |
| 2 | Visitas internacionales | GA4/Plausible | Sesiones fuera de AR (agregado por país) |
| 3 | Clics en contacto | `contact_click` | Total y por `intent` / `location` |
| 4 | Tasa de conversión web | — | Clics en contacto / visitas |
| 5 | Consultas efectivas | Planilla | Conversaciones iniciadas en WhatsApp |
| 6 | Pacientes nuevos | Planilla | Iniciaron proceso |
| 7 | Costo de adquisición | Ads + planilla | Inversión / pacientes nuevos por canal |
| 8 | Ingresos atribuibles por canal | Planilla | Sesiones × honorario por canal |

Revisar el día 30, 60 y 90 (doc 05).

# 09 · Skills, copywriting y auditoría final

## 1. Auditoría de skills
Búsqueda con `find-skills` (`npx skills find …`) y criterio de selección: fuente oficial o más de 70K instalaciones, sin redundancias. Todas son instrucciones en Markdown (sin scripts ejecutables); se revisaron antes de usarlas.

| Skill | Fuente | Para qué se usó |
|---|---|---|
| `frontend-design` | anthropics/skills (1,1 M) | Dirección de arte, tipografía, detectar patrones de «plantilla generada» |
| `web-design-guidelines` | vercel-labs/agent-skills (889 K) | Revisión de UI: foco, animación, tipografía, táctil |
| `accessibility` | addyosmani/web-quality-skills (73 K) | WCAG 2.2 y flujo de auditoría con Lighthouse |
| `performance` | addyosmani/web-quality-skills | Presupuestos y medición antes/después |
| `seo-audit` | coreyhaines31/marketingskills (262 K) | SEO técnico, local e internacional |
| `ai-seo` | coreyhaines31/marketingskills (171 K) | GEO: estructura citable, `llms.txt`, índices de Bing/Brave |
| `copywriting` | coreyhaines31/marketingskills (263 K) | Diagnóstico de copy, lista de «tics de IA» |

**No instaladas:** skills de animación SVG y de logos (menos de 10 K instalaciones, autores poco conocidos). Ese trabajo se hizo con SVG y CSS propios.

## 2. Qué cambió por cada skill
- **frontend-design**: se quitaron las etiquetas en MAYÚSCULAS sobre cada título, el «fade-up» en todas las secciones y las grillas de tarjetas idénticas. El movimiento se concentró en tres momentos. Se pasó de tres familias tipográficas a dos (Cormorant + Manrope), con radios jerárquicos. La numeración se dejó solo donde hay secuencia real (pilares 01–04, pedido explícitamente en el brief, y los pasos de la terapia online).
- **web-design-guidelines**: `touch-action: manipulation`, color de resaltado táctil, `overscroll-behavior: contain` en el menú, transiciones con propiedades explícitas (nunca `all`), `text-wrap: balance/pretty`, `aria-current` en la navegación.
- **copywriting**: se eliminó la estructura «no es X, es Y» del enfoque («La terapia no es un lugar donde alguien te dice qué hacer…») y de la lectura de la frase. No se agregaron cifras ni testimonios no verificables.
- **ai-seo**: `public/llms.txt` con la ficha profesional; recomendación de verificar el sitio en **Bing Webmaster Tools** (alimenta ChatGPT/Copilot) y enviarlo a **Brave Search** (search.brave.com/submit-url), además de Search Console. Las respuestas de las FAQ se escribieron para leerse solas.
- **seo-audit**: sin `hreflang` (un solo idioma y una sola URL por contenido); canonical propio en cada página; `/marca` con `noindex`.

## 3. Variantes de titulares (elegido en negrita)
**Hero**
1. **«Hay cosas que necesitan ser comprendidas antes de poder transformarse»** (del brief; ya condensa el concepto)
2. «Comprender lo que te pasa es el primer movimiento»
3. «Un lugar para pensar lo que todavía no tiene palabras»

**Psicoterapia online**
1. **«Un espacio terapéutico, estés donde estés»**
2. «Terapia en español, a la distancia de una videollamada»
3. «Tu idioma, tu historia, desde cualquier lugar»

**Cierre**
1. **«Toda transformación comienza con una pregunta»**
2. «No hace falta tener las respuestas para empezar»
3. «El primer paso puede ser una pregunta»

**Lectura de la frase** (texto nuevo, sección editorial)
> En el árbol, las raíces sostienen. En una vida, ese lugar lo ocupan la historia, lo vivido y aquello que todavía no encontró palabras. Lo que florece se alimenta de ahí. Por eso el trabajo empieza abajo, comprendiendo, y desde esa comprensión se abren otras posibilidades.

## 4. Recorrido de conversión
VISITA (hero: quién, qué, cómo contactar) → CONFIANZA (firma con matrícula, sobre mí con credenciales) → COMPRENSIÓN (frase, enfoque, áreas) → CONSULTA (online con pasos y bloque internacional; presencial; condiciones; FAQ) → ENTREVISTA (13 botones de WhatsApp con mensaje según intención). Sin formularios: no se recolectan datos clínicos.

## 5. Auditoría final por perfiles (y qué se corrigió)
| Perfil | Hallazgo | Acción |
|---|---|---|
| Director creativo | Primera versión del isotipo leída como figura humana | Rediseño asimétrico con raíces dominantes |
| Director creativo | La frase aparecía en hero, menú y footer | Se quitó del footer; queda en hero (integrada al árbol), sección editorial y menú móvil |
| UX/UI | En móvil, las raíces de «Sobre mí» empujaban el texto hacia abajo | Sin foto, las raíces pasan debajo del texto en móvil |
| UX/UI | El menú no mostraba la sección activa | Indicador por scroll (`aria-current`) en escritorio y móvil |
| Accesibilidad | La frase animada podía quedar invisible sin JS | `<noscript>` y reducción de movimiento la muestran siempre; el texto real vive en un `h2` accesible |
| SEO | Faltaba logo en los datos estructurados | `logo` e `image` en `ProfessionalService` |
| GEO | Faltaba una ficha legible por IA | `llms.txt` |
| Paciente nuevo | «¿Qué hago ahora?» | CTA en hero, áreas, online, presencial, FAQ y cierre |
| Paciente internacional | Precio, zona horaria, legalidad | Referencia USD 40 «a confirmar», GMT-3 en los pasos, aviso regulatorio honesto |
| Colega profesional | Seriedad | Matrícula visible, sin promesas, sin testimonios, sin títulos no confirmados |

## 6. Pruebas ejecutadas
- `npm run build` + `tsc --noEmit`: sin errores; 11 rutas estáticas.
- Lighthouse 12 (móvil simulado, servidor local de producción): **Inicio 95 / 100 / 100 / 100**, **Terapia online 93 / 100 / 100 / 100** (Performance / Accesibilidad / Buenas prácticas / SEO). LCP 2,9 s y CLS 0 en esa simulación. Hay que volver a medir en el dominio real.
- Responsive a 360, 390, 430, 768, 1024, 1440 y 1920 px: sin scroll horizontal y sin errores de consola.
- Playwright: el menú móvil abre, navega, se cierra y restaura el scroll; la sección activa se marca; la FAQ se despliega; el primer Tab lleva al enlace «Saltar al contenido»; con movimiento reducido todo queda visible; sin JS la frase es visible y hay 13 enlaces de WhatsApp; todas las rutas devuelven 200 (y 404 para una ruta inexistente); el JSON-LD es válido (Person, ProfessionalService, WebSite y FAQPage).

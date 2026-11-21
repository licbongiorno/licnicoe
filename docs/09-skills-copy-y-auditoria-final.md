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
| `schema` | coreyhaines31/marketingskills (56 K) | Datos estructurados: tipos admitidos por Google y validación |

**No instaladas:** skills de SEO local y de Google Business (duplican las guías de SEO local que ya trae `seo-audit`, o tienen menos de 300 instalaciones), skills de animación SVG y de logos (menos de 10 K instalaciones, autores poco conocidos). Ese trabajo se hizo con SVG y CSS propios.

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

## 7. Tercera iteración: foto, árbol del cliente, introducción, mapa, SEO y GEO
- **Foto real** en «Sobre mí», en el avatar del hero, en los datos estructurados (`Person.image` con descripción) y en la imagen para compartir (Open Graph).
- **Árbol del cliente** vectorizado como isotipo, con introducción animada y armado del hero (ver doc 08).
- **Mapa** de Google Maps incrustado (carga diferida) y botón **«Cómo llegar»** con indicaciones de ruta hasta Posadas 331. La política de privacidad menciona el mapa.
- **Datos estructurados** (según la skill `schema`): `ProfessionalService` (subtipo de negocio local, el que corresponde; no existe un tipo «psicólogo» en Schema.org) con `logo` en PNG de 512 px, `image`, `hasMap`, `slogan`, `serviceType` y `audience`; `Person` con `workLocation` e imagen. **FAQPage:** desde el 7 de mayo de 2026 Google ya no muestra resultados enriquecidos de FAQ. Se mantiene solo como marcado semántico de preguntas visibles, sin esperar ese formato en Google.
- **GEO:** `llms.txt` con el enlace «Cómo llegar»; la ficha profesional queda igual en la web, el JSON-LD y `llms.txt`.

### Pruebas (tercera iteración)
- Build OK (12 rutas). Lighthouse móvil con la introducción activa: inicio **94–98 / 100 / 100 / 100**, terapia online **97 / 100 / 100 / 100**. El LCP es el título del hero (2,4–3,1 s en la simulación), porque el título se pinta debajo de la introducción. CLS 0.
- Playwright: la introducción completa la secuencia y se oculta, no se repite en la misma sesión y se puede saltar; con movimiento reducido no aparece y el árbol queda completo; sin JS la página es usable (13 enlaces de WhatsApp). Menú, sección activa, FAQ y teclado OK. Rutas (sprite, `llms.txt`, íconos, `/marca`) devuelven 200. JSON-LD válido.

## 8. Cuarta iteración
- **Raíces unificadas:** las raíces de «Sobre mí» y de la sección de la frase ahora son las mismas del árbol del logo (`BrandRoots`, desde el sprite), en lugar de trazos dibujados a línea. En la frase, las raíces bajan desde la línea de suelo al entrar en pantalla, y «vive de lo que tiene sepultado» queda debajo de ellas.
- **Crédito de diseño:** píldora «Diseño y desarrollo web · Lic. Nicolás Bongiorno» en el pie, con el mismo estilo que las demás webs del estudio, que abre WhatsApp al 351 657-5261 con un mensaje precargado. También `<meta name="designer">`, `creator` en los metadatos y en `WebSite` (JSON-LD). Los clics se miden como `designer_credit_click`.
- **Pruebas:** Lighthouse móvil 93 / 100 / 100 / 100; responsive de 360 a 1920 px sin desborde; intro, menú, FAQ, movimiento reducido, sin JS y rutas OK.

## 9. Quinta iteración: un solo árbol en toda la web
- Se eliminaron todos los dibujos hechos a línea (ramitas de los pilares, brotes de las áreas, círculos de la floración y raíces dibujadas), porque no coincidían con el logo.
- **Pilares:** el mismo árbol del logo en 4 etapas de crecimiento (`TreeStage`).
- **Áreas:** 7 hojas reales del árbol, elegidas entre las más limpias del calcado (`LogoLeaf`, generadas desde `scripts/tree_to_ts.py`).
- **Cierre:** el árbol del logo en verde agua.
- Lighthouse móvil: 96 / 100 / 100 / 100; responsive y pruebas de interacción OK.

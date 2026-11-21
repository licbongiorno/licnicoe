# 08 · Identidad visual y design system

Versión visual navegable: **`/marca`** (no indexada). Archivos en `public/brand/`. Generador: `scripts/brand.py`.

## Concepto
**El árbol como representación de la subjetividad.** Raíces = historia, inconsciente y memoria; tronco = identidad y continuidad; ramas = vínculos, decisiones y caminos; flores = transformación y nuevas perspectivas. Las raíces no son lo negativo: sostienen y dan sentido a lo que florece. La frase *«Lo que el árbol tiene de florido vive de lo que tiene sepultado»* es el eje poético. No se atribuye a ningún autor.

## Logotipo: tres rutas
| Ruta | Idea | Evaluación |
|---|---|---|
| A · Árbol subterráneo | Copa breve, raíces más anchas y profundas, línea de suelo | **Elegida como isotipo.** Reconocible a 16 px, asimétrica (una primera versión simétrica parecía una figura humana y se descartó) |
| B · Anillos de crecimiento | Corte del tronco + ramificación | Descartada: a tamaño chico parece un blanco de tiro |
| C · Crecimiento oculto | Logotipo en Cormorant Garamond con raíces que nacen de la «p» | **Elegida como logotipo**, combinada con A |

### Archivos (`public/brand/`)
`isotipo.svg` · `isotipo-mono.svg` · `isotipo-negativo.svg` · `favicon.svg` (también `app/icon.svg`) · `avatar.svg` (redes, 400×400) · `logotipo.svg` · `logotipo-mono.svg` · `logo-horizontal.svg` · `logo-horizontal-negativo.svg` · `logo-horizontal-mono.svg` · `logo-vertical.svg` · `logo-vertical-negativo.svg` · `concepto-a/b/c-*.svg`.

El texto del logotipo está convertido a trazos (no depende de la fuente instalada). Para PNG: abrir el SVG en el navegador o Figma y exportar a 2×.

### Reglas
- Área de protección: altura de la «N» alrededor del logotipo; ¼ del ancho alrededor del isotipo.
- Mínimos: logotipo horizontal 160 px / 40 mm; isotipo 24 px; debajo de eso, favicon.
- No deformar, no rotar, no sombras, no raíces marrones ni copa verde intenso, no sobre fotos con mucho detalle.

## Color
| Token | Hex | Uso | Contraste |
|---|---|---|---|
| `charcoal` | #272B29 | Tinta, botones, fondos negativos | 13.6:1 sobre paper |
| `paper` | #FAF9F5 | Fondo | — |
| `aqua` | #B7DDD4 | Superficies de identidad, brotes | carbón encima 9.8:1 |
| `beige` | #F3EADF | Secciones cálidas | carbón encima 12.1:1 |
| `sage` | #788F80 | Líneas de suelo, trazos | 3.3:1: solo gráficos |
| `sage-deep` | #4F6457 | Raíces, etiquetas, acentos de texto (refinamiento accesible de la salvia) | 6.05:1 |
| `ink-soft` | #4A504D | Texto secundario | 7.8:1 |

Sin degradados, salvo la línea de suelo (que se desvanece en los extremos).

## Tipografía
- **Cormorant Garamond** 500/600 + itálica: títulos, citas, la frase, bajadas. Reemplaza a Playfair (más «revista de moda») por un tono de libro, más cercano al psicoanálisis.
- **Manrope** 400–600: cuerpo, navegación, botones. Reemplaza a Inter para salir del default.
- Dos familias, no más. Lora y Montserrat quedan fuera.
- Escala fluida (`--text-step--1` a `--text-step-4`), cuerpo 17 px con interlineado 1.7, ancho de lectura 62 caracteres.
- Sin etiquetas en MAYÚSCULAS sobre cada título (patrón de plantilla genérica). Etiquetas en minúscula solo donde informan.

## Tokens (en `app/globals.css`)
Espaciado: escala de Tailwind (múltiplos de 4 px); secciones `py-20` (móvil) / `py-28` (escritorio). Contenedor 74 rem con 20/40 px de margen lateral. Grid: 12 columnas implícitas resueltas por sección (asimétricas 0.8/1.2 y 1.2/0.8). Radios jerárquicos: `soft` (controles), `panel` (paneles), `organic` (formas de identidad). Una sola sombra (`shadow-lift`) tintada con carbón. Breakpoints: 360, 640, 768, 1024, 1280, 1536.

## El árbol en cada sección (`components/TreeArt.tsx`)
| Sección | Parte del árbol | Componente |
|---|---|---|
| Inicio | Árbol completo + la frase (florido arriba, sepultado abajo) | `HeroTree` |
| Sobre mí | Raíces que cuelgan de la línea de suelo | `RootsMotif` |
| La frase | Suelo + raíces bajo el texto | sección `Phrase` |
| Enfoque | 4 ramificaciones que crecen del mismo suelo, cada vez más ramificadas | `BranchGlyph` |
| Áreas | 7 brotes distintos | `Sprout` |
| Cierre | Floración | `Blossom` |
| Favicon / header / footer | Isotipo | `Isotipo` |

## Movimiento
1. **Crecimiento del árbol** (al cargar, una vez, ~3,8 s): la frase de abajo aparece → raíces principales → raíces finas → tronco → ramas → brotes → la frase de arriba. Animación de `stroke-dashoffset` con `pathLength=1`.
2. **Revelado de la frase** (al entrar en pantalla): «Lo que el árbol / tiene de florido» sube por bloques; la línea de suelo se dibuja; «vive de lo que / tiene sepultado» desciende; las raíces crecen debajo.
3. **Floración del cierre** (al entrar en pantalla).
4. **Microgestos** (200–250 ms, `cubic-bezier(.22,.61,.36,1)`): botones que suben 1 px con sombra y flecha que avanza 3 px (solo con puntero fino), `scale(.98)` al presionar en pantallas táctiles, subrayado que crece en enlaces y en el menú activo, brotes que se elevan 2 px, preguntas frecuentes con altura animada (`interpolate-size`) y un ícono «+» que gira a «×».
5. **Accesibilidad**: con `prefers-reduced-motion` todo aparece sin animación; sin JavaScript también (`<noscript>`). Solo se animan `transform`, `opacity` y `stroke-dashoffset`. Sin librerías de animación (0 KB extra).

## Fotografía
Dirección: luz natural cálida, consultorio real con plantas y libros, ropa sin bata. La foto enviada por el usuario (retrato en el consultorio, con el cuadro del árbol detrás) encaja con esta dirección. Para usarla: `public/images/nicolas-espindola-retrato.jpg` y `site.photos.portrait` en `data/site.ts`. Con foto, la sección «Sobre mí» la muestra en 4:5; sin foto, muestra las raíces.

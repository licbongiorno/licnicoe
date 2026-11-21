# 08 · Identidad visual y design system

Versión visual navegable: **`/marca`** (no indexada). Archivos en `public/brand/`. Generador: `scripts/brand.py`.

## Concepto
**El árbol como representación de la subjetividad.** Raíces = historia, inconsciente y memoria; tronco = identidad y continuidad; ramas = vínculos, decisiones y caminos; flores = transformación y nuevas perspectivas. Las raíces no son lo negativo: sostienen y dan sentido a lo que florece. La frase *«Lo que el árbol tiene de florido vive de lo que tiene sepultado»* es el eje poético. No se atribuye a ningún autor.

## Isotipo definitivo: el árbol del cliente
El cliente aportó un árbol con hojas sobre la línea de suelo y raíces abiertas debajo. Se vectorizó con potrace (`scripts/trace_tree.py`), se separó en partes (tronco con raíces, 24 fragmentos de raíz y 51 hojas agrupadas en 4 anillos desde el centro) y se publica como sprite (`public/brand/tree-sprite.svg`, 40 KB, en caché), así no se repite dentro del HTML. Todas las versiones de `public/brand/` y los íconos (`app/icon.png`, `app/apple-icon.png`, `favicon-512.png`) usan este árbol. Color del árbol: verde bosque #2C3F37.

Para regenerar todo:
```bash
python3 scripts/trace_tree.py arbol.png > scripts/tree.json && python3 scripts/tree_to_ts.py && python3 scripts/brand.py
```

## Exploración previa: tres rutas
| Ruta | Idea | Evaluación |
|---|---|---|
| A · Árbol subterráneo | Copa breve, raíces más anchas y profundas, línea de suelo | Elegida en la primera iteración; **reemplazada por el árbol del cliente** |
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
| Introducción + inicio | Árbol de marca que se arma + la frase (florido arriba, sepultado abajo) | `BrandTree` (`components/BrandTree.tsx`) |
| Sobre mí | Las raíces del logo | `BrandRoots` |
| La frase | Suelo + raíces del logo que bajan | `BrandRoots` (animado) |
| Enfoque | El árbol del logo en 4 etapas: raíces → tronco → ramas con primeras hojas → copa completa | `TreeStage` |
| Áreas | 7 hojas reales del árbol del logo | `LogoLeaf` |
| Cierre | El árbol del logo en verde agua sobre fondo oscuro | `BrandTree` |
| Favicon / header / footer | Árbol de marca estático | `BrandTree` |

## Movimiento
1. **Introducción** (`components/Intro.tsx`, ~3 s, una vez por sesión, se puede saltar con el botón, un clic o Escape): se dibuja la línea de suelo, las raíces bajan, el tronco y la copa suben, las hojas brotan en 4 anillos desde el centro, aparecen el nombre y la matrícula, y la capa se retira.
   **Armado de la web:** a continuación el hero entra en secuencia (etiqueta, título, texto, botones, firma) y el árbol del hero se arma con la frase: «vive de lo que tiene sepultado» con las raíces y «Lo que el árbol tiene de florido» con las hojas. El armado usa solo desplazamiento, sin transparencia, para que el texto conserve su contraste. La técnica son `clipPath` con rectángulos escalados (raíces hacia abajo, copa hacia arriba) más `scale`/`opacity` en las hojas. Todo es CSS: sin JavaScript también termina.
2. **Revelado de la frase** (al entrar en pantalla): «Lo que el árbol / tiene de florido» sube por bloques; la línea de suelo se dibuja; «vive de lo que / tiene sepultado» desciende; las raíces crecen debajo.
3. **Floración del cierre** (al entrar en pantalla).
4. **Microgestos** (200–250 ms, `cubic-bezier(.22,.61,.36,1)`): botones que suben 1 px con sombra y flecha que avanza 3 px (solo con puntero fino), `scale(.98)` al presionar en pantallas táctiles, subrayado que crece en enlaces y en el menú activo, brotes que se elevan 2 px, preguntas frecuentes con altura animada (`interpolate-size`) y un ícono «+» que gira a «×».
5. **Accesibilidad**: con `prefers-reduced-motion` todo aparece sin animación; sin JavaScript también (`<noscript>`). Solo se animan `transform`, `opacity` y `stroke-dashoffset`. Sin librerías de animación (0 KB extra).

## Fotografía
Dirección: luz natural cálida, consultorio real con plantas y libros, ropa sin bata. **Incorporada:** `public/images/nicolas-espindola-retrato.webp` (4:5, «Sobre mí»), `nicolas-espindola-perfil.webp` (avatar del hero) y `og-foto.jpg` (imagen para compartir en redes y WhatsApp, generada en `app/opengraph-image.tsx`).

"""Genera el logotipo tipográfico (texto convertido a trazos) a partir de Cormorant Garamond 500 (OFL).
Uso: python3 scripts/wordmark.py <ruta-a-cormorant-500.ttf>  -> imprime JSON con paths y medidas."""
import json, sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

font = TTFont(sys.argv[1]); gs = font.getGlyphSet(); cmap = font.getBestCmap(); hmtx = font['hmtx']

def text_path(text, tracking=0):
    x = 0; pen = SVGPathPen(gs); marks = {}
    for i, ch in enumerate(text):
        g = cmap[ord(ch)]
        marks.setdefault(ch, []).append(x)
        gs[g].draw(TransformPen(pen, (1, 0, 0, -1, x, 0)))  # invertir Y para SVG
        x += hmtx[g][0] + tracking
    bp = BoundsPen(gs)
    return pen.getCommands(), x - tracking, marks

out = {}
for key, txt, tr in [("name", "Nicolás Espíndola", 6), ("role", "Psicólogo · MP 11138", 30)]:
    d, w, marks = text_path(txt, tr)
    out[key] = {"d": d, "width": w, "marks": marks}
pg = cmap[ord('p')]; bp = BoundsPen(gs); gs[pg].draw(bp)
out["p_bounds"] = bp.bounds  # xMin,yMin,xMax,yMax (unidades fuente, Y hacia arriba)
out["ascender"] = font['hhea'].ascent; out["descender"] = font['hhea'].descent
print(json.dumps(out))

"""Vectoriza el árbol de referencia (PNG de baja resolución) con potrace y lo separa por partes
para animarlo: suelo, raíces, tronco/ramas y hojas.
Uso: python3 scripts/trace_tree.py <arbol.png> > scripts/tree.json"""
import json, sys
import numpy as np
from PIL import Image, ImageFilter
import potrace

SCALE = 6
im = Image.open(sys.argv[1]).convert("L")
w, h = im.size
big = im.resize((w * SCALE, h * SCALE), Image.LANCZOS).filter(ImageFilter.GaussianBlur(1.2))
arr = np.array(big)
bm = potrace.Bitmap(arr >= 150)  # potracer traza los píxeles False como tinta
plist = bm.trace(turdsize=30, alphamax=1.1, opticurve=True, opttolerance=0.4)

def fmt(v):
    return f"{v / SCALE:.1f}"

def curve_d(curve):
    s = curve.start_point
    d = [f"M{fmt(s.x)} {fmt(s.y)}"]
    for seg in curve.segments:
        if seg.is_corner:
            d.append(f"L{fmt(seg.c.x)} {fmt(seg.c.y)}L{fmt(seg.end_point.x)} {fmt(seg.end_point.y)}")
        else:
            d.append(f"C{fmt(seg.c1.x)} {fmt(seg.c1.y)} {fmt(seg.c2.x)} {fmt(seg.c2.y)} {fmt(seg.end_point.x)} {fmt(seg.end_point.y)}")
    d.append("Z")
    return "".join(d)

def bbox(curve):
    pts = [curve.start_point] + [seg.end_point for seg in curve.segments]
    xs = [p.x / SCALE for p in pts]; ys = [p.y / SCALE for p in pts]
    return [min(xs), min(ys), max(xs), max(ys)]

# potrace: las curvas con signo '+' son contornos, '-' agujeros. Agrupamos cada agujero con su contorno.
shapes = []
for c in plist:
    b = bbox(c)
    shapes.append({"d": curve_d(c), "bbox": b, "area": (b[2] - b[0]) * (b[3] - b[1])})

# Asignación de agujeros: un contorno contenido por otro de mayor área se fusiona con él (evenodd)
shapes.sort(key=lambda s: -s["area"])
merged = []
for s in shapes:
    parent = None
    for m in merged:
        b, pb = s["bbox"], m["bbox"]
        if b[0] >= pb[0] and b[1] >= pb[1] and b[2] <= pb[2] and b[3] <= pb[3] and m["area"] > s["area"] * 1.5 and m.get("kind") != "ground":
            parent = m; break
    if parent and parent["area"] < 4000:  # solo formas chicas (hojas) llevan agujero propio
        parent["d"] += s["d"]
    else:
        merged.append(dict(s))

print(json.dumps({"width": w, "height": h, "shapes": merged}))

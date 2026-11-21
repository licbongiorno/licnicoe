"""Convierte scripts/tree.json en components/treeData.ts (partes clasificadas para animar)."""
import json, math, os
here = os.path.dirname(__file__)
t = json.load(open(os.path.join(here, "tree.json")))
GROUND = 92.6
main, *rest = t["shapes"]  # la forma más grande: tronco + ramas + raíces conectadas
leaves, roots = [], []
for s in rest:
    x0, y0, x1, y1 = s["bbox"]; cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    (leaves if cy < GROUND else roots).append({"d": s["d"], "cx": round(cx, 1), "cy": round(cy, 1)})
# las hojas aparecen desde el centro de la copa hacia afuera, en 4 anillos
for l in leaves:
    l["ring"] = min(3, int(math.hypot(l["cx"] - 145, l["cy"] - 62) // 14))
rings = [" ".join(l["d"] for l in leaves if l["ring"] == r) for r in range(4)]
rootd = " ".join(r["d"] for r in roots)
out = ["// Generado por scripts/tree_to_ts.py a partir del árbol provisto por el cliente (vectorizado con potrace).",
       "// No editar a mano.",
       f"export const GROUND_Y = {GROUND};",
       f"export const TRUNK = {json.dumps(main['d'])};",
       f"export const LEAF_RINGS: string[] = {json.dumps(rings)};",
       f"export const ROOT_BITS = {json.dumps(rootd)};"]
# Solo la línea de suelo va al código; los trazos van a un sprite SVG externo (cacheable, fuera del HTML)
open(os.path.join(here, "..", "components", "treeData.ts"), "w").write("\n".join(out[:3]) + "\n")
sym = [f'<path id="tr-trunk" d="{main["d"]}" fill-rule="evenodd"/>', f'<path id="tr-roots" d="{rootd}" fill-rule="evenodd"/>']
sym += [f'<path id="tr-leaves-{i}" d="{d}" fill-rule="evenodd"/>' for i, d in enumerate(rings)]
open(os.path.join(here, "..", "public", "brand", "tree-sprite.svg"), "w").write(
    '<svg xmlns="http://www.w3.org/2000/svg"><defs>' + "".join(sym) + "</defs></svg>\n")
print(len(leaves), "hojas,", len(roots), "fragmentos de raíz")

"""Genera el sistema de identidad en /public/brand a partir de los trazos del logotipo (wordmark.json).
Uso: python3 scripts/wordmark.py <cormorant500.ttf> > scripts/wordmark.json && python3 scripts/brand.py"""
import json, os
W = json.load(open(os.path.join(os.path.dirname(__file__), "wordmark.json")))
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "brand"); os.makedirs(OUT, exist_ok=True)

INK, PAPER, AQUA, SAGE, SAGE_DEEP, BEIGE = "#272b29", "#faf9f5", "#b7ddd4", "#788f80", "#4f6457", "#f3eadf"

# ---------- Isotipo definitivo (Concepto A: el árbol subterráneo) ----------
# Grilla 64. Línea de suelo en y=30. Arriba: tronco breve, dos ramas, tres brotes.
# Abajo: raíces más extensas que la copa (lo sepultado sostiene lo florido).
def isotipo(stroke=INK, bud=AQUA, ground=SAGE, sw=2.2, simple=False):
    # Asimétrico a propósito: la copa es breve y las raíces se abren más ancho y más hondo.
    crown = ('<path d="M32 28 C 32 22, 31 18, 32.5 11"/>'
             '<path d="M31.6 21 C 28 19.5, 24.5 17, 22 12"/>'
             '<path d="M32 16.5 C 35 15, 37.5 13, 39 9.5"/>')
    roots = ('<path d="M32 28 C 32.5 36, 30 42, 31 50 C 31.5 55, 30.5 58, 31 61"/>'
             '<path d="M31 29 C 27 32.5, 21 34, 15.5 38 C 12 40.5, 10 43, 6.5 44.5"/>'
             '<path d="M33 29 C 37 32, 43 33, 48 36.5 C 51.5 39, 53.5 41.5, 57.5 42"/>')
    if not simple:
        roots += ('<path d="M30.5 31 C 27.5 37, 23 41, 21 48"/>'
                  '<path d="M33.5 31.5 C 36.5 38, 40.5 43, 41 51"/>'
                  '<path d="M15.5 38 C 15 41, 13 43, 13.5 47"/>'
                  '<path d="M48 36.5 C 48.5 40, 50.5 42.5, 50 46"/>')
    bsw = f"{sw*0.55:.2f}"
    buds = (f'<circle cx="21.5" cy="10.5" r="2.7" fill="{bud}" stroke="{stroke}" stroke-width="{bsw}"/>'
            f'<circle cx="32.6" cy="8.6" r="3.1" fill="{bud}" stroke="{stroke}" stroke-width="{bsw}"/>')
    if not simple:
        buds += f'<circle cx="36.6" cy="13.9" r="1.7" fill="{bud}" stroke="{stroke}" stroke-width="{bsw}"/>'
    return (f'<path d="M8 28 H 56" stroke="{ground}" stroke-width="{sw*0.55:.2f}" stroke-linecap="round"/>'
            f'<g fill="none" stroke="{stroke}" stroke-width="{sw}" stroke-linecap="round" stroke-linejoin="round">{crown}{roots}</g>{buds}')

def svg(vb, body, w=None, h=None, title="Lic. Nicolás Espíndola"):
    size = f' width="{w}" height="{h}"' if w else ""
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}"{size} role="img" aria-label="{title}"><title>{title}</title>{body}</svg>\n'

def save(name, content):
    open(os.path.join(OUT, name), "w").write(content)

# ---------- Logotipo tipográfico con raíz en la "p" (Concepto C integrado) ----------
def wordmark(fill=INK, root=SAGE_DEEP, x=0, y=0, scale=1.0):
    # unidades de fuente: baseline en y=0; la "p" de Espíndola tiene su asta en x≈4220
    roots = ('<path d="M4214 255 C 4205 340, 4120 380, 4060 450 C 4030 485, 4015 520, 3975 545"/>'
             '<path d="M4226 255 C 4240 330, 4320 370, 4370 440 C 4395 475, 4410 505, 4460 528"/>'
             '<path d="M4220 255 C 4222 360, 4246 420, 4212 500 C 4200 540, 4212 580, 4220 625"/>'
             '<path d="M4100 410 C 4110 450, 4100 480, 4110 515"/>')
    return (f'<g transform="translate({x} {y}) scale({scale})">'
            f'<path d="{W["name"]["d"]}" fill="{fill}"/>'
            f'<g fill="none" stroke="{root}" stroke-width="22" stroke-linecap="round">{roots}</g></g>')

def role(fill=SAGE_DEEP, x=0, y=0, scale=1.0):
    return f'<g transform="translate({x} {y}) scale({scale})"><path d="{W["role"]["d"]}" fill="{fill}"/></g>'

NAME_W = W["name"]["width"]  # ≈7102

def horizontal(ink=INK, root=SAGE_DEEP, bud=AQUA, ground=SAGE, roleink=SAGE_DEEP):
    # isotipo 64 -> altura 120; texto escalado a 0.075 (cap ≈ 49px)
    s = 0.068
    body = (f'<g transform="translate(0 0) scale(1.875)">{isotipo(ink, bud, ground)}</g>'
            + wordmark(ink, root, x=140, y=62, scale=s)
            + role(roleink, x=142, y=104, scale=0.026)
            + f'<g fill="{roleink}" transform="translate({142 + W["role"]["width"]*0.026 + 14} 104) scale(0.026)"></g>')
    return svg(f"0 0 {int(140 + NAME_W*s) + 4} 122", body)

def vertical(ink=INK, root=SAGE_DEEP, bud=AQUA, ground=SAGE, roleink=SAGE_DEEP):
    s = 0.06; tw = NAME_W * s; W_ = int(tw) + 20
    body = (f'<g transform="translate({W_/2 - 64} 0) scale(2)">{isotipo(ink, bud, ground)}</g>'
            + wordmark(ink, root, x=10, y=190, scale=s)
            + role(roleink, x=(W_ - W["role"]["width"]*0.024)/2, y=262, scale=0.024))
    return svg(f"0 0 {W_} 272", body)

save("isotipo.svg", svg("0 0 64 64", isotipo()))
save("isotipo-mono.svg", svg("0 0 64 64", isotipo(INK, PAPER, INK)))
save("isotipo-negativo.svg", svg("0 0 64 64", f'<rect width="64" height="64" fill="{INK}"/>' + isotipo(PAPER, AQUA, SAGE)))
save("favicon.svg", svg("0 0 64 64", f'<rect width="64" height="64" rx="14" fill="{AQUA}"/>' + isotipo(INK, PAPER, INK, sw=3.4, simple=True)))
save("avatar.svg", svg("0 0 400 400", f'<rect width="400" height="400" fill="{AQUA}"/><g transform="translate(72 64) scale(4)">{isotipo(INK, PAPER, SAGE_DEEP, sw=2)}</g>'))
save("logo-horizontal.svg", horizontal())
save("logo-horizontal-negativo.svg", horizontal(PAPER, AQUA, AQUA, SAGE, AQUA))
save("logo-horizontal-mono.svg", horizontal(INK, INK, PAPER, INK, INK))
save("logotipo-mono.svg", svg(f"0 -720 {NAME_W} 1380", wordmark(INK, INK)))
save("logo-vertical.svg", vertical())
save("logo-vertical-negativo.svg", vertical(PAPER, AQUA, AQUA, SAGE, AQUA))
save("logotipo.svg", svg(f"0 -720 {NAME_W} 1380", wordmark()))

# ---------- Rutas exploratorias ----------
# A: el árbol subterráneo (= isotipo definitivo)
save("concepto-a-arbol-subterraneo.svg", svg("0 0 64 64", isotipo()))
# B: anillos de crecimiento (corte del tronco = historia acumulada) atravesados por una ramificación
ringsB = (f'<path d="M32 10c12 0 21 9 21 21.5S44 54 31.5 54 11 45 11 32 20 10 32 10Z" fill="{AQUA}"/>'
          f'<g fill="none" stroke="{INK}" stroke-width="1.6"><path d="M32 17c8.5 0 14.5 6.5 14.5 15s-6.5 15-15 15S17 40.5 17 32s6.5-15 15-15Z"/>'
          f'<path d="M32 24c4.5 0 8 3.5 8 8s-3.6 8-8.2 8S24 36.4 24 32s3.5-8 8-8Z"/></g>'
          f'<g fill="none" stroke="{INK}" stroke-width="2" stroke-linecap="round"><path d="M32 63V32"/><path d="M32 32C32 22 38 12 46 4"/><path d="M38 20c-3-4-8-6-12-6"/></g>'
          f'<circle cx="32" cy="32" r="2.4" fill="{INK}"/>')
save("concepto-b-anillos.svg", svg("0 0 64 64", ringsB))
# C: crecimiento oculto (logotipo con raíz en la p)
save("concepto-c-crecimiento-oculto.svg", svg(f"0 -720 {NAME_W} 1380", wordmark()))
print("ok", os.listdir(OUT))

# 01 · Auditoría, estrategia y sistema de marca

## A. Auditoría

### Información confirmada (provista por el profesional)
| Dato | Valor |
|---|---|
| Nombre | Lic. Nicolás Espíndola |
| Profesión | Psicólogo clínico y laboral |
| Matrícula | MP 11138 |
| Título | Licenciatura en Psicología, UNC, 2011 |
| Posgrado | Psicoanálisis y Salud Mental |
| Experiencia | 15 años |
| Población | Adultos |
| Orientación | Psicoanalítica e integrativa |
| Consultorio | Posadas 331, barrio Juniors, Córdoba Capital (≈10 min del centro) |
| Horario | Lunes a viernes, 8:00 a 20:00 |
| Sesión | 40 minutos |
| Coberturas | Particulares + atención directa GEA |
| WhatsApp | 351 595 9914 (personal; aún no es Business) |

### Pendiente de confirmar
- Tarifa internacional definitiva (USD 40 es objetivo, se muestra como "referencia, a confirmar").
- Honorarios en Argentina (no se publican).
- Fotos profesionales (retrato, consultorio, perfil). La foto actual es de baja resolución (168×126 px) y se usa solo como avatar pequeño provisorio.
- Dominio definitivo: **www.espaciodeanalisis.com.ar** (confirmado; el dominio raíz redirige a www).
- Enlace al perfil de Google Business, email profesional, Instagram/LinkedIn.
- Denominación exacta del colegio que otorga la matrícula (se asumió "Colegio de Psicólogos de la Provincia de Córdoba" en los datos estructurados; **verificar**).
- Plataforma de videollamada y medio de cobro internacional.
- Ubicación exacta del pin en Google Maps (para incrustar el mapa).

### Hallazgo crítico: perfil de MundoPsicólogos inconsistente
El perfil público (`mundopsicologos.com.ar/procard/espindola-nicolas`) hoy dice cosas que **contradicen** la información confirmada:

| MundoPsicólogos dice | Información confirmada | Acción |
|---|---|---|
| Metodología cognitivo-conductual y humanista | Psicoanalítica e integrativa | Reescribir "Sobre mí" |
| Especialidades: Psicología infantil, TDAH, Terapias de pareja, Homofobia | Atiende **adultos**; pareja no confirmado | Quitar lo no ofrecido |
| Talleres grupales | No confirmado | Quitar o confirmar |
| Sin formación, experiencia, obra social ni horarios | UNC 2011, posgrado, 15 años, GEA, L-V 8-20 | Completar |
| 0 opiniones | — | Pedir reseñas solo por vías éticas (ver doc 03) |

Para SEO/GEO esto es importante: los motores y asistentes de IA cruzan fuentes. Si un perfil dice "TCC" y la web dice "psicoanálisis", baja la confianza en ambos. **Prioridad alta en la semana 1.**

### Hipótesis (no verificadas, guían decisiones)
1. El mercado internacional más accesible son argentinos y latinoamericanos emigrados (España, EE.UU., Italia) que buscan "psicólogo argentino online" o "psicólogo online en español".
2. Un adulto en el exterior decide por: idioma/cultura compartida, claridad del encuadre (precio, zona horaria, cómo se paga), señales de legitimidad (matrícula verificable) y baja fricción de contacto.
3. El canal WhatsApp convierte mejor que un formulario en el público hispanohablante.

---

## B. Análisis CRO: adulto en el exterior que busca terapia online en español

| Objeción / duda | Cómo la resuelve la web |
|---|---|
| "¿Es un profesional real?" | Matrícula MP 11138 visible en header, hero, sobre mí, cierre y footer; UNC + año; posgrado. |
| "¿Puede atenderme si vivo en otro país?" | Bloque "Si vivís fuera de Argentina" + FAQ honesta sobre condiciones regulatorias. |
| "¿Cuánto cuesta y en qué moneda?" | Referencia USD 40 visible (como referencia, no definitiva) en online, modalidades y FAQ. |
| "¿Cómo coordino con la diferencia horaria?" | Paso 2 del recorrido online indica franja en GMT-3; el mensaje precargado pide país/ciudad. |
| "¿Cómo pago?" | Paso 3: se informa por escrito antes de comenzar (sin inventar medios). |
| "No sé qué decir / nunca hice terapia" | FAQ específica + "No hace falta que expliques tu situación por mensaje". |
| "¿Es confidencial por internet?" | Paso 4 + requisitos de privacidad + aviso de confidencialidad en footer. |
| Miedo a exponerse por WhatsApp | Se pide explícitamente no enviar información clínica por mensaje. |
| Fricción de contacto | 13 puntos de contacto con mensajes precargados según intención; botón flotante discreto que aparece después del hero. |
| Navegación | Página dedicada `/terapia-online-en-espanol` para tráfico internacional (SEO y anuncios). |

**Sin presión comercial:** no hay contadores, urgencias, popups ni promesas de resultado. El cierre invita a "formular preguntas", coherente con la marca.

---

## C. Decisiones estratégicas
1. **Una landing principal + dos páginas de servicio** (`/terapia-online-en-espanol`, `/orientacion-profesional`). No se crean páginas por país (evita prometer atención donde no está verificada).
2. **WhatsApp como canal único de contacto** por ahora (no hay email confirmado). Sin formularios: no se recolectan datos.
3. **El árbol como sistema gráfico vectorial** (SVG, ~2 KB): rápido, propio, sin fotos de stock.
4. **La tarifa internacional se muestra como referencia** controlada por `site.fees.international.confirmed`.
5. **Datos estructurados `Person` + `ProfessionalService`** (no `MedicalClinic` ni `Physician`), sin ratings.

---

## D. Sistema de marca

### Concepto
"Lo que el árbol tiene de florido vive de lo que tiene sepultado." Raíces = historia e inconsciente; tronco = identidad; ramas = posibilidades y vínculos; flores = transformación. La ilustración del hero se **dibuja** (raíces → tronco → ramas → flores) y respeta `prefers-reduced-motion`.

La identidad anterior (cabeza + garabato sobre verde agua) evoluciona así: la forma orgánica verde agua se mantiene como contenedor del isotipo; el garabato pasa a ser el trazo de las raíces.

### Paleta (ver también doc 08)
| Token | Hex | Uso |
|---|---|---|
| `aqua` | #B7DDD4 | Fondos de identidad, isotipo, sección online |
| `beige` | #F3EADF | Secciones cálidas, tarjetas |
| `sage` | #788F80 | Decorativo (líneas, flores). **No** para texto pequeño (contraste 3.3:1) |
| `sage-deep` | #4F6457 | Ajuste accesible de salvia para texto (6.05:1 sobre blanco cálido, 5.36:1 sobre beige) |
| `charcoal` | #272B29 | Texto principal, botones primarios |
| `paper` | #FAF9F5 | Fondo general |

### Tipografía
Actualizada en la segunda iteración: **Cormorant Garamond** (títulos, citas, la frase) + **Manrope** (lectura y UI). Detalle y justificación en `docs/08-identidad-y-design-system.md`.

### Dirección fotográfica (para la sesión de fotos)
- Luz natural lateral, tonos cálidos, fondo neutro o verde suave; sin bata ni escenografía clínica.
- Retrato principal 4:5 (mirada a cámara, expresión serena), retrato de perfil 1:1, plano en el consultorio (horizontal 3:2), detalle de manos/libros/planta sin rostro.
- Exportar en ≥ 2000 px, colocar en `/public/images/` y completar `site.photos` en `data/site.ts`. Next.js genera AVIF/WebP automáticamente.

### Arquitectura de la landing
Header → Hero → Sobre mí → Enfoque (4 pilares) → Áreas de consulta + Orientación profesional → Psicoterapia online (+ bloque internacional) → Presencial → Modalidades y cobertura → FAQ → Cierre → Footer.

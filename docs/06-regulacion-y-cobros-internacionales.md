# 06 · Marco regulatorio y cobros internacionales

> **Importante:** este documento resume el panorama general para ordenar decisiones. **No es asesoramiento legal ni contable.** Las normas y las condiciones de las plataformas cambian; cada punto marcado con ⚠️ debe verificarse con el Colegio de Psicólogos de Córdoba, un/a abogado/a y un/a contador/a antes de promocionar o cobrar.

## 1. Argentina: obligaciones que la web ya contempla
| Norma | Qué implica para la web y la práctica |
|---|---|
| Ley 25.326 (Protección de Datos Personales) | Política de privacidad, finalidad del dato, derechos de acceso/rectificación/supresión. La web no tiene formularios ni pide datos de salud (datos sensibles). ⚠️ Evaluar inscripción de bases de datos ante la AAIP si se llevan registros de pacientes. |
| Ley 26.529 (Derechos del Paciente) | Confidencialidad, consentimiento informado, historia clínica. Aplicar también en la modalidad online (consentimiento escrito del encuadre online). |
| Ley 26.657 (Salud Mental) | Marco de derechos de las personas usuarias; lenguaje no estigmatizante (la web evita etiquetas diagnósticas). |
| Ley provincial de ejercicio profesional de la psicología (Córdoba) y Código de Ética del Colegio | Matrícula visible (MP 11138); publicidad sin promesas de resultados ni testimonios. ⚠️ Revisar si el Colegio exige formato específico en la publicidad. |
| Secreto profesional | Avisos en la web y en WhatsApp para no enviar información clínica. |

## 2. Atención clínica a personas que viven en otro país
**Principio general:** en muchos países la regulación de la psicoterapia se aplica según **dónde está físicamente el paciente**, no dónde está el profesional. La matrícula argentina **no** habilita automáticamente a ejercer en otra jurisdicción.

| País | Panorama general | Estado |
|---|---|---|
| Estados Unidos | La licencia de psicología es estatal. Atender a alguien ubicado en un estado suele requerir licencia de ese estado (PSYPACT solo cubre a licenciados en EE.UU.). Algunos estados tienen excepciones de práctica temporal. | ⚠️ Alto riesgo regulatorio; verificar estado por estado |
| España | La psicología sanitaria está regulada (Psicólogo General Sanitario, colegiación, centros sanitarios autorizados). La atención online transfronteriza desde fuera de la UE no tiene un régimen claro. | ⚠️ Verificar con COP / abogado/a |
| Italia | Ejercicio reservado a inscriptos en el Albo degli Psicologi. | ⚠️ Verificar |
| Alemania | Psicoterapia regulada (Approbation / Heilpraktiker). | ⚠️ Verificar |
| Canadá | Regulación provincial (colegios provinciales). | ⚠️ Verificar |

### Alternativas legalmente más prudentes (a validar)
1. **Consulta formal al Colegio de Psicólogos de Córdoba** sobre atención online a residentes en el exterior y cobertura del seguro de responsabilidad profesional.
2. **Priorizar** a personas argentinas temporalmente en el exterior y países donde la revisión legal sea favorable; avanzar país por país.
3. **Consentimiento informado específico** para la modalidad online internacional: indica que el profesional ejerce bajo matrícula y normativa argentina, la plataforma usada, límites ante emergencias (con números locales del paciente) y jurisdicción.
4. **Orientación profesional** (psicología laboral, no clínica) puede tener un marco distinto en algunos países. ⚠️ No usarla como etiqueta para prestar psicoterapia encubierta.
5. Mientras no se verifique, la web **no** menciona países concretos, no crea páginas por país y aclara que la atención "está sujeta a las condiciones regulatorias del país donde residís" (ya implementado).

## 3. Cobros internacionales
⚠️ Condiciones, comisiones y disponibilidad para residentes argentinos cambian con frecuencia (y con la normativa cambiaria). Confirmar en el sitio oficial de cada proveedor el día de la decisión.

| Opción | Para el paciente | Para Nicolás (Argentina) | Puntos a verificar |
|---|---|---|---|
| **PayPal** | Muy fácil (tarjeta o saldo, conocido en EE.UU./Europa) | Se puede recibir; el retiro a cuentas bancarias argentinas ha sido históricamente limitado o indirecto | Comisión por cobro internacional + conversión; vía de retiro vigente |
| **Payoneer** | Paga por transferencia local (cuentas receptoras en USD/EUR) o tarjeta mediante solicitud de pago | Disponible para residentes argentinos (verificar); retiro a banco local | Comisión de recepción con tarjeta, tipo de cambio al retirar |
| **Wise** | Fácil desde Europa/EE.UU. | Según información conocida, **no abre cuentas a residentes argentinos** | ⚠️ Confirmar; si no está disponible, descartar |
| **Transferencia SWIFT a cuenta en USD en banco argentino** | Más engorrosa y con costo para el paciente | Fondos en cuenta propia, trazable fiscalmente | Comisiones de bancos corresponsales (pueden ser altas para USD 40); normativa de cobro de exportación de servicios |
| **Mercado Pago** | Solo práctico si el paciente tiene medios argentinos | Simple | No sirve en general para el exterior |
| **Stripe** | — | No disponible para cuentas argentinas | Descartar |
| **Criptomonedas / stablecoins** | Variable | Volatilidad y complejidad fiscal | ⚠️ Solo con asesoría contable |

### Aspectos fiscales (consultar contador/a)
- Prestar servicios a personas del exterior suele encuadrarse como **exportación de servicios** (factura tipo E). Verificar compatibilidad con el régimen actual (monotributo o responsable inscripto) y límites de facturación.
- Verificar obligaciones de ingreso/liquidación de divisas vigentes.

### Recomendación inicial (sujeta a verificación)
1. **Medio principal:** Payoneer o PayPal (el que tenga hoy la vía de retiro más clara y económica a una cuenta argentina propia), por facilidad para el paciente.
2. **Alternativa:** transferencia a cuenta en USD para pacientes que pagan paquetes de varias sesiones (diluye la comisión fija).
3. **Cobro anticipado** por sesión o por mes, informado por escrito en el encuadre.
4. **No integrar ninguna pasarela en la web** hasta tener cuenta verificada y decisión contable; el pago se coordina por privado.
5. Cuando se confirme: actualizar `site.fees.international.confirmed = true` y el paso 3 del bloque online.

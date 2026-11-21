# 02 · WhatsApp: configuración y protocolo

## Estado actual
- La web usa el número **+54 9 351 595 9914** (WhatsApp personal), configurado en `data/site.ts → whatsapp`.
- Todos los botones salen de una sola función (`lib/whatsapp.ts`), con 5 mensajes precargados: consulta general, presencial, terapia online, paciente internacional y orientación profesional.
- Para **desactivar** todos los botones (por ejemplo, durante la migración): `whatsapp.enabled = false`. Los botones pasan a "Contacto disponible próximamente" y el botón flotante desaparece. Ningún botón simula funcionar.
- Al migrar a WhatsApp Business **con el mismo número**, no hace falta tocar la web (solo cambiar `isBusiness: true` como referencia).

## Recomendación: migrar a WhatsApp Business
App gratuita (Android/iOS). Permite separar lo profesional de lo personal, mensajes automáticos, respuestas rápidas y etiquetas. Recomendación: usar un **número exclusivo para el consultorio** si es posible; si se usa el mismo, la migración conserva el historial.

### Perfil profesional
- **Nombre:** Lic. Nicolás Espíndola · Psicólogo
- **Categoría:** Servicios médicos y de salud (o la más cercana disponible)
- **Descripción (máx. 256):** Psicólogo clínico y laboral · MP 11138 · UNC. Psicoterapia psicoanalítica e integrativa para adultos. Presencial en Córdoba (barrio Juniors) y online en español para Argentina y el exterior.
- **Dirección:** Posadas 331, barrio Juniors, Córdoba
- **Horario:** Lunes a viernes, 8:00 a 20:00
- **Sitio web:** el dominio definitivo
- **Foto:** retrato profesional real (no logo), fondo neutro

### Mensaje de bienvenida (automático, primera vez)
> Hola, gracias por comunicarte con el Lic. Nicolás Espíndola. Para poder orientarte, ¿querías consultar por atención psicológica presencial, online u orientación profesional? Te respondo personalmente a la brevedad. Por favor, no envíes información clínica por este medio.

### Mensaje fuera de horario
> Gracias por escribir. En este momento estoy fuera del horario de atención (lunes a viernes, 8 a 20 h, hora de Argentina). Te respondo el próximo día hábil. Si estás atravesando una urgencia, comunicate con los servicios de emergencia de tu lugar (en Argentina: 107 o 911).

### Respuestas rápidas (atajos `/`)
| Atajo | Texto |
|---|---|
| `/online` | La terapia online es por videollamada, en sesiones de 40 minutos. Antes de empezar te paso por escrito el encuadre: honorarios, forma de pago, plataforma y política de cancelación. ¿Qué días y franjas horarias te quedan cómodos? |
| `/exterior` | Hola, gracias por tu interés en comenzar un espacio terapéutico. ¿Desde qué país nos escribís y en qué zona horaria te encontrás? |
| `/presencial` | Atiendo en Posadas 331, barrio Juniors (a unos 10 minutos del centro), de lunes a viernes de 8 a 20 h. ¿Qué días te quedan mejor? |
| `/gea` | Atiendo de forma directa a afiliados de GEA. ¿Me confirmás tu número de afiliado/a para verificar la autorización? |
| `/honorarios` | Te paso los honorarios según la modalidad: [completar]. |
| `/primera` | La primera entrevista es para conocernos: me contás qué te trae, te explico cómo trabajo y vemos si tiene sentido continuar. No hay compromiso de seguir. |
| `/orientacion` | En orientación y desarrollo profesional trabajamos sobre tu recorrido laboral, intereses y decisiones. ¿Preferís modalidad presencial u online? |
| `/confirmar` | Te confirmo la entrevista el [día] a las [hora] ([zona horaria]). Te envío el enlace/la dirección el día anterior. |
| `/urgencia` | Este medio no es adecuado para urgencias. Por favor, comunicate ahora con los servicios de emergencia de tu lugar (en Argentina: 107 o 911). |

### Etiquetas
`Nueva consulta` · `Online AR` · `Internacional` · `Presencial` · `GEA` · `Orientación profesional` · `Entrevista agendada` · `Paciente activo` · `Sin respuesta`

(Las etiquetas sirven para medir: cuántas consultas por canal se convierten en primera entrevista. No registrar contenido clínico.)

### Protocolo de primera respuesta
1. Responder dentro del mismo día hábil.
2. Identificar modalidad y, si es internacional, **país y zona horaria** (también para revisar las condiciones regulatorias del país; ver doc 06).
3. No pedir ni comentar detalles clínicos. Si la persona los envía, agradecer y proponer conversarlo en la entrevista.
4. Ofrecer 2 o 3 horarios concretos (expresados en la hora de la persona, si está en el exterior).
5. Antes de la primera sesión, enviar el encuadre por escrito (honorarios, medio de pago, plataforma, cancelación, confidencialidad).
6. Si aparece una señal de riesgo: indicar servicios de emergencia locales de inmediato.
7. Etiquetar la conversación y anotar el origen ("¿cómo llegaste?") para la planilla de métricas (doc 07).

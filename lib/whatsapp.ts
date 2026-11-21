import { site } from "@/data/site";

export type ContactIntent = "general" | "online" | "international" | "career" | "presencial";

/** Mensajes precompletados: no piden ni sugieren datos clínicos. */
export const whatsappMessages: Record<ContactIntent, string> = {
  general:
    "Hola Nicolás, vi tu web y quería consultar por una primera entrevista. ¿Me podrías contar disponibilidad y cómo es el proceso?",
  presencial:
    "Hola Nicolás, quería consultar por atención presencial en tu consultorio de barrio Juniors (Córdoba). ¿Qué disponibilidad tenés?",
  online:
    "Hola Nicolás, quería consultar por terapia online. ¿Cómo es el funcionamiento y qué disponibilidad tenés?",
  international:
    "Hola Nicolás, vivo fuera de Argentina y quería consultar por terapia online en español. Escribo desde (país / ciudad): ",
  career:
    "Hola Nicolás, quería consultar por orientación y desarrollo profesional. ¿Cómo trabajás y qué disponibilidad tenés?",
};

export const isWhatsAppEnabled = () => site.whatsapp.enabled && /^\d{10,15}$/.test(site.whatsapp.number);

export function whatsappUrl(intent: ContactIntent = "general"): string | null {
  if (!isWhatsAppEnabled()) return null;
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(whatsappMessages[intent])}`;
}

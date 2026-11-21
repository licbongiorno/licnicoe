"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

/** Botón flotante discreto: aparece recién después del hero y solo si WhatsApp está configurado. */
export function FloatingWhatsApp() {
  const href = whatsappUrl("general");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp (abre en una nueva pestaña)"
      onClick={() => trackEvent("contact_click", { channel: "whatsapp", intent: "general", location: "floating" })}
      className={`fixed bottom-5 right-5 z-40 hidden size-14 lg:flex items-center justify-center rounded-full bg-charcoal text-paper shadow-lg shadow-charcoal/20 transition-all duration-300 hover:bg-sage-deep ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      tabIndex={visible ? 0 : -1}
    >
      <MessageCircle aria-hidden className="size-6" strokeWidth={1.8} />
    </a>
  );
}

"use client";

import { useEffect, useState } from "react";
import { MapPin, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { site } from "@/data/site";

/**
 * Barra de contacto fija en celulares (igual que en las demás webs del estudio).
 * Aparece después del inicio para no tapar el botón principal del hero.
 */
export function MobileActionBar() {
  const href = whatsappUrl("general");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!href) return null;

  return (
    <div
      role="region"
      aria-label="Contacto rápido"
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-paper/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-md gap-2">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          onClick={() => trackEvent("contact_click", { channel: "whatsapp", intent: "general", location: "mobile-bar" })}
          className="btn btn-primary flex-1 !px-3"
        >
          <MessageCircle aria-hidden className="size-[1.1rem]" strokeWidth={1.8} /> WhatsApp
          <span className="sr-only"> (abre en una pestaña nueva)</span>
        </a>
        <a
          href={site.location.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          onClick={() => trackEvent("directions_click", { location: "mobile-bar" })}
          className="btn btn-outline flex-1 !px-3"
        >
          <MapPin aria-hidden className="size-[1.1rem]" strokeWidth={1.8} /> Cómo llegar
          <span className="sr-only"> (abre Google Maps en una pestaña nueva)</span>
        </a>
      </div>
    </div>
  );
}

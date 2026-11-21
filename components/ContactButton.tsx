"use client";

import { ArrowRight } from "lucide-react";
import { whatsappUrl, type ContactIntent } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

type Variant = "primary" | "outline" | "light" | "ghost-light";

type Props = {
  intent?: ContactIntent;
  children: React.ReactNode;
  variant?: Variant;
  location: string; // sección del clic (analítica agregada)
  className?: string;
  arrow?: boolean;
};

export function ContactButton({ intent = "general", children, variant = "primary", location, className = "", arrow = true }: Props) {
  const href = whatsappUrl(intent);

  if (!href) {
    // Sin número configurado: no simula funcionar.
    return (
      <span className={`btn cursor-not-allowed border border-dashed border-charcoal/30 text-ink-soft ${className}`} aria-disabled="true">
        Contacto disponible próximamente
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-${variant} ${className}`}
      onClick={() => trackEvent("contact_click", { channel: "whatsapp", intent, location })}
    >
      {children}
      {arrow && <ArrowRight aria-hidden className="btn-arrow size-4" strokeWidth={1.8} />}
      <span className="sr-only"> (abre WhatsApp en una pestaña nueva)</span>
    </a>
  );
}

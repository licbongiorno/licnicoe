"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl, type ContactIntent } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "light";

const styles: Record<Variant, string> = {
  primary: "bg-charcoal text-paper hover:bg-[#3a403d]",
  secondary: "border border-charcoal/80 text-charcoal hover:bg-charcoal hover:text-paper",
  light: "bg-paper text-charcoal hover:bg-beige",
};

type Props = {
  intent?: ContactIntent;
  children: React.ReactNode;
  variant?: Variant;
  location: string; // sección desde la que se hace clic (para analítica agregada)
  className?: string;
  icon?: boolean;
};

export function ContactButton({ intent = "general", children, variant = "primary", location, className = "", icon = true }: Props) {
  const href = whatsappUrl(intent);
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-medium transition-colors duration-200";

  if (!href) {
    // Sin número configurado: no simula funcionar.
    return (
      <span className={`${base} cursor-not-allowed border border-dashed border-charcoal/30 text-ink-soft ${className}`} aria-disabled="true">
        Contacto disponible próximamente
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${className}`}
      onClick={() => trackEvent("contact_click", { channel: "whatsapp", intent, location })}
    >
      {icon && <MessageCircle aria-hidden className="size-[1.1rem]" strokeWidth={1.8} />}
      {children}
      <span className="sr-only"> (abre WhatsApp en una nueva pestaña)</span>
    </a>
  );
}

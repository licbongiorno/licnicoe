"use client";

import { useEffect } from "react";

/**
 * Recuerda (solo en este navegador) qué preguntas frecuentes ya leíste y las marca.
 * No envía datos a ningún lado.
 */
const KEY = "faq-leidas";

export function FaqMemory() {
  useEffect(() => {
    let read: string[] = [];
    try {
      read = JSON.parse(localStorage.getItem(KEY) || "[]");
    } catch {}
    const items = document.querySelectorAll<HTMLDetailsElement>(".faq details[data-q]");
    items.forEach((d) => {
      if (read.includes(d.dataset.q!)) d.dataset.read = "true";
      d.addEventListener("toggle", () => {
        if (!d.open) return;
        d.dataset.read = "true";
        if (!read.includes(d.dataset.q!)) read.push(d.dataset.q!);
        try {
          localStorage.setItem(KEY, JSON.stringify(read));
        } catch {}
      });
    });
  }, []);
  return null;
}

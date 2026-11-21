"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/data/content";
import { site } from "@/data/site";
import { ContactButton } from "./ContactButton";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-paper/95 shadow-[0_1px_0_rgba(39,43,41,0.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/#inicio" className="flex items-center gap-3">
          <Logo className="size-9 text-charcoal" />
          <span className="leading-tight">
            <span className="block font-display text-[1.05rem] font-medium">{site.person.displayName}</span>
            <span className="block text-[0.7rem] tracking-[0.12em] text-sage-deep uppercase">Psicólogo · {site.person.license}</span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.92rem]">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center text-ink-soft transition-colors hover:text-charcoal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ContactButton location="header" className="!min-h-10 !px-5 !py-2 !text-sm">
            Consultar por WhatsApp
          </ContactButton>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </div>

      <div id="menu-movil" hidden={!open} className="h-[calc(100dvh-4.5rem)] overflow-y-auto bg-paper lg:hidden">
        <nav aria-label="Menú móvil" className="container-x flex flex-col gap-1 pt-6 pb-10">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-charcoal/10 py-4 font-display text-2xl"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8">
            <ContactButton location="mobile-menu" className="w-full">
              Consultar por WhatsApp
            </ContactButton>
          </div>
        </nav>
      </div>
    </header>
  );
}

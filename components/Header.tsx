"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/data/content";
import { site } from "@/data/site";
import { ContactButton } from "./ContactButton";
import { BrandTree } from "./BrandTree";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sección activa (scrollspy) solo en la página principal
  useEffect(() => {
    if (pathname !== "/") return;
    const ids = nav.map((n) => n.href.split("#")[1]);
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

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
  const isCurrent = (href: string) => pathname === "/" && href.endsWith(`#${active}`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        solid ? "bg-paper/95 shadow-[0_1px_0_rgb(39_43_41/0.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/#inicio" className="flex min-w-0 items-center gap-2.5">
          <BrandTree className="h-10 w-[3.3rem] shrink-0" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-[1.3rem] font-semibold">{site.person.displayName}</span>
            <span className="block text-xs text-sage-deep">Psicólogo · {site.person.license}</span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.92rem]">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "true" : undefined}
                  className="link-u inline-flex min-h-11 items-center text-ink-soft hover:text-charcoal aria-[current=true]:text-charcoal"
                >
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
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full transition-colors active:bg-aqua/50 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </div>

      <div id="menu-movil" hidden={!open} className="h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain bg-paper lg:hidden">
        <nav aria-label="Menú móvil" className="container-x flex flex-col pt-4 pb-10">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isCurrent(item.href) ? "true" : undefined}
              className="flex items-center justify-between border-b border-charcoal/10 py-4 font-display text-[1.75rem] font-medium transition-colors active:text-sage-deep aria-[current=true]:text-sage-deep"
            >
              {item.label}
              {isCurrent(item.href) && <span aria-hidden className="size-2 rounded-full bg-sage" />}
            </Link>
          ))}
          <div className="mt-8">
            <ContactButton location="mobile-menu" className="w-full">
              Consultar por WhatsApp
            </ContactButton>
          </div>
          <p className="mt-8 font-display text-lg italic text-ink-soft">“{site.brand.motto}”</p>
        </nav>
      </div>
    </header>
  );
}

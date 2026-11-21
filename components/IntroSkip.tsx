"use client";

import { useEffect } from "react";

const done = () => {
  document.documentElement.classList.add("intro-done");
  try {
    sessionStorage.setItem("intro-seen", "1");
  } catch {}
};

export function IntroSkip() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && done();
    const intro = document.querySelector(".intro");
    intro?.addEventListener("click", done);
    document.addEventListener("keydown", onKey);
    const t = window.setTimeout(done, 3600); // al terminar, no vuelve a mostrarse en la sesión
    return () => {
      document.removeEventListener("keydown", onKey);
      intro?.removeEventListener("click", done);
      window.clearTimeout(t);
    };
  }, []);

  return (
    <button type="button" className="intro-skip btn btn-outline !min-h-10 !px-4 !py-2 !text-sm" onClick={done}>
      Saltar introducción
    </button>
  );
}


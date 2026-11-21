"use client";

import { useEffect, useMemo, useState } from "react";
import { Clock } from "lucide-react";

/** Horario de atención en Argentina (UTC-3, sin horario de verano). */
const OPEN_UTC = 11; // 08:00 ART
const CLOSE_UTC = 23; // 20:00 ART

const ZONES: { tz: string; label: string }[] = [
  { tz: "Europe/Madrid", label: "España (Madrid, Barcelona)" },
  { tz: "Europe/Rome", label: "Italia" },
  { tz: "Europe/Berlin", label: "Alemania" },
  { tz: "Europe/London", label: "Reino Unido / Irlanda" },
  { tz: "America/New_York", label: "EE. UU. Este (Nueva York, Miami)" },
  { tz: "America/Chicago", label: "EE. UU. Centro (Chicago, Houston)" },
  { tz: "America/Los_Angeles", label: "EE. UU. Oeste (Los Ángeles)" },
  { tz: "America/Toronto", label: "Canadá Este (Toronto, Montreal)" },
  { tz: "America/Vancouver", label: "Canadá Oeste (Vancouver)" },
  { tz: "America/Mexico_City", label: "México" },
  { tz: "America/Bogota", label: "Colombia / Perú / Ecuador" },
  { tz: "America/Santiago", label: "Chile" },
  { tz: "Australia/Sydney", label: "Australia (Sídney)" },
  { tz: "America/Argentina/Cordoba", label: "Argentina" },
];

function slot(tz: string) {
  const base = new Date();
  // próximo día hábil de referencia (un miércoles) para evitar cambios de horario raros en fin de semana
  const d = new Date(Date.UTC(base.getUTCFullYear(), base.getUTCMonth(), base.getUTCDate()));
  while (d.getUTCDay() !== 3) d.setUTCDate(d.getUTCDate() + 1);
  const open = new Date(d); open.setUTCHours(OPEN_UTC, 0, 0, 0);
  const close = new Date(d); close.setUTCHours(CLOSE_UTC, 0, 0, 0);
  const t = new Intl.DateTimeFormat("es-AR", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: tz });
  const day = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: tz });
  const shift = day.format(close) !== day.format(open);
  return { from: t.format(open), to: t.format(close), crossesMidnight: shift };
}

export function TimezoneHelper() {
  const [tz, setTz] = useState("America/Argentina/Cordoba"); // determinístico en el servidor (sin horario de verano)
  const [detected, setDetected] = useState<string | null>(null);

  useEffect(() => {
    try {
      const local = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (local) {
        setDetected(local);
        setTz(local);
      }
    } catch {}
  }, []);

  const options = useMemo(() => {
    if (detected && !ZONES.some((z) => z.tz === detected)) return [{ tz: detected, label: `Tu zona (${detected.replace(/_/g, " ")})` }, ...ZONES];
    return ZONES;
  }, [detected]);

  const s = slot(tz);

  return (
    <div className="rounded-[var(--radius-panel)] bg-paper p-6 md:p-8">
      <div className="flex items-center gap-2">
        <Clock aria-hidden className="size-5 text-sage-deep" strokeWidth={1.6} />
        <h3 className="font-display text-[1.45rem] font-semibold">El horario en tu hora</h3>
      </div>
      <label htmlFor="tz-select" className="mt-4 block text-sm text-ink-soft">
        ¿Dónde vivís?
      </label>
      <select
        id="tz-select"
        value={tz}
        onChange={(e) => setTz(e.target.value)}
        className="mt-1 w-full rounded-[var(--radius-soft)] border border-charcoal/20 bg-paper px-3 py-3 text-[0.98rem] text-charcoal"
      >
        {options.map((z) => (
          <option key={z.tz} value={z.tz}>
            {z.label}
          </option>
        ))}
      </select>
      <p className="mt-5 leading-relaxed" aria-live="polite">
        Lunes a viernes, de <strong className="font-display text-[1.6rem] font-semibold tabular-nums">{s.from}</strong> a{" "}
        <strong className="font-display text-[1.6rem] font-semibold tabular-nums">{s.to}</strong>
        {s.crossesMidnight && <span className="text-ink-soft"> (del día siguiente)</span>}
        <span className="block text-sm text-ink-soft">Equivale a 8:00 a 20:00 en Argentina. Los turnos se coordinan dentro de esa franja.</span>
      </p>
    </div>
  );
}

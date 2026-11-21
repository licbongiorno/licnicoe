/** Isotipo: árbol mínimo con raíces, dentro de una forma orgánica (evolución de la cabeza + garabato). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden fill="none">
      <path d="M20 3c9 0 16 6.5 16 15.5S29.5 37 20 37 4 30 4 20.5 11 3 20 3Z" fill="#b7ddd4" />
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M20 26V13" />
        <path d="M20 18c-2.5-1.5-4.5-3.5-5-6.5M20 16c2.5-1.2 4.5-3 5-6" />
        <path d="M20 26c-1 2.5-3.5 3.5-5.5 5.5M20 26c1 2.5 3.5 3.5 5.5 5.5M20 26v6" />
      </g>
      <circle cx="15" cy="11" r="1.6" fill="#faf9f5" stroke="currentColor" strokeWidth="1" />
      <circle cx="25" cy="9.5" r="1.6" fill="#faf9f5" stroke="currentColor" strokeWidth="1" />
      <circle cx="20" cy="12" r="1.8" fill="#faf9f5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

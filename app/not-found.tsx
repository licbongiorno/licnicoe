import Link from "next/link";
import { BrandRoots } from "@/components/BrandTree";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[80vh] flex-col items-center justify-center pt-[4.5rem] text-center">
      <BrandRoots className="h-auto w-full max-w-sm" />
      <h1 className="display mt-10 text-[length:var(--text-step-3)]">Esta página no está</h1>
      <p className="mt-5 max-w-md text-ink-soft">
        Puede que el enlace haya cambiado. A veces, para encontrar el camino, hay que volver al comienzo.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-primary">Volver al inicio</Link>
        <Link href="/blog" className="btn btn-outline">Leer el blog</Link>
      </div>
    </section>
  );
}

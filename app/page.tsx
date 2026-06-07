import Link from "next/link";

export default function Home() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm sm:px-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">Bem-vindo</p>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">ADCOM Rotina de Produção</h1>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
        Gerencie seus clientes de forma simples e organizada.
      </p>
      <Link href="/clientes" className="button-primary mt-8">
        Acessar clientes
      </Link>
    </section>
  );
}

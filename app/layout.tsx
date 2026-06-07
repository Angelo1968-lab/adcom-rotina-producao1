import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADCOM Rotina de Produção",
  description: "Sistema de gestão da rotina de produção da ADCOM",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="border-b border-slate-200 bg-white">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
            <Link href="/" className="text-lg font-bold text-blue-800">
              ADCOM
            </Link>
            <Link href="/clientes" className="text-sm font-semibold text-slate-700 transition hover:text-blue-700">
              Clientes
            </Link>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}

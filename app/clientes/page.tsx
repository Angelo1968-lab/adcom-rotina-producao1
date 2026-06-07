import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SubmitButton } from "@/components/submit-button";
import { prisma } from "@/lib/prisma";
import { excluirCliente } from "./actions";

export const dynamic = "force-dynamic";

export default async function ClientesPage() {
  const clientes = await prisma.cliente.findMany({ orderBy: { nome: "asc" } });

  return (
    <section>
      <PageHeader title="Clientes" description="Cadastre e gerencie os clientes da ADCOM." actionHref="/clientes/novo" actionLabel="Novo cliente" />
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {clientes.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <h2 className="text-lg font-semibold text-slate-900">Nenhum cliente cadastrado</h2>
            <p className="mt-2 text-sm text-slate-600">Comece adicionando o primeiro cliente.</p>
            <Link href="/clientes/novo" className="button-primary mt-6">Cadastrar cliente</Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Nome</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Segmento</th>
                  <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-600"><span className="sr-only">Ações</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {clientes.map((cliente) => (
                  <tr key={cliente.id} className="hover:bg-slate-50">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">{cliente.nome}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">{cliente.segmento}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-right">
                      <div className="flex justify-end gap-1">
                        <Link href={`/clientes/${cliente.id}/editar`} className="rounded-md px-3 py-1.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">Editar</Link>
                        <form action={excluirCliente.bind(null, cliente.id)}>
                          <SubmitButton label="Excluir" pendingLabel="Excluindo..." variant="danger" />
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

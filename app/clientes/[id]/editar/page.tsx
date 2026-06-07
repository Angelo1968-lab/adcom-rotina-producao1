import { notFound } from "next/navigation";
import { ClienteForm } from "@/components/cliente-form";
import { PageHeader } from "@/components/page-header";
import { prisma } from "@/lib/prisma";
import { editarCliente } from "../../actions";

export const dynamic = "force-dynamic";

interface EditarClientePageProps {
  params: Promise<{ id: string }>;
}

export default async function EditarClientePage({ params }: EditarClientePageProps) {
  const { id } = await params;
  const cliente = await prisma.cliente.findUnique({ where: { id } });

  if (!cliente) notFound();

  return (
    <section className="mx-auto max-w-2xl">
      <PageHeader title="Editar cliente" description="Atualize os dados do cliente." />
      <ClienteForm action={editarCliente.bind(null, cliente.id)} cliente={cliente} submitLabel="Salvar alterações" />
    </section>
  );
}

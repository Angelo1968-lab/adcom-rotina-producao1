import { ClienteForm } from "@/components/cliente-form";
import { PageHeader } from "@/components/page-header";
import { criarCliente } from "../actions";

export default function NovoClientePage() {
  return (
    <section className="mx-auto max-w-2xl">
      <PageHeader title="Novo cliente" description="Preencha os dados para cadastrar um cliente." />
      <ClienteForm action={criarCliente} submitLabel="Cadastrar cliente" />
    </section>
  );
}

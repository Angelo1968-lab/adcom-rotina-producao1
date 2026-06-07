import Link from "next/link";
import { SubmitButton } from "@/components/submit-button";

interface ClienteFormProps {
  action: (formData: FormData) => Promise<void>;
  cliente?: { nome: string; segmento: string };
  submitLabel: string;
}

export function ClienteForm({ action, cliente, submitLabel }: ClienteFormProps) {
  return (
    <form action={action} className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <label htmlFor="nome" className="block text-sm font-semibold text-slate-800">Nome</label>
        <input id="nome" name="nome" type="text" required defaultValue={cliente?.nome} className="mt-2 block w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100" placeholder="Nome do cliente" />
      </div>
      <div>
        <label htmlFor="segmento" className="block text-sm font-semibold text-slate-800">Segmento</label>
        <input id="segmento" name="segmento" type="text" required defaultValue={cliente?.segmento} className="mt-2 block w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100" placeholder="Segmento de atuação" />
      </div>
      <div className="flex items-center gap-3 border-t border-slate-100 pt-6">
        <SubmitButton label={submitLabel} pendingLabel="Salvando..." />
        <Link href="/clientes" className="button-secondary">Cancelar</Link>
      </div>
    </form>
  );
}

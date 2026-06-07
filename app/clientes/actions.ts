"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

function getClienteData(formData: FormData) {
  const nome = String(formData.get("nome") ?? "").trim();
  const segmento = String(formData.get("segmento") ?? "").trim();

  if (!nome || !segmento) {
    throw new Error("Nome e segmento são obrigatórios.");
  }

  return { nome, segmento };
}

export async function criarCliente(formData: FormData) {
  await prisma.cliente.create({ data: getClienteData(formData) });
  revalidatePath("/clientes");
  redirect("/clientes");
}

export async function editarCliente(id: string, formData: FormData) {
  await prisma.cliente.update({ where: { id }, data: getClienteData(formData) });
  revalidatePath("/clientes");
  redirect("/clientes");
}

export async function excluirCliente(id: string) {
  await prisma.cliente.delete({ where: { id } });
  revalidatePath("/clientes");
}

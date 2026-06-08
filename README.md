# ADCOM Rotina de Produção 1.0

Sistema de gestão da rotina de produção da ADCOM. Nesta primeira fase, o projeto contém somente o módulo de clientes.

## Tecnologias

- Next.js com TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL (Supabase)

## Configurar o Supabase

O Prisma lê a conexão PostgreSQL exclusivamente da variável `DATABASE_URL`, configurada em `prisma/schema.prisma`.

1. No painel do projeto Supabase, clique em **Connect**.
2. Copie a URI do **Supavisor Session pooler**, que termina na porta `5432`. Essa conexão é adequada para o Prisma e para executar migrações. Não use a URI de Transaction pooler, que termina em `6543`, para aplicar migrações.
3. Copie o arquivo de exemplo para `.env`:

   ```bash
   cp .env.example .env
   ```

4. No `.env`, substitua a `DATABASE_URL` de exemplo pela URI copiada. Troque o marcador da senha pela senha real do banco. Se a senha contiver caracteres especiais, codifique-os para uso em URL. Não versione o arquivo `.env`.

   ```dotenv
   DATABASE_URL="postgresql://postgres.PROJECT_REF:SENHA@REGION.pooler.supabase.com:5432/postgres?schema=public"
   ```

## Aplicar a migração existente no Supabase

Com a `DATABASE_URL` do Supabase configurada no `.env`, instale as dependências, valide a configuração e aplique somente as migrações já existentes no repositório:

```bash
npm install
npm run prisma:generate
npx prisma validate
npm run prisma:deploy
```

O comando `npm run prisma:deploy` executa `prisma migrate deploy`: ele aplica somente migrações pendentes existentes em `prisma/migrations`, sem gerar uma nova migração e sem resetar o banco. Revise as migrações pendentes antes de executá-lo em produção.

## Executar a aplicação

Após configurar o banco e aplicar a migração existente:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

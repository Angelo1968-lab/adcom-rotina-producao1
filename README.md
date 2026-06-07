# ADCOM Rotina de Produção 1.0

Sistema de gestão da rotina de produção da ADCOM. Nesta primeira fase, o projeto contém somente o módulo de clientes.

## Tecnologias

- Next.js com TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL

## Como executar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Copie o arquivo de ambiente e configure a conexão com o PostgreSQL:

   ```bash
   cp .env.example .env
   ```

3. Crie e aplique a migração inicial:

   ```bash
   npm run prisma:migrate -- --name init
   ```

4. Inicie o projeto:

   ```bash
   npm run dev
   ```

A aplicação estará disponível em `http://localhost:3000`.

# 🌳 API de Linktree Pessoal

Uma API RESTful simples, construída com Node.js, Express, Prisma e TypeScript, que permite a um usuário gerenciar uma lista de links pessoais, similar ao Linktree.

---

### Status do Projeto
(✅ Finalizado!)

---

### ✨ Funcionalidades

* **CRUD** completo de Links:
    * `GET /links`: Listar todos os links cadastrados.
    * `POST /links`: Criar um novo link (título e URL).
    ```
    {
        "title": "Meu Link",
        "url": "https://meulink.com"
    }
    ```
    * `GET /links/id`: Listar um link.
    * `PUT /links/:id`: Atualizar um link (título ou URL).
    * `DELETE /links/:id`: Deletar um link.

---

### 🛠️ Tecnologias Utilizadas

* [Node.js](https://nodejs.org/en/)
* [TypeScript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/pt-br/)
* [MySQL (com driver `mysql2`)](https://github.com/sidorares/node-mysql2)
* [DotEnv](https://github.com/motdotla/dotenv)
* [CORS](https://github.com/expressjs/cors)
* [Prisma](https://www.prisma.io/)

---

### 📂 Estrutura de Pastas
```
api-linktree-pessoal/
├── prisma/             # Configurações do Banco e Schema
├── src/
│   ├── controllers/    # Lógica de recebimento das requisições (Req/Res)
│   ├── services/       # Regras de negócio e chamadas ao banco
│   ├── routes/         # Definição das rotas da API
│   ├── lib/            # Configuração do cliente Prisma
│   ├── utils/          # Utilitários (Padronização de respostas HTTP)
│   ├── app.ts          # Configuração do Express
│   └── server.ts       # Inicialização do Servidor
└── ...
```

### 🚀 Como Rodar o Projeto Localmente

Siga os passos abaixo para executar a API em sua máquina.

**1. Clone o repositório:**
```bash
# Clone este repositório
git clone git@github.com:RiqueBruno/api-linktree-pessoal.git

# Entre na pasta do projeto
cd api-linktree-pessoal

# Instale as dependências
npm install

# Configure o .env
PORT=3333
DATABASE_URL="mysql://dev:senha@localhost:3306/nomeBD"

#Configure o Banco de Dados (Prisma)
npx prisma generate
npx prisma db push

#Inicie o Servidor ("http://localhost:3333")
npm run dev

```

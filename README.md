# 🌳 API de Linktree Pessoal

Uma API RESTful simples, construída com Node.js, Express, Prisma e TypeScript, que permite a um usuário gerenciar uma lista de links pessoais, similar ao Linktree.

---

### Status do Projeto
(✅ Finalizado!)

---

### ✨ Funcionalidades

* **CRUD** completo de Links:
    * `POST /links`: Criar um novo link (título e URL).
    * `GET /links`: Listar todos os links cadastrados.
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

### 🚀 Como Rodar o Projeto Localmente

Siga os passos abaixo para executar a API em sua máquina.

**1. Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/api-linktree-pessoal.git
cd api-linktree-pessoal
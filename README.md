# CRUD Fullstack - Cadastro de Usuários

Aplicação web fullstack para gerenciamento de usuários (cadastro, listagem, atualização e exclusão), desenvolvida como trabalho da disciplina de Análise e Desenvolvimento de Sistemas.

## Contexto

O projeto utiliza o contexto de **cadastro de usuários**. Cada usuário possui:
- `id` (numérico, gerado automaticamente)
- `nome`
- `sobrenome`

---

## Arquitetura

O projeto segue uma arquitetura **cliente-servidor** com separação clara entre frontend e backend.

### Visão geral

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND (React)                          │
│  localhost:3001                                                  │
└────────────────────────────┬────────────────────────────────────┘
                             │ HTTP (Axios)
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                        BACKEND (Node.js + Express)                │
│  localhost:3000                                                  │
└────────────────────────────┬────────────────────────────────────┘
                             │ fs.readFileSync / fs.writeFileSync
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                        PERSISTÊNCIA (JSON)                       │
│  backend/data/users.json                                         │
└─────────────────────────────────────────────────────────────────┘
```

### Frontend

O frontend é organizado em três camadas principais:

| Pasta | Responsabilidade |
|-------|------------------|
| `components/` | Componentes reutilizáveis de layout (Header, Nav, Footer) |
| `pages/` | Telas por funcionalidade (listar, cadastrar, atualizar, deletar, buscar por ID) |
| `handle*.js` | Funções para chamadas HTTP com Axios (isoladas dos componentes visuais) |

**Estrutura de pastas:**

```
frontend/frontss/src/
├── components/
│   ├── header/
│   ├── nav/
│   └── footer/
├── pages/
│   ├── section/        # Página inicial
│   ├── select/         # Listar todos os usuários
│   ├── select_id/      # Buscar usuário por ID
│   ├── insert/         # Cadastrar novo usuário
│   ├── update/         # Atualizar usuário
│   └── deletar/        # Deletar usuário
├── App.js
└── index.js
```

**Decisões técnicas:**
- **React Router DOM** para navegação entre telas (sem recarregar a página)
- **Axios** para requisições HTTP (GET, POST, PUT, DELETE)
- **arquivos `handle*.js`** separados dos componentes para manter a lógica de API isolada da UI
- **CSS simples** por página (sem framework CSS)

### Backend

O backend segue o padrão **MVC simplificado** com rotas e utilitários separados:

| Pasta/Arquivo | Responsabilidade |
|---------------|-------------------|
| `server.js` | Configuração do Express, CORS, middlewares e montagem das rotas |
| `routes/` | Definição das rotas da API REST |
| `utils/fileHandler.js` | Leitura e escrita no arquivo JSON (abstração do `fs`) |
| `data/users.json` | Persistência dos dados |

**Estrutura de pastas:**

```
backend/
├── server.js
├── routes/
│   └── user.routes.js
├── utils/
│   └── fileHandler.js
└── data/
    └── users.json
```

**Decisões técnicas:**
- **FileSync** (`fs.readFileSync` / `fs.writeFileSync`) para persistência síncrona
- **fileHandler** centraliza acesso ao JSON — as rotas não acessam o arquivo diretamente
- **CORS** configurado para aceitar requisições apenas do frontend (`http://localhost:3001`)

---

## Instalação

### Pré-requisitos

- Node.js (v18 ou superior)
- npm

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd frontend/frontss
npm install
```

---

## Execução

### 1. Iniciar o backend

```bash
cd backend
node server.js
```

O servidor estará disponível em **http://localhost:3000**

### 2. Iniciar o frontend

```bash
cd frontend/frontss
npm start
```

A aplicação abrirá em **http://localhost:3001**

> **Importante:** O backend deve estar rodando antes de usar o frontend.

---

## Portas utilizadas

| Serviço | Porta |
|---------|-------|
| Backend (API) | 3000 |
| Frontend (React) | 3001 |

---

## Rotas da API

Base: `http://localhost:3000/usuarios`

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/listar_usuarios` | Retorna todos os usuários |
| GET | `/listar_usuarios/:id` | Retorna um usuário pelo ID |
| POST | `/cadastrar_usuarios` | Cadastra novo usuário |
| PUT | `/atualizar_usuarios/:id` | Atualiza usuário pelo ID |
| DELETE | `/deletar_usuarios/:id` | Remove usuário pelo ID |

### Exemplos de requisição

**POST /cadastrar_usuarios**
```json
{
  "nome": "Ana",
  "sobrenome": "Silva"
}
```

**PUT /atualizar_usuarios/:id**
```json
{
  "nome": "Ana Maria",
  "sobrenome": "Silva Souza"
}
```

---

## Rotas do frontend

| Rota | Página |
|------|--------|
| `/` | Página inicial |
| `/usuarios` | Listar todos os usuários |
| `/usuarios/buscar` | Buscar usuário por ID |
| `/cadastrar` | Cadastrar novo usuário |
| `/atualizar` | Atualizar usuário |
| `/deletar` | Deletar usuário |

---

## Tecnologias

- **Frontend:** React 19, Axios, React Router DOM, CSS
- **Backend:** Node.js, Express 5, CORS
- **Persistência:** JSON com `fs.readFileSync` e `fs.writeFileSync`

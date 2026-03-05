# Trabalho 01 - CRUD Fullstack (ADS)

## 0) Definicao do contexto (obrigatorio)
Antes de iniciar o desenvolvimento, o grupo/aluno deve escolher **um contexto de negocio** para o CRUD.

Exemplos de contexto:
- cadastro de produtos
- cadastro de clientes
- cadastro de livros
- cadastro de veiculos
- cadastro de chamados

Regra:
1. O contexto escolhido deve ser mantido em todas as telas e rotas do projeto.
2. Nao sera aceito projeto sem contexto definido.

## 1) Contexto
Este e o primeiro trabalho da disciplina de Analise e Desenvolvimento de Sistemas.
O foco principal e praticar:
- arquitetura (frontend e backend com responsabilidades separadas),
- criacao de rotas CRUD,
- consumo de API interna (frontend -> backend) com Axios.

## 2) Objetivo do trabalho
Construir uma aplicacao web fullstack para gerenciamento de registros do **contexto escolhido**, com:
- **Frontend:** React + Axios + CSS simples;
- **Backend:** Node.js + Express + persistencia em arquivo JSON com `fs.readFileSync` e `fs.writeFileSync`.

## 3) Tecnologias obrigatorias
1. Frontend
- React
- Axios
- React Router (para navegacao entre telas)
- CSS simples (layout clean)

2. Backend
- Node.js
- Express
- FileSync (`fs.readFileSync` / `fs.writeFileSync`)
- Arquivo JSON como base de dados local

## 4) Requisitos funcionais obrigatorios
A aplicacao deve permitir:
1. **Listar** registros cadastrados.
2. **Cadastrar** novo registro.
3. **Atualizar** registro existente.
4. **Deletar** registro.

Recomendado (seguindo o exemplo do projeto):
1. Buscar registro por ID antes de atualizar/deletar.
2. Exibir mensagens de sucesso/erro ao usuario.

## 5) Separacao de responsabilidades (obrigatorio)
### Frontend
- `components/`: elementos reutilizaveis de layout (ex.: Header, Nav, Footer).
- `pages/`: telas por funcionalidade (listar, cadastrar, atualizar, deletar).
- `handle*.js`: funcoes de chamada HTTP com Axios (separadas dos componentes visuais).
- Componentes React focados em estado, formulario e renderizacao.

### Backend
- `server.js`: configuracao do servidor e middlewares (`express.json`, `cors`).
- `routes/`: definicao das rotas da API.
- `utils/fileHandler.js`: leitura e escrita no arquivo JSON.
- `data/users.json`: persistencia dos dados.

Regra de arquitetura:
1. Nao colocar chamada Axios dentro de componentes que nao sao de pagina.
2. Nao acessar arquivo JSON direto na rota; usar o `fileHandler`.
3. Nao misturar HTML/CSS com regras de persistencia.

## Estrutura minima sugerida
```text
backend/
  server.js
  routes/
    user.routes.js
  utils/
    fileHandler.js
  data/
    users.json

frontend/
  src/
    components/
    pages/
      select/
      select_id/
      insert/
      update/
      deletar/
```

## 6) Rotas obrigatorias da API
Base da API: `http://localhost:3000/<entidade>`

Observacao:
1. A entidade deve refletir o contexto escolhido (ex.: `produtos`, `clientes`, `livros`).
2. O padrao abaixo usa `usuarios` apenas como **exemplo**.

1. `GET /listar_usuarios`
- Retorna todos os registros.

2. `POST /cadastrar_usuarios`
- Cadastra novo registro.
- Body JSON esperado:
```json
{
  "nome": "Ana",
  "sobrenome": "Silva"
}
```

3. `PUT /atualizar_usuarios/:id`
- Atualiza registro pelo ID.
- Body JSON esperado:
```json
{
  "nome": "Ana Maria",
  "sobrenome": "Silva Souza"
}
```

4. `DELETE /deletar_usuarios/:id`
- Remove registro pelo ID.

Rota complementar recomendada:
1. `GET /listar_usuarios/:id`
- Busca registro especifico.

## 7) Requisitos de interface (CSS simples + layout clean)
- Interface limpa, legivel e organizada.
- Uso de formulario claro (labels, inputs e botoes visiveis).
- Estrutura com navegacao entre telas.
- Padrao visual consistente (cores, espacamentos, tipografia).
- Sem necessidade de framework CSS (Bootstrap/Tailwind nao obrigatorios).

## 8) Criterios de avaliacao (sugestao)
Pontuacao total: **100 pontos**

1. Arquitetura e separacao de responsabilidades - **25 pts**
2. Backend Node + Express + FileSync funcionando - **20 pts**
3. Rotas CRUD obrigatorias funcionando - **20 pts**
4. Frontend React + Axios integrado com backend - **20 pts**
5. Interface CSS simples e layout clean - **10 pts**
6. Organizacao do projeto e clareza de codigo - **5 pts**

Criterios de aceite:
1. Se faltar qualquer rota CRUD obrigatoria, o trabalho e considerado incompleto.
2. Se frontend nao consumir backend via Axios, o trabalho e considerado incompleto.
3. Se nao houver separacao minima entre `routes` e `utils` no backend, perde nota de arquitetura.

## 9) Bonus (ate +10 pts)
Exibir na **tela inicial** o consumo de **uma API externa**, com informacoes basicas:

Opcao A:
- OpenWeather: `https://openweathermap.org/api`

Opcao B:
- AwesomeAPI:
`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL`

Se escolher AwesomeAPI, mostrar no minimo:
1. cotacao USD-BRL (`bid`),
2. cotacao EUR-BRL (`bid`),
3. cotacao BTC-BRL (`bid`),
4. variacao percentual (`pctChange`) de pelo menos 1 moeda.

Boas praticas no bonus:
- mostrar estado de carregamento,
- tratar erro de requisicao,
- informar data/hora de atualizacao quando disponivel.

## 10) Entrega esperada
1. Projeto em repositorio com pastas separadas:
- `backend/`
- `frontend/`

2. Entregavel obrigatorio no GitHub:
- link do repositorio publico ou privado (conforme orientacao do professor),
- historico de commits coerente com o desenvolvimento do trabalho.

3. `README.md` com:
- contexto escolhido para o projeto,
- arquitetura adotada (frontend e backend),
- principais decisoes tecnicas tomadas no desenvolvimento,
- como instalar dependencias,
- como executar backend e frontend,
- portas utilizadas,
- lista de rotas da API.

4. Demonstracao em sala (ou video curto), mostrando:
- fluxo completo de cadastro, listagem, atualizacao e exclusao,
- funcionamento do bonus (se implementado).

## 11) Checklist final do aluno
Antes de entregar, confirme:
1. CRUD completo funcionando.
2. Axios consumindo API corretamente.
3. Backend gravando/atualizando no JSON via FileSync.
4. Frontend e backend com responsabilidades separadas.
5. Layout simples, limpo e navegavel.
6. Projeto executa sem erros.

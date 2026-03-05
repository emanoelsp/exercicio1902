# Trabalho 01 - CRUD Fullstack (ADS)

## 0) Definição do contexto (obrigatório)
Antes de iniciar o desenvolvimento, o grupo/aluno deve escolher **um contexto de negócio** para o CRUD.

Exemplos de contexto:
- cadastro de produtos;
- cadastro de clientes;
- cadastro de livros;
- cadastro de veículos;
- cadastro de chamados.

Regras:
1. O contexto escolhido deve ser mantido em todas as telas e rotas do projeto.
2. Não será aceito projeto sem contexto definido.

## 1) Contexto
Este é o primeiro trabalho da disciplina de Análise e Desenvolvimento de Sistemas.
O foco principal é praticar:
- arquitetura (frontend e backend com responsabilidades separadas);
- criação de rotas CRUD;
- consumo de API interna (frontend -> backend) com Axios.

## 2) Objetivo do trabalho
Construir uma aplicação web fullstack para gerenciamento de registros do **contexto escolhido**, com:
- **Frontend:** React + Axios + CSS simples;
- **Backend:** Node.js + Express + persistência em arquivo JSON com `fs.readFileSync` e `fs.writeFileSync`.

## 3) Tecnologias obrigatórias
1. Frontend:
- React;
- Axios;
- React Router DOM (para navegação entre telas);
- CSS simples (layout clean).

2. Backend:
- Node.js;
- Express;
- FileSync (`fs.readFileSync` / `fs.writeFileSync`);
- arquivo JSON como base de dados local.

## 4) Requisitos funcionais obrigatórios
A aplicação deve permitir:
1. **Listar** registros cadastrados.
2. **Cadastrar** novo registro.
3. **Atualizar** registro existente.
4. **Deletar** registro.

Recomendado (seguindo o exemplo do projeto):
1. Buscar registro por ID antes de atualizar/deletar.
2. Exibir mensagens de sucesso/erro ao usuário.

## 5) Separação de responsabilidades (obrigatório)
### Frontend
- `components/`: elementos reutilizáveis de layout (ex.: Header, Nav e Footer);
- `pages/`: telas por funcionalidade (listar, cadastrar, atualizar e deletar);
- `handle*.js`: funções de chamada HTTP com Axios (separadas dos componentes visuais);
- componentes React focados em estado, formulário e renderização.

### Backend
- `server.js`: configuração do servidor e middlewares (`express.json`, `cors`);
- `routes/`: definição das rotas da API;
- `utils/fileHandler.js`: leitura e escrita no arquivo JSON;
- `data/<entidade>.json`: persistência dos dados.

Regras de arquitetura:
1. Não colocar chamadas Axios dentro de componentes que não sejam de página.
2. Não acessar arquivo JSON diretamente nas rotas; usar o `fileHandler`.
3. Não misturar HTML/CSS com regras de persistência.

## Estrutura mínima sugerida
```text
backend/
  server.js
  routes/
    <entidade>.routes.js
  utils/
    fileHandler.js
  data/
    <entidade>.json

frontend/
  src/
    components/
    pages/
      list/
      create/
      update/
      delete/
```

## 6) Rotas obrigatórias da API
Base da API: `http://localhost:3000/<entidade>`

Observações:
1. A entidade deve refletir o contexto escolhido (ex.: `produtos`, `clientes`, `livros`).
2. O padrão abaixo usa `usuarios` apenas como **exemplo**.

1. `GET /listar_usuarios`
- Retorna todos os registros.

2. `POST /cadastrar_usuarios`
- Cadastra novo registro.
- Body JSON esperado (exemplo):
```json
{
  "nome": "Ana",
  "sobrenome": "Silva"
}
```

3. `PUT /atualizar_usuarios/:id`
- Atualiza registro pelo ID.
- Body JSON esperado (exemplo):
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
- Busca registro específico.

## 7) Requisitos de interface (CSS simples + layout clean)
- Interface limpa, legível e organizada;
- uso de formulário claro (labels, inputs e botões visíveis);
- estrutura com navegação entre telas;
- padrão visual consistente (cores, espaçamentos e tipografia);
- sem necessidade de framework CSS (Bootstrap/Tailwind não obrigatórios).

## 8) Critérios de avaliação (sugestão)
Pontuação total: **100 pontos**

1. Arquitetura e separação de responsabilidades - **25 pts**
2. Backend Node + Express + FileSync funcionando - **20 pts**
3. Rotas CRUD obrigatórias funcionando - **20 pts**
4. Frontend React + Axios integrado com backend - **20 pts**
5. Interface CSS simples e layout clean - **10 pts**
6. Organização do projeto e clareza de código - **5 pts**

Critérios de aceite:
1. Se faltar qualquer rota CRUD obrigatória, o trabalho é considerado incompleto.
2. Se o frontend não consumir o backend via Axios, o trabalho é considerado incompleto.
3. Se não houver separação mínima entre `routes` e `utils` no backend, perde nota de arquitetura.

## 9) Bônus (até +10 pts)
Exibir na **tela inicial** o consumo de **uma API externa**, com informações básicas:

Opção A:
- OpenWeather: `https://openweathermap.org/api`

Opção B:
- AwesomeAPI: `https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL`

Se escolher AwesomeAPI, mostrar no mínimo:
1. cotação USD-BRL (`bid`);
2. cotação EUR-BRL (`bid`);
3. cotação BTC-BRL (`bid`);
4. variação percentual (`pctChange`) de pelo menos 1 moeda.

Boas práticas no bônus:
- mostrar estado de carregamento;
- tratar erro de requisição;
- informar data/hora de atualização, quando disponível.

## 10) Entrega esperada
1. Projeto em repositório com pastas separadas:
- `backend/`
- `frontend/`

2. Entregável obrigatório no GitHub:
- link do repositório público ou privado (conforme orientação do professor);
- histórico de commits coerente com o desenvolvimento do trabalho.

3. `README.md` com:
- contexto escolhido para o projeto;
- arquitetura adotada (frontend e backend);
- principais decisões técnicas tomadas no desenvolvimento;
- como instalar dependências;
- como executar backend e frontend;
- portas utilizadas;
- rotas do frontend com React Router DOM (página/rota e finalidade de cada uma);
- rotas da API do backend (método HTTP, caminho da rota e objetivo);
- explicação do gerenciamento de estado no frontend (ex.: `useState`, `useEffect`, fluxo de dados e atualização da tela).

4. Demonstração em sala (ou vídeo curto), mostrando:
- fluxo completo de cadastro, listagem, atualização e exclusão;
- funcionamento do bônus (se implementado).

## 11) Checklist final do aluno
Antes de entregar, confirme:
1. CRUD completo funcionando.
2. Axios consumindo API corretamente.
3. Backend gravando/atualizando no JSON via FileSync.
4. Frontend e backend com responsabilidades separadas.
5. Layout simples, limpo e navegável.
6. Projeto executa sem erros.

// HTTP => Protocolo de comunicação
// Request => Requisição feita pelo cliente
// Response => Resposta retornada pelo servidor
// URL => http://localhost:3000
// GET, POST, PUT, PATCH, DELETE

// GET => Buscar uma informação
// POST => Inserir uma informação
// PUT => Alterar uma informação
// PATCH => Alterar uma informação específica
// DELETE => Deletar uma informação

// Stateful and Stateless
// Cabeçalho (requisições/repostas) => Metadados
// HTTP Status Code
// STATUS CODE => 1XX, 2XX, 3XX, 4XX, 5XX

// estudar 2 8 10 16
binário
octal
decimal
hexadecimal
encode
decode
char


There is 3 ways to send data to API:
* Query Parameters => URL Stateful, it is used to filter, for pagination. NOTE: you cannot put in sensible data.
  e.g: https://localhost:3333/users?userId=1
  url: https://localhost:3333
  key: userId
  valueL 1

* Route Parameters => It is used to identify resources.  NOTE: you cannot put in sensible data.
  e.g: https://localhost:3333/users/1
  url: https://localhost:3333
  route: /users/
  value: 1

* Request Body => It used to send data by body.
mudar
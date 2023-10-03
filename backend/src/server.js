'use strict'

const http = require("http");

const app = require("./app");

const port = 3004;
const server = http.createServer(app);
server.listen(port);

console.log(`Servidor ativo na porta ${port}`);
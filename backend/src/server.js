'use strict'

const http = require("http");
const dotenv = require('dotenv');

dotenv.config();

const app = require("./app");

const port = process.env.PORT || 3004;
const server = http.createServer(app);
server.listen(port);

console.log(`Servidor ativo na porta ${port}`);
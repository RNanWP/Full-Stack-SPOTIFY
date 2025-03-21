//  API significa Application Programing Interface
// POST, GET, PUT, DELETE
// CRUD - Create, Read, Update e Delete
// Endpoint
// "Cd pasta do back
//     - node --watch ./"

import express from "express";
import { artistArray } from "../../front-end/src/assets/database/artists.js";

const app = express();
const PORT = 3003;

app.get("/", (request, response) => {
  response.send("Olá Mundo! Agora não preciso fica atualizando!");
});

app.get("/artists", (request, response) => {
  response.send("artistArray");
});

app.get("/songs", (request, response) => {
  response.send("Olá Mundo! Agora não preciso fica atualizando!");
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});

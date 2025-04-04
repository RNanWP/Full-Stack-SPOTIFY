//  API significa Application Programing Interface
// POST, GET, PUT, DELETE
// CRUD - Create, Read, Update e Delete
// Endpoint
// "Cd pasta do back
//     - node --watch ./"

import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3003;

app.use(cors());

app.get("/", (request, response) => {
  response.send("Olá Mundo! Agora não preciso fica atualizando!");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});

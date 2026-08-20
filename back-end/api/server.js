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
const PORT = process.env.PORT || 3003;

app.use(cors());

app.get("/", (request, response) => {
  response.send("Olá Mundo! Agora não preciso fica atualizando!");
});

app.get("/artists", async (request, response) => {
  try {
    response.json(await db.collection("artists").find({}).toArray());
  } catch (error) {
    console.error("Erro ao buscar artistas:", error);
    response.status(500).json({ error: "Não foi possível buscar os artistas." });
  }
});

app.get("/songs", async (request, response) => {
  try {
    response.json(await db.collection("songs").find({}).toArray());
  } catch (error) {
    console.error("Erro ao buscar músicas:", error);
    response.status(500).json({ error: "Não foi possível buscar as músicas." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});

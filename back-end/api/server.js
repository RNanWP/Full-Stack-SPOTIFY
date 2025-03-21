//  API significa Application Programing Interface
import express from "express";

const app = express();
const PORT = 3003;

app.listen(PORT, () => console.log(`Servidor está escutando na porta ${PORT}`));

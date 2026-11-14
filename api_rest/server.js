import app from "./app.js";

const port = 3001;

// Escuta as requisições
app.listen(port, () => {
  console.log("Server escutando na porta:", port);
  console.log("CRTL + Click para acessar:", `http://localhost:${port}`);
});

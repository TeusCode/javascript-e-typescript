require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Conecta ao banco de dados Mongoose
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("pronto");//Quando conectado, emite o sinal pronto
    console.log('CONEXÂO EFETUADA!')
  })
  .catch((e) => {
    console.log(e);
  });

const routes = require("./routes");

const port = 3000;

//Avisa o express, que precisa tratar o req.body (os posts)
app.use(express.urlencoded({ extended: true }));

app.set("views", "./src/views"); //Seta qual o caminho da pasta views
app.set("view engine", "ejs"); //Seta qual engine o express deve utilizar

app.use(express.static("public")); //Adiciona a pasta de arquivos estáticos

app.use(routes); //Define para que o express utilize as minhas rotas

app.on("pronto", () => { //Recebe o sinal de pronto e inicia o servidor depois da conexão ao banco de dados!
  app.listen(port, () => {
    console.log("Acessar Home: http://localhost:3000");
    console.log(`Servidor rodando na porta ${port}`);
  });
});

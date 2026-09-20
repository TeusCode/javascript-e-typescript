require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Conecta ao banco de dados
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("pronto");//Sinaliza conexão com o banco
    console.log('CONEXÂO EFETUADA!')
  })
  .catch((e) => {
    console.log(e);
  });

//Importar Sessão
const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const flash = require('connect-flash');


const routes = require("./routes");
const port = 3000;

//Avisa o express, que precisa tratar o req.body (os posts)
app.use(express.urlencoded({ extended: true }));

app.set("views", "./src/views"); //Seta qual o caminho da pasta views
app.set("view engine", "ejs"); //Seta qual engine o express deve utilizar

app.use(express.static("public")); //Adiciona a pasta de arquivos estáticos

//Configura sessão:
const sessionOptions = session({
  secret: 'jwojwidjiwdiidw ojwodjwjwodj iooiiuoh ihiu78 t766g6g6',
  store: MongoStore.create({ client: mongoose.connection.getClient() }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  }
});

// Inicializa o middleware de sessão usando as opções definidas em sessionOptions 
// (permite salvar dados do usuário, como o login, entre as requisições)
app.use(sessionOptions);
app.use(flash());

app.use(routes); //Define para que o express utilize as minhas rotas

app.on("pronto", () => {//Recebe o sinal que o banco de dados foi conectado, e inicia o servidor!
  app.listen(port, () => {
    console.log("Acessar Home: http://localhost:3000");
    console.log(`Servidor rodando na porta ${port}`);
  });
});

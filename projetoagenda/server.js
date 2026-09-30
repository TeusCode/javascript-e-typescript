require('dotenv').config(); //Inicia a configuração do dotenv (Variáveis de ambiente)

const chalk = require('chalk')
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Conecta ao banco de dados
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("pronto");//Sinaliza conexão com o banco
    console.log(chalk.yellow('Conexão com banco de dados realizada com sucesso!'))
  })
  .catch((e) => {
    console.log(e);
  });

//Importar Sessão
const session = require('express-session');
const MongoStore = require('connect-mongo').default;//Utilizado para salvar a sessão no BD, ao invés de lotar a memória ram do sv, com as sessões
const flash = require('connect-flash');//Mensagens auto destrutivas (flash messages)(São salvas na sessão)

//Rotas
const routes = require("./routes");
const port = 3000;

//Imports Middleswares
const { middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware');
const helmet = require('helmet');//Importa o helmet (configura headers) (Recomendação do express)
const csrf = require('csurf');//Cria tokens para nossos formulários, para válidação (Impede que outros sites, consigam postar na nossa aplicação)

//Avisa o express, que precisa tratar o req.body (os posts)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());//Parsed de Json para dentro da aplicação
app.use(express.static("public")); //Adiciona a pasta de arquivos estáticos
app.use('/frontend', express.static('frontend'));

//Configura sessão:
const sessionOptions = session({
  secret: 'jwojwidjiwdiidw ojwodjwjwodj iooiiuoh ihiu78 t766g6g6',//Assinar cookie de sessão
  store: MongoStore.create({ client: mongoose.connection.getClient() }),//Onde salvar a sessão
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,//Tempo de vida do cookie
    httpOnly: true,
  }
});

app.set("views", "./src/views"); //Seta qual o caminho da pasta views
app.set("view engine", "ejs"); //Seta qual engine o express deve utilizar

// Inicializa o middleware de sessão usando as opções definidas em sessionOptions 
// (permite salvar dados do usuário, como o login, entre as requisições)
app.use(sessionOptions);
app.use(flash());
app.use(helmet());//Protege o ambiente do navegador
app.use(csrf());//Injeta um token nas páginas, para garantir que a requisição venha mesmo do nosso servidor

//Middlewares
app.use(csrfMiddleware);
app.use(middlewareGlobal);
app.use(checkCsrfError);

app.use(routes); //Define para que o express utilize as minhas rotas

app.on("pronto", () => {//Recebe o sinal que o banco de dados foi conectado, e inicia o servidor!
  app.listen(port, () => {
    console.log(chalk.blue("Acessar Home: http://localhost:3000"));
    console.log(chalk.green(`Servidor rodando na porta ${port}`));
  });
});

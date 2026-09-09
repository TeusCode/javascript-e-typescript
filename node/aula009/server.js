const express = require('express');
const app = express();
const routes = require('./routes');

const port = 3000;

//Avisa o express, que precisa tratar o req.body (os posts)
app.use(express.urlencoded({extended:true}));

app.use(routes);//Define para que o express utilize as minhas rotas

app.listen(port, () => {
    console.log("Acessar Home: http://localhost:3000");
    console.log(`Servidor rodando na porta ${port}`)
});
const express = require('express');
const app = express();
const routes = require('./routes');

const port = 3000;

//Avisa o express, que precisa tratar o req.body (os posts)
app.use(express.urlencoded({extended:true}));

//Todas as requisições vão passar por ele
app.use((req,res,next)=>{
    if(req.body){
        console.log('REQUISIÇÂO GLOBAL COM IF E ELSE')
        console.log(`O seu nome é ${req.body.name}`);
    }
    next();
})

app.set('views','./src/views');//Seta qual o caminho da pasta views
app.set('view engine','ejs');//Seta qual engine o express deve utilizar

app.use(express.static('public'));//Adiciona a pasta de arquivos estáticos

app.use(routes);//Define para que o express utilize as minhas rotas

app.listen(port, () => {
    console.log("Acessar Home: http://localhost:3000");
    console.log(`Servidor rodando na porta ${port}`)
});
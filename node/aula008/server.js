//      CRIAR    LER   ATUALIZAR  APAGAR
//        C       R      U          D
//      CREATE,  READ, UPDATE,    DELETE
//      POST     GET   PUT        DELETE

const express = require('express');
const app = express();

const port = 3000;

//Avisa o express, que precisa tratar o req.body (os posts)
app.use(express.urlencoded({extended:true}));

app.get('/profiles/:id/', (req, res) => {
   console.log(req.params);
   res.send(req.query);
});

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            nome: <input name="name" type="text"> </input>
            sobrenome: <input name="surname" type="text"> </input>
            <button> Enviar Formulário </button> 
        </form>`
    );
});

app.post('/', (req, res) => {
    res.send('Formulário enviado');
    console.log(req.body);
});

app.listen(port, () => {
    console.log("Acessar Home: http://localhost:3000");
    console.log(`Servidor rodando na porta ${port}`)
});
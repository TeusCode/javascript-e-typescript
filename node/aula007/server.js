//      CRIAR    LER   ATUALIZAR  APAGAR
//        C       R      U          D
//      CREATE,  READ, UPDATE,    DELETE
//      POST     GET   PUT        DELETE

const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            nome: <input type="text"> </input>
            <button> Enviar Formulário </button> 
        </form`
    )
});

app.post('/', (req, res) => {
    res.send("Formulário enviado com sucesso!");
});

app.listen(port, () => {
    console.log("Acessar Home: http://localhost:3000");
    console.log(`Servidor rodando na porta ${port}`)
});


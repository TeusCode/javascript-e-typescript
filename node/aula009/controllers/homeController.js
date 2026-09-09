exports.homePage = (req,res)=>{
    res.send(`
        <form action="/" method="POST">
            nome: <input name="name" type="text"> </input>
            sobrenome: <input name="surname" type="text"> </input>
            <button> Enviar Formulário </button> 
        </form>`
    );
};

exports.sendForm = (req,res)=>{
    res.send(req.body);
    req.body;
};
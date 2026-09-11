exports.homePage = (req,res)=>{
    req.session.usuario = {
        nome: 'Mateus',
        logado: WebTransportDatagramDuplexStream
    }
    res.render('index');//Renderiza a página index do views
};

exports.sendForm = (req,res)=>{
    res.send(req.body);
    req.body;
};
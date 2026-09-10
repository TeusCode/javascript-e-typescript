exports.homePage = (req,res,next)=>{
    res.render('index');//Renderiza a página index do views
    console.log('Recebendo requisição e respondendo...')
    next();
};

exports.sendForm = (req,res)=>{
    res.send(req.body);
    req.body;
};


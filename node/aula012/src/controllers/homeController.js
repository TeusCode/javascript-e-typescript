exports.homePage = (req,res)=>{
    res.render('index');//Renderiza a página index do views
};

exports.sendForm = (req,res)=>{
    res.send(req.body);
    req.body;
};
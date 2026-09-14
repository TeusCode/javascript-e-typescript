exports.homePage = (req,res)=>{
    req.session.usuario = {
        nome: 'Mateus',
        logado: true
    }
    //O objeto mandado junto, podemos injetar seus dados na view
    res.render('index',{
        titulo: 'Esse será o título da página!',
        numeros: [1,2,3,4,5,6,7,8,9],
    });//Renderiza a página index do views
};

exports.sendForm = (req,res)=>{
    res.send(req.body);
    req.body;
};
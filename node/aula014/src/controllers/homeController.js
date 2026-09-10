const HomeModel = require('../models/HomeModel');
const UserModel = require('../models/UserModel');

//Models
//Inserindo dados
HomeModel.create({
    titulo: 'Titulo de teste2',
    descricao: 'Descrição de testes2'
})
    .then((dados)=>{
        console.log(dados);
    })
    .catch(e=>console.log(e));

UserModel.create({
    user:'Pedro',
    email: 'Pedro@gmail.com',
    age: 32
})
    .then((dados)=>{
        console.log(dados);
    })
    .catch(e=>console.log(e));


exports.homePage = (req,res)=>{
    res.render('index');//Renderiza a página index do views
};

exports.sendForm = (req,res)=>{
    res.send(req.body);
    req.body;
};
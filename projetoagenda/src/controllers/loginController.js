const Login = require('../models/LoginModel');
const chalk = require('chalk');

exports.index = (req,res)=>{
    res.render('login');
};
//Registra user
exports.register = async (req,res)=>{
    try{
        const login = new Login(req.body);
        await login.register();//Chama  a função de registrar

        if(login.erros.length > 0){
            req.flash('erros', login.erros);
            req.session.save(()=>{// Salva a Sessão que no momento, só tem os dados dos flashs, para que eles não se percam, quando for redirecionada a rota
        })
        return res.redirect('/login/index');
        ;}
            console.log(chalk.bgGreen('Usuário criado com sucesso!'));
            req.flash('success', 'Seu usuário, foi criado com sucesso!');
            req.session.save(()=>{// Salva a Sessão que no momento, só tem os dados dos flashs, para que eles não se percam, quando for redirecionada a rota
            return res.redirect('/login/index');
        });
    }catch(e){
        console.log(e);
        res.render('404');
    }
};
//Loga user
exports.login = async (req,res)=>{
    try{
        const login = new Login(req.body);
        await login.login();//Chama  a função de login

        if(login.erros.length > 0){
            req.flash('erros', login.erros);
            req.session.save(()=>{// Salva a Sessão que no momento, só tem os dados dos flashs, para que eles não se percam, quando for redirecionada a rota
        })
        return res.redirect('/login/index');
        ;}
            console.log(chalk.bgGreen('Usuário logado com sucesso!'));
            req.flash('success', 'Seu usuário, foi logado com sucesso!');
            req.session.user = login.user;
            req.session.save(()=>{
            return res.redirect('/');
        });
    }catch(e){
        console.log(e);
        res.render('404');
    }
};
//Desloga user
exports.logout = async (req,res)=>{
    console.log(chalk.bgGreen('Usuário deslogado com sucesso!'))
    req.session.destroy();
    res.redirect('/login/index/');  
}
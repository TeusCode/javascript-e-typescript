const Login = require('../models/LoginModel');

exports.index = (req,res)=>{
    res.render('login');
};

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

            req.flash('success', 'Seu usuário, foi criado com sucesso!');
            req.session.save(()=>{// Salva a Sessão que no momento, só tem os dados dos flashs, para que eles não se percam, quando for redirecionada a rota
            return res.redirect('/login/index');
        });
    }catch(e){
        console.log(e);
        res.render('404');
    }
};

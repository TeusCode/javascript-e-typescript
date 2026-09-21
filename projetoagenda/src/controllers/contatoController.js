const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
    res.render('contato');
};

exports.register = async (req, res) => {
    try {
        const contato = new Contato(req.body);//Instância obj com métodos de tratamento
        await contato.register();//Aguarda o register finalizar

        if (contato.erros.length > 0) {
            req.flash('erros', contato.erros);
            req.session.save(() => {
                return res.redirect('/');
            });
            return;
        }

        req.flash('success', "Contato registrado com sucesso!");
        req.session.save();
        res.redirect('/');
        return;
        
    } catch (e) {
        console.log(e);
        res.render('404');
    }
}
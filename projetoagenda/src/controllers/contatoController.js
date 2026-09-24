const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
    res.render('contato',{contato:{}}); //Renderiza a página, e passa um variável local, para uso futuro
};

exports.register = async (req, res) => {
    try {
        const contato = new Contato(req.body);//Instância obj com métodos de tratamento
        await contato.register();//Aguarda o register finalizar

        if (contato.erros.length > 0) {
            req.flash('erros', contato.erros);
            req.session.save(() => {
                return res.redirect(`/contato/index/`);
            });
            return;
        }

        req.flash('success', "Contato registrado com sucesso!");
        req.session.save();
        res.redirect(`/contato/index/${contato.contato._id}`);//Redireciona para uma página com o id como parametro
        return;
        
    } catch (e) {
        console.log(e);
        res.render('404');
    }
};

exports.editIndex = async (req,res)=>{
    if(!req.params.id) return res.render('404');//Verifica se foi mandado o parametro id na requisição
    const user = await Contato.buscaId(req.params.id);//Busca do BD, um obj com informações do id
    if(!user)  return res.render('404');

    res.render('contato',{ contato: user });//Renderiza a página e passa uma variável local para o view
};

exports.edit = async (req,res)=>{
    try{
        const contato = new Contato(req.body);

    if(!req.params.id) return res.render('404');
    const user = await Contato.buscaId(req.params.id);
    if(!user) return res.render('404');
    
    await contato.edit(req.params.id);

     if (contato.erros.length > 0){
        req.flash('erros', contato.erros);
        req.session.save();
        return res.redirect(`/contato/index`);
     }

     req.flash('success', "Cadastro editado com sucesso!");
     req.session.save();
     res.redirect(`/contato/index/${contato.contato._id}`)
     return;
    }catch(e){
        res.redirect('404');
        console.log(e);
    }
};

    exports.delete= async (req,res)=>{
        if(!req.params.id) return res.redirect('404');

        if(Contato.deletaContato(req.params.id)){
            req.flash('success', 'Contato deletado com sucesso!');
            req.session.save(()=>{
                res.redirect('/');
            })
        };
    };

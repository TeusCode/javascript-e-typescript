exports.middlewareGlobal = (req, res, next) => {
    //res.locals, no middleWare faz com que todas requisições recebam esse inject
    res.locals.erros = req.flash('erros');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;//Dados do usuário logado!
    next();
}

//Checa se deu erro de autenticação do código do CSRF
exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
        return res.render('404');
    }
}

//res.locals, no middleWare faz com que todas requisições recebam esse inject
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();//Cria um token para todas requisições
    next();
}

//Verifica se o usuário está logado
exports.loginRequired = (req, res, next) => {
    if (!req.session.user) {
        req.flash('erros', 'Você precisa fazer login');
        req.session.save(() => {
            res.redirect('/');
        });
        return;
    }
    next();
}
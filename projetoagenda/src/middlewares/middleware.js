exports.middlewareGlobal = (req,res,next)=>{
    //res.locals, no middleWare faz com que todas requisições recebam esse inject
    res.locals.erros = req.flash('erros');
    res.locals.success = req.flash('success');
    next();
}

//Checa se deu erro de autenticação do código do CSRF
exports.checkCsrfError = (err,req,res,next)=>{
    if(err){
        return res.render('404');
    }
}

//res.locals, no middleWare faz com que todas requisições recebam esse inject
exports.csrfMiddleware = (req,res,next) =>{
    res.locals.csrfToken = req.csrfToken();//Cria um token para todas requisições
    next();
}
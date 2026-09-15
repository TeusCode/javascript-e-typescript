exports.middlewareGlobal = (req,res,next)=>{
    //res.locals, no middleWare faz com que todas requisições recebam esse inject
    res.locals.variavelLocal = 'Essa variável vai para todas as requisições';
    next();
}

//Checa se deu erro de autenticação do código do CSRF
exports.checkCsrfError = (err,req,res,next)=>{
    if(err && 'EBADCSRFTOKEN' === err.code){
        return res.send('BAD CSRF.');
    }
}

//res.locals, no middleWare faz com que todas requisições recebam esse inject
exports.csrfMiddleware = (req,res,next) =>{
    res.locals.csrfToken = req.csrfToken();//Cria um token para todas requisições
    next();
}
exports.middlewareGlobal = (req,res,next)=>{
    //res.locals, no middleWare faz com que todas requisições recebam esse injetct
    res.locals.variavelLocal = 'Essa variável vai para todas as requisições';
    next();
}

exports.checkCsrfError = (err,req,res,next)=>{
    if(err && 'EBADCSRFTOKEN' === err.code){
        return res.send('BAD CSRF.');
    }
    next();
}

exports.csrfMiddleware = (req,res,next) =>{
    res.locals.csrfToken = req.csrfToken();//Cria um token para todas requisições
    next();
}
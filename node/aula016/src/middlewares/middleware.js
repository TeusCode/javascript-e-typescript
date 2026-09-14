exports.middlewareGlobal = (req,res,next)=>{
    //res.locals, no middleWare faz com que todas requisições recebam esse injetct
    res.locals.variavelLocal = 'Essa variável vai para todas as requisições';
    next();
}
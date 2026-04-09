//Tratamento de erros.
//Try => significa "tentar", tente executar isso:
//Catch => significa "capturar", capture o erro:

try {
    soma(123,1233);
} catch (error) {
    console.log("nome:",error.name);
    console.log("mensagem:", error.message);
}

function soma(x, y) {
    throw new Error ("Deu erro aqui zé");
    console.log( x + y);
}
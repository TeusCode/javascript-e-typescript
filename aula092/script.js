//Estrutura básica de de uma promise:
function solicitaDados() {
    return new Promise((resolve, reject) => {
        console.log("Carregando os dados...");

        setTimeout(() => {
            const deuCerto = false;

            if (deuCerto) {
                resolve("Dados carregados!")
            } else {
                reject("Dados não foram carregados!");
            };
        }, 2500)
    })
}

solicitaDados()
    .then((resultado)=>{
        console.log(resultado);
    })
    .catch((resultado)=>{
        console.log(resultado);
    }); 
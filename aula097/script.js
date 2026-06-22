
/*Exercício 4: O "Delay" customizado
Em vez de usar setTimeout direto, crie uma função esperar(ms) que retorna uma Promise. Esta Promise deve ser resolvida após a quantidade de milissegundos passada como parâmetro.

Depois, crie uma função contagemRegressiva() que usa await para esperar 1 segundo, imprime "3", espera 1 segundo, imprime "2", espera 1 segundo, imprime "1" e finaliza com "Fogo!".*/

function esperar(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();
        },ms)
    })
}

async function contagemRegressiva() {
    const n1 = await esperar(1000);
    console.log("3");

    const n2 = await esperar(1000);
    console.log("2");

    const n3 = await esperar(1000);
    console.log("1");
    console.log("Fogo!");
}

contagemRegressiva();
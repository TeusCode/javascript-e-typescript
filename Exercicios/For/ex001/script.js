//Separador de número ímpar e par:
//Obs: Fazer exercicio usando o for clássico:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getParidade() {
    const numerosPar = [];
    const numerosImpar = [];

    for (let i = 0; i < numeros.length; i++) {

        numeros[i] % 2 != 0 ? numerosImpar.push(numeros[i]): numerosPar.push(numeros[i]);
    }

    console.log(`Números pares: ${numerosPar}`);
    console.log(' ')
    console.log(`Números ímpares: ${numerosImpar}`);
}

getParidade();

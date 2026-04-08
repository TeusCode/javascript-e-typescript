//Break e continue:

//Continue: pula para a proxima iteração, e não executa o que está abaixo dele.
//Break: para o loop assim que encontrar o break, e saí do loop, o loop não continua.


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Lembrando que o break e o continue, pode ser usado em qualquer estrutura de loop.

//Pule o número 7 na lista e continue com os outros!

for (let i of numeros) {
    if (i === 7) {
        console.log("Número 7 pulado!");
        continue;
    }
    console.log(i);
}

console.log("");
console.log("");

//Procure o número dentro do array, e pare a execução depois de achar:

for (let i of numeros) {
    if (i === 8) {
        console.log("Número 8 encontrado!");
        break;
    }
    console.log(i);
}
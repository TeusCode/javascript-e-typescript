//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let numerosMaioresDez = [];

console.log(numeros);

//O filter irá iterar sobre todos os valores do array, quando ele receber true para um valor da função de callback, ele irá adiciona-lo dentro do novo array, se ele receber false, ele ignora esse valor e parte para o próximo.

numerosMaioresDez = numeros.filter((valor,index,array)=>{
    if(valor > 10){
        return true;
    }else{
        return false;
    }
})


// for(let i of numeros){
//     if(i > 10){
//         numerosMaioresDez.push(i);
//         console.log(`Número: ${i} adicionado!`);
//     }
// }

console.log(numerosMaioresDez);

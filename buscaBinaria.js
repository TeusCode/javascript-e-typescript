/*
Posições:
baixo, posição o primeiro elemento da lista (sofre alterações ao longo da busca)
alto, posição do ultimo elemento da lista (também sofre alterações ao longo da busca)
meio, posição produto da divisão da soma de baixo e alto durante a busca

Valores:
chute, valor produto da divisão da soma de baixo e alto durante a busca
item, valor buscado
*/
const minhaLista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

// //Calcula a eficiência do algoritmo:
// const calcularLog = (totalElementos, base) => Math.log(totalElementos) / Math.log(base);
// let resultado = calcularLog(minhaLista.length, 2);

// function buscaBinaria (lista, item){
//     if(item < lista[0] || item > lista[lista.length - 1]) return "Número não está na lista";
//     //Posições:
//     let baixo = 0; //[1] 
//     let alto = lista.length - 1; //[1] 
//     let meio;
//     //Valor:
//     let chute = 0;

//     while (baixo <= alto) { //[2]
//         meio = Math.floor((baixo + alto) / 2); //[3]
//         chute = lista[meio];
//         console.log(`${chute} === ${item}? ${chute === item}`);
//         if (chute === item)  return console.log(`O número foi encontrado na posição: ${meio}`);//[4]
//         if (chute > item) alto = meio - 1; //[5]
//         else baixo = meio + 1;//[6]
//     }
//     return null;//[7]
//     }

// console.log(`BUSCA BINÁRIA`);
// console.log(`Máximo de etapas: ${Math.ceil(resultado)}`);
// console.log("");
// console.log("");
// console.log(buscaBinaria(minhaLista, 89));

const item = 100;
const posicao = minhaLista.filter(valor => valor === item).map(valor => valor - 1).join();

console.log(posicao);


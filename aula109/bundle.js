/*
Posições:
baixo, posição o primeiro elemento da lista (sofre alterações ao longo da busca)
alto, posição do ultimo elemento da lista (também sofre alterações ao longo da busca)
meio, posição produto da divisão da soma de baixo e alto durante a busca
  Valores:
chute, valor produto da divisão da soma de baixo e alto durante a busca
item, valor buscado
*/

//        Posições: 0  1  2  3  4  5  6  7  8
const minhaLista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
//Para calcular a eficiência de um algoritmo usamos logarismo:
const calcularLog = (totalElementos, base) => Math.log(totalElementos) / Math.log(base);
let resultado = calcularLog(minhaLista.length, 2);
function buscaBinaria(lista, item) {
  if (item < lista[0] || item > lista[lista.length - 1]) return "Número não está na lista"; //Se não estiver na lista, não vou nem procurar
  //Posições:
  let baixo = 0; //A posição do primeiro item da fila  [1] - Acompanha a parte da lista que você está procurando
  let alto = lista.length - 1; //A posição do último item da fila [1] - Acompanha a parte da lista que você está procurando
  let meio; //Posição do chute
  let chute = 0;
  while (baixo <= alto) {
    //Enquanto a condição for verdadeira [2] - Enquanto ainda não conseguiu chegar em um único elemento
    meio = Math.floor((baixo + alto) / 2); //[3] - ...Verifica o elemento central
    chute = lista[meio]; //Seleciona o item do meio da lista
    console.log(`${chute} === ${item}? ${chute === item}`);
    if (chute === item) {
      //[4] - Acha o item
      return console.log(`O número foi encontrado na posição: ${meio}`); //Retorna a posição do item NÃO O ITEM!
    } else if (chute > item) {
      //[5] - Se o chute for muito alto
      alto = meio - 1; //Menos um porque o meio já foi verificado
    } else {
      //[6] - Se o chute for muito baixo
      baixo = meio + 1; //Mais um porque o meio já foi verificado
    }
  }
  return null; //[7] - Não foi encontrado
}
console.log(`BUSCA BINÁRIA`);
console.log(`Máximo de etapas: ${Math.ceil(resultado)}`);
console.log("");
console.log("");
console.log(buscaBinaria(minhaLista, 3));

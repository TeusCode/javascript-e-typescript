const convidadosBrutos = "ana, beatriz, carlos, daniel, erica";

// 1. Transformando a string em uma lista (array)
const lista = convidadosBrutos.split(', ');

// 2. Adicionando no final da lista
lista.push("fabio");

// 3. Adicionando no inicio da lista
lista.unshift("adriano");

// 4. Desistente
const desistente = lista.pop();//fabio

// 5. Entrou
const entrou = lista.shift();//adriano

// 6 e 7. Onde esta carlos?
lista.splice(lista.indexOf("carlos") + 1, 0, "igor");

// 8. os três primeiros nomes
const primeirosTres = lista.slice(0,3);// ana, beatriz e carlos

// 9. beatriz ainda está na lista?
const estaNaLista = lista.includes('beatriz');// true
// console.log(estaNaLista);

// 10. array em string
const listaString = lista.join('-')

// 11. termina com erica?
console.log(listaString.endsWith("erica"));// true


console.log(lista);
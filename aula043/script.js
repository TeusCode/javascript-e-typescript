const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// 1. Separar os números pares: filter
// 2. Dobrar os valores: map
// 3. Somar todos os valores: reduce

const valores = numeros
    .filter((numero) => numero % 2 === 0)
    .map((numero) => numero * 2)
    .reduce((acc, cur) => acc += cur)

//TESTE:
console.log(valores);

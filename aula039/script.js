// Reduce:

const numeros = [1,2,3,4,5,6,7,8901,9,10,45,12,345,7,3,234,1,43,1,4,76,8,34,23,1,1221,4,423];

//Retorne o maior número:
//o acc (acumulador) se mantém na memória, se ele não for retornado um novo valor
//o cur, sempre vai pulando de valor em valor
const novaLista = numeros.reduce((acc,cur,index,array)=>{
    if(acc > cur) return acc;
    return cur;
},0);

console.log(novaLista);
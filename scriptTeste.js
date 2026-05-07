const numeros = [0,23,4,2,5,6,1,3,6,75,12,354,767,123,43];
let ex = 0;
const total = numeros.reduce((acc,cur)=>{
    ex++
    console.log(`Execução ${ex}:${acc}   +   ${cur}`);
    return acc += cur;
},0);
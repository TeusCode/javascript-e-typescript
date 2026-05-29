//Algoritmo CPF: 
// CPF = 070.987.720-03
/*
0   7   0   9   8   7   7   2   0 //Separamos e removemos os dois ultimos digitos
x   x   x   x   x   x   x   x   x 
10  9   8   7   6   5   4   3   2 //Multiplicamos: 10 a 2
0   63  0   63  48  35  28  6   0 //Somamos o resultado: 243

Agora para descobrir o 1° dígito de verificação: 
11 - (243 % 11) = 11 - 1 = 10 //Se o valor for um número acima de 9, consideramos 0

1° dígito = 10 = 0

Agora para descobrir o 2° dígito:
0   7   0   9   8   7   7   2   0 //Separamos e removemos os dois ultimos digitos
x   x   x   x   x   x   x   x   x
11  10  9   8   7   6   5   4   3 //Multiplicamos: 11 a 3
0   70  0   72  56  42  35  8   0 //Somamos o resultado: 283

Agora jogamos na formula:
11 - (283 % 11) = 11 - 8 = 3

2° dígito = 3
*/
const cpf = '507.539.210-57';

const cpfLimpo = cpf.replace(/\D+/g, '');//Remove caracteres . e -
const cpfCalculo = cpfLimpo.slice(0,9);  //Remove os dois últimos dígitos
//Não é possivel ler uma string com o map, por isso transformamos em um array
const cpfArray = cpfCalculo.split('');
let controle = 10;
let controle2 = 11;

//acc: acumulador , cur: valor atual
const map = cpfArray.map(digito => digito * controle--).reduce((acc, cur)=>{
return acc + cur;
},0);
const calculo = 11 - (map % 11);
const primeiroDigito = calculo >= 10 ? 0: calculo; 

const map2 = cpfArray.map(digito => digito * controle2--).reduce((acc, cur)=>{
return acc + cur;},0);
const calculo2 = 11 - (map2 % 11);
const segundoDigito = calculo2 >= 10 ? 0: calculo2;

const cpfMontado = `${cpf.slice(0,-2)}${primeiroDigito}${segundoDigito}`;
if(cpf === cpfMontado) {return console.log("CPF Válido!")}else{
console.log("CPF inválido!")
};


console.log("cpf: ",cpf)
console.log("cpfLimpo: ",cpfLimpo)
console.log("cpfCalculo: ",cpfCalculo)
console.log("cpfArray: ",cpfArray)
console.log("map: ",map)
console.log(calculo)
console.log(calculo2)
console.log(primeiroDigito,segundoDigito);


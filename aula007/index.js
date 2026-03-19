//Desafio: Você deve exibir os valores nessa ordem: varA = B, varB = C e varC = A: B,C,A:

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

const Atemp = varA;//Variável tempóraria que guarda o valor para que ele não se perca!

varA = varB; //varA = B
varB = varC; //varB = C
varC = Atemp; //varC = A

console.log(varA, varB, varC);


//Outra forma de resolver (Mais moderna):

let varD = 'D'; //E
let varE = 'E'; //F
let varF = 'F'; //D

[varD, varE, varF] = [varE, varF, varD];

console.log(varD,varE,varF);



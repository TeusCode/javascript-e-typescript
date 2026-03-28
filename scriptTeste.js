//Imutabilidade:

let letra_A = "A";
let letra_B = letra_A;

console.log(letra_A, letra_B);

letra_A = "C";

console.log(letra_A, letra_B);//Somente a letra A foi alterada, porque o B é a cópia do valor inicial de A

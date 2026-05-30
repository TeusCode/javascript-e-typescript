//Algoritmo CPF: 
// CPF = 070.987.720-03
/*
0   7   0   9   8   7   7   2   0 //Separamos e removemos os dois ultimos digitos
x   x   x   x   x   x   x   x   x 
10  9   8   7   6   5   4   3   2 //Multiplicamos: 10 a 2
0   63  0   63  48  35  28  6   0 //Somamos o resultado: 243

Agora para descobrir o 1° dígito de verificação: 
11 - (243 % 11) = 11 - 1 = 10 //Se o valor for um número acima de 9, consideramos 0

1° dígito = 10 = 0

Agora para descobrir o 2° dígito:
0   7   0   9   8   7   7   2   0 //Separamos e removemos os dois ultimos digitos
x   x   x   x   x   x   x   x   x
11  10  9   8   7   6   5   4   3 //Multiplicamos: 11 a 3
0   70  0   72  56  42  35  8   0 //Somamos o resultado: 283

Agora jogamos na formula:
11 - (283 % 11) = 11 - 8 = 3

2° dígito = 3
*/

const cpf = "594.925.810-00";//Cpf original
const cpfLimpo = cpf.replace(/\D+/g, '');//CPF limpo, sem os . e -

function calculoCpf(operacao) {
    let cpfDigitos = operacao === 1 ? cpfLimpo.split('').slice(0, -2) : cpfLimpo.split('').slice(0, -1);
    let controle = operacao === 1 ? 10 : 11;
    let calculoDigito;

    calculoDigito = cpfDigitos.map(digito => digito * controle--)
        .reduce((acc, cur) => acc + cur, 0);

    return calculoDigito;
}

let digito1 = (11 - (calculoCpf(1) % 11)) >= 10?0:11 - (calculoCpf(1) % 11);
let digito2 = (11 - (calculoCpf(2) % 11)) >= 10?0:11 - (calculoCpf(2) % 11);
let cpfGerado = `${cpf.slice(0, -2)}${digito1}${digito2}`;


console.log("CPF: ", cpf);
console.log("CPF Limpo: ", cpfLimpo);
console.log();
console.log("Valor d1: ", 11 - (calculoCpf(1) % 11))
console.log("Valor d2: ", 11 - (calculoCpf(2) % 11))
console.log("CPF Gerado:", `${cpf.slice(0, -2)}${digito1}${digito2}`)
console.log(cpfGerado === cpf)
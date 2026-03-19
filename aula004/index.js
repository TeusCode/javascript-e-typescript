/*
Mateus Vilaça tem 22 anos, pesa 78kg tem 1.86 de altura e seu IMC é de ?
*/

const nome = "Mateus Vilaça";
const idade = 22;
const peso = 86;
const altura = 1.86;
const anoAtual = 2026;

let imc; //peso / (altura x altura)
let anoNascimento;//ano atual - idade  

imc = peso / (altura * altura);
anoNascimento = anoAtual - idade;

console.log(`Meu nome é ${nome}, tenho ${idade} anos e peso ${peso}kg`);
console.log(`Tenho ${altura}m de altura, nasci no ano de ${anoNascimento}`);
console.log(`Meu Índice de massa corporal é  de ${imc.toFixed(2)} kg/m²`);
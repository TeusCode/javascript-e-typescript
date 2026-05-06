const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 }
];
//1. Pessoas com nome maior ou igual a 5
//2. Pessoas com mais de cinquenta anos
//3. Pessoas cujo nome termina com a letra "a"

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
const terminaComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
//endsWith('a');  Termina com ´a´, retorna true or false.
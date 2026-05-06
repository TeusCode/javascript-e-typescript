// 1. Transformação simples 
const numeros = [2, 5, 10, 15, 20];

const dobro = numeros.map(valor => valor * 2);
// [4,10,20,30,40]

// 2.Manipulação de Strings
const nomesEmMinusculos = ["ana", "rodrigo", "marta", "junior"];

const nomesProprio = nomesEmMinusculos.map((valor) => {
  const juncao = [...valor.slice(1, Number.MAX_VALUE)].join('');
  return [...valor][0].toLocaleUpperCase() + juncao;
})
// [ 'Ana', 'Rodrigo', 'Marta', 'Junior' ]

// 3.Extração de objetos

const produtos = [
  { id: 1, nome: "Teclado Mecânico", preco: 150 },
  { id: 2, nome: "Mouse Gamer", preco: 80 },
  { id: 3, nome: "Monitor 144hz", preco: 900 }
];

const nomeProdutos = produtos.map(obj => obj.nome);
// [ 'Teclado Mecânico', 'Mouse Gamer', 'Monitor 144hz' ]

// 4.Calculo e condicionais

const precos = [
  { nome: "Livro", valor: 50 },
  { nome: "Caneta", valor: 5 }
];

const aumento = precos.map((obj)=>{
  return {
    ...obj,
    valor: Number((obj.valor * 1.1).toFixed(2))
  }
});
console.log(aumento);
// [ { nome: 'Livro', valor: 55 }, { nome: 'Caneta', valor: 5.5 } ]
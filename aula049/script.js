const produtos = [
  { nome: "Mouse", categoria: "Tecnologia" },
  { nome: "Cadeira", categoria: "Móveis" },
  { nome: "Teclado", categoria: "Tecnologia" },
  { nome: "Mesa", categoria: "Móveis" },
  { nome: "Monitor", categoria: "Tecnologia" }
];

const resultado = produtos.reduce((acc, cur) => {
  if (cur.categoria === "Tecnologia") {
    acc.eletronicos.push(cur);
  } else {
    acc.outros.push(cur);
  }

  return acc;
}, {
  eletronicos: [], outros: []
});

console.log(resultado.eletronicos);
console.log(resultado.outros);
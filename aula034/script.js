const produtos = [
  { nome: "Teclado Mecânico", preco: 150, categoria: "Eletrônicos", emEstoque: true },
  { nome: "Mouse Gamer", preco: 80, categoria: "Eletrônicos", emEstoque: false },
  { nome: "Monitor 144hz", preco: 900, categoria: "Eletrônicos", emEstoque: true },
  { nome: "Cadeira Office", preco: 500, categoria: "Móveis", emEstoque: true },
  { nome: "Mesa de Madeira", preco: 1200, categoria: "Móveis", emEstoque: false },
  { nome: "Fone de Ouvido", preco: 45, categoria: "Eletrônicos", emEstoque: true }
];


function buscaLetra(l) {
  const busca = produtos.filter(obj => obj.nome.toUpperCase().includes(l.toUpperCase()));
  return busca
}

console.log(buscaLetra("c"));




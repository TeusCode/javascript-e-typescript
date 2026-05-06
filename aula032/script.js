const produtos = [
  { nome: "Teclado Mecânico", preco: 150, categoria: "Eletrônicos", emEstoque: true },
  { nome: "Mouse Gamer", preco: 80, categoria: "Eletrônicos", emEstoque: false },
  { nome: "Monitor 144hz", preco: 900, categoria: "Eletrônicos", emEstoque: true },
  { nome: "Cadeira Office", preco: 500, categoria: "Móveis", emEstoque: true },
  { nome: "Mesa de Madeira", preco: 1200, categoria: "Móveis", emEstoque: false },
  { nome: "Fone de Ouvido", preco: 45, categoria: "Eletrônicos", emEstoque: true }
];

//1. Disponíveis:
const prodDisponiveis = produtos.filter(valor => valor.emEstoque);

//2. Promoção de eletronicos:
const elePromocao = produtos.filter(valor => (valor.preco < 100 && valor.categoria === 'Eletrônicos'));

//3. Investimento Premium:
const invPremium = produtos.filter(valor => (valor.preco > 600));
console.log(invPremium);
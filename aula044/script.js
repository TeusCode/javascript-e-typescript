const livros = [
  { titulo: "Clean Code", categoria: "Programação", preco: 100, estoque: 5 },
  { titulo: "O Senhor dos Anéis", categoria: "Fantasia", preco: 80, estoque: 10 },
  { titulo: "JavaScript Eloquente", categoria: "Programação", preco: 90, estoque: 3 },
  { titulo: "Dom Casmurro", categoria: "Clássico", preco: 50, estoque: 7 },
  { titulo: "Padrões de Projetos", categoria: "Programação", preco: 120, estoque: 2 }
];

// 1. Filtrar livros de programação:
const livrosProgramacao = livros.filter((livro)=>{
   return livro.categoria === "Programação";
});

// 2. Dar desconto de 10%:
const livrosDesconto = livrosProgramacao.map((livro)=>{
    return ({...livro, preco: livro.preco * 0.9});
});

// 3. Valor total do estoque:
const valorEstoque = livrosDesconto.reduce((acc,cur)=>{ //Acumulador e valor atual
    acc += cur.preco * cur.estoque;
    return acc; 
},0);

console.log(`O valor total do estoque é: ${valorEstoque}`);

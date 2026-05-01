//1. Criação do constructor
const estoque = new Array("PROD1","INVALIDO", "PROD3", "PROD4");

//2. Correção de dados
estoque[1] = "PROD2";
estoque.push("PROD5");

//3. Simulação de venda
const produtoVendido = estoque.shift();

//4. Fatiamento Estrategico
const vitrine = estoque.slice(0,2);

//5. Verificação de tamanho
const quantidade = estoque.length;

//6. Grande final (Converção)
const relatorioEstoque = estoque.join("; ");

// --- TESTES ---
console.log("Produto Vendido:", produtoVendido);
console.log("Estoque Atual:", estoque);
console.log("Quantidade de Itens:", quantidade);
console.log("Vitrine (Destaques):", vitrine);
console.log("Relatório para Sistema:", relatorioEstoque);
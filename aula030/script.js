const carrinho = [
    { id: 1, produto: "Camiseta", qtd: 1 },
    { id: 2, produto: "Calça Jeans", qtd: 1 },
    { id: 2, produto: "Calça Jeans", qtd: 1 }, // Duplicado!
    { id: 3, produto: "Tênis", qtd: 1 },       // Será cancelado
    { id: 4, produto: "Meias", qtd: 1 },
    { id: 2, produto: "Calça Jeans", qtd: 1 }  // Outro duplicado!
];

// 1. Limpar as duplicatas da Calça Jeans e atualizar qtd para 3
// Dica: Remova primeiro o do índice 5, depois o do índice 2 para não perder a contagem.
carrinho.splice(5, 1);
carrinho.splice(2, 1);
carrinho[1].qtd = 3;

// 2. Remover o Tênis (id: 3)
for (let i = carrinho.length - 1; i >= 0; i--) {
    if (carrinho[i].id === 3) {
        carrinho.splice(i, 1);
    }
}

// 3. Inserir o Brinde (id: 99) logo após a Calça Jeans
carrinho.splice(2, 0, {
    id: 99,
    produto: "Brinde",
    qtd: 1
});

// 4. Mover a Camiseta para o fim com o nome alterado
const camisetaNova = carrinho.splice(0, 1);
camisetaNova[0].produto = "Nova Camiseta"
carrinho.splice(carrinho.length, 0, camisetaNova[0]);

console.log(carrinho);
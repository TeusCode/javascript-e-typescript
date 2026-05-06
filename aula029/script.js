const estoque = [
    { nome: "Teclado Mecânico", preco: 200, estado: "novo" },
    { nome: "Lixo Eletrônico", preco: 0, estado: "defeito" }, // Remover
    { nome: "Mouse Gamer", preco: 150, estado: "novo" },
    { nome: "Monitor 4K", preco: 3000, estado: "novo" }, // Mover p/ início
    { nome: "Cabo HDMI", preco: 30, estado: "novo" },
    { nome: "MacBook Pro", preco: 15000, estado: "novo" } // Mover p/ início
];

//1. Limpeza de inventário
for(let i = estoque.length - 1;i >= 0;i--){
    if(estoque[i].nome === "Lixo Eletrônico"){
        estoque.splice(i,1);
    }
}

//2. Mover lançamento
let luxo = estoque.splice(-1,1);
luxo.splice(luxo.length,0,estoque.splice(-2,1)[0]);

estoque.splice(0,0,...luxo);

//3. Promoção relâmpago
estoque.splice(3,1,{ nome: "Mouse Comum", preco: 50, estado: "novo" },{ nome: "Mousepad", preco: 20, estado: "novo" });

console.log(estoque)
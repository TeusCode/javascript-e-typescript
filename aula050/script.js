const produto = {};

Object.defineProperty(produto, "id", {
  enumerable: true, //Pode ser listada (exibida)
  value: 1024,
  writable: false, //Não pode ser alterado o valor
  configurable: false
});

Object.defineProperty(produto, "cupomSecreto", {
  enumerable: false, //Não pode ser exibida
  value: "DESCONTO50",
  writable: false, //Não pode ser alterado valor
  configurable: false, //Não pode ser alterado essas configurações
});

Object.defineProperty(produto, "preco", {
  enumerable: true,
  value: 100,
  writable: true,
  configurable: false
})


console.log("--- TESTANDO O ID ---");
produto.id = 999; // Tentando fraudar o ID
delete produto.id; // Tentando deletar o ID
console.log(produto.id); // DEVE EXIBIR: 1024

console.log("\n--- TESTANDO O CUPOM ---");
console.log(Object.keys(produto)); // NÃO deve mostrar 'cupomSecreto' na lista
console.log(produto.cupomSecreto); // DEVE EXIBIR: "DESCONTO50"

console.log("\n--- TESTANDO O PREÇO ---");
produto.preco = 80; // Alterando o preço
console.log(produto.preco); // DEVE EXIBIR: 80
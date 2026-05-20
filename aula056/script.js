//Você recebeu um objeto que representa o carrinho de compras de um usuário, onde a chave é o nome do produto e o valor é o preço.

const carrinho = {
  notebook: 4500,
  mouse: 150,
  teclado: 300,
  monitor: 1200
};

//Tarefa: Use Object.values e o método .reduce() para calcular o valor total do carrinho.

const valores = Object.values(carrinho);

const valorTotal = valores.reduce((acc, cur)=> {return acc + cur},0);

//===Testes===
console.log(`Valores somados ${valores}`)
console.log(valorTotal);
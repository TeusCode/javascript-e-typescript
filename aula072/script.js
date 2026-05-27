function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function (valor) {
  this.preco += valor;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);//linka as duas classes
  this.cor = cor;
}
  Camiseta.prototype = Object.create(Produto.prototype);//Cria um objeto vazio e adiciona o prototype do pai
  Camiseta.prototype.constructor = Camiseta;//Muda o constructor de Produto para Camiseta
  Camiseta.prototype.aumento = function (percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
  };//Sobrescreve o método aumento() herdado da constructor Produto

function Caneca (nome, preco, material){
  this.nome = nome;
  this.preco = preco;
  this.material = material;
  Produto.call(this,nome, preco);//Pegue a função Produto, execute-a, mas use o meu objeto atual (this) como o contexto de execução dela
  //Essa linha apenas copia as propriedades do construtor pai. Ela não faz com que a sua função filha herde os métodos que estiverem no Produto.prototype
}

  Caneca.prototype = Object.create(Produto.prototype);//Faz Caneca herdar os métodos do Produto.prototype
  Caneca.prototype.constructor = Caneca;//Adiciona Caneca como o construtor daquele objeto

const camiseta = new Camiseta("regata", 115, "Branca");
const caneca = new Caneca("caneca do Batman", 145, "porcelana");

camiseta.aumento(1);//Aumenta 1, se vai ser % ou unidade, vai depender de qual método está puxando
caneca.aumento(20);//Aumenta 20%
console.log(camiseta);
console.log(caneca);


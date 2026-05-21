function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function (percentual){
  this.preco = this.preco + (this.preco * (percentual / 100));
  console.log(this.preco);
};

Produto.prototype.desconto = function (percentual){
  this.preco = this.preco - (this.preco * (percentual / 100));
};

const p1 = new Produto("Mouse", 50);

p1.desconto(100);

console.log(p1);
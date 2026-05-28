function Produto (nome, preco, material){
  this.nome = nome;
  this.preco = preco;
  this.material = material;
}
Produto.prototype.aumento = function(percentual){
  this.preco = this.preco + (this.preco * (percentual/100));
};
Produto.prototype.desconto = function(percentual){
  this.preco = this.preco - (this.preco * (percentual/100));
};

function Caneca (nome, preco, material, estoque){
  Produto.call(this,nome,preco,material);//Recebe os atributos de herança de Produtoestoque:5;
  Object.defineProperty(this,'estoque',{
    enumerable:true,
    configurable:false,
    get: function (){                    //Getters e Setters não podem ser usados juntos com value: e writable: ou um ou outro
      return estoque;
    },
    set: function (valor){
      if(typeof valor !== "number") return;
      estoque = valor;
    }
  });
}
Caneca.prototype = Object.create(Produto.prototype);//Recebe os métodos de herança de Produto
Caneca.prototype.constructor = Caneca;//Define o construtor do objeto instanciado por Caneca para Caneca

const caneca = new Caneca ("Caneca do Batman", 25, "Porcelana", 35);
console.log(caneca);
caneca.estoque = 90;//Set estoque
console.log(caneca.estoque);//Get estoque
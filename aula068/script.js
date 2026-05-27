function Pessoa (nome,idade){
  this.nome = nome,
  this.idade = idade
}

Pessoa.prototype.dizerOi = function (){
  console.log(this.nome + " está dizendo: Oi")
}

const pessoa1 = new Pessoa("Mateus", 22);
pessoa1.dizerOi();
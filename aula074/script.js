function Animal (especie){
  this.especie = especie;
}
Animal.prototype.falar = function(){
  console.log(`Eu sou um [${this.especie}] e faço um som`);
};

function Cachorro (especie, raca){
  this.raca = raca;
  Animal.call(this, especie);//Herda as propriedades de animal
}
Cachorro.prototype = Object.create(Animal.prototype);//Cria um objeto, com o prototype de Animal, e adiciona como prototype de Cachorro
Cachorro.prototype.constructor = Cachorro;
Cachorro.prototype.falar = function(){
  console.log(`Eu sou um [${this.especie}] da raça [${this.raca}] e digo Au Au!`);
};

function Poodle (especie,raca, nome){
  this.nome = nome;
  Cachorro.call(this,especie,raca);//Herda as propriedades de cachorro
}
Poodle.prototype = Object.create(Cachorro.prototype);
Poodle.prototype.constructor = Poodle;

const meuPoodle = new Poodle("Poodle", "Rex");
meuPoodle.falar();
function Eletronico (nome, voltagem){
  this.nome = nome;
  this.voltagem = voltagem;
}

Eletronico.prototype.ligar = function (){
  console.log(`[${this.nome}] está ligado!`)
};
Eletronico.prototype.exibirInfo = function (){
  console.log(`Nome:[${this.nome}], Voltagem:[${this.voltagem}]`)
}

function Smartphone(nome, sistemaOperacional, voltagem){
  this.sistemaOperacional = sistemaOperacional;
  Eletronico.call(this,nome, voltagem);//Herda nome e voltagem de Eletronico
}
Smartphone.prototype = Object.create(Eletronico.prototype);//Adiciona a herança dos métodos
Smartphone.prototype.constructor = Smartphone;//Define Smartphone como construtor
Smartphone.prototype.exibirInfo = function (){
  Eletronico.prototype.exibirInfo.call(this);//Chama o método do Eletronico
  console.log(`Sistema Operacional:[${this.sistemaOperacional}]`);
};

const celular = new Smartphone("Samsung", "Android", 5);


celular.ligar();
celular.exibirInfo();
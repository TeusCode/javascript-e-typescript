// Classes: 
//Classes são quase a mesma coisa que funções construtoras, porém a sua sintaxe é diferente
class Carro {
  constructor(modelo,cor){
    this.modelo = modelo;
    this.cor = cor;
  }
  buzinar(){
    console.log(`${this.modelo} está buzinando...`);
  }
  ligar(){
    console.log(`${this.modelo} está ligando...`);
  }
  desligar(){
    console.log(`${this.modelo} está desligando...`);
  }
  abrirPorta(){
    console.log(`${this.modelo} está abrindo a porta...`);
  }
}

const carro1 = new Carro("fiat","preto");
console.log(carro1);
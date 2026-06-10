//Herança usando classes:
class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome, "Já encontra-se ligado!");
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome, "Já encontra-se desligado!")
      return;
    }
    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico { //extends, significa que a Classe Smartphone, está herdando da classe DispositivoEletronico
 constructor(nome, cor, modelo){
  super(nome); //Parecido com o call, ele chama as propriedades da classe DispositivoEletronico

  //Propriedades únicas do Smartphone
  this.cor = cor;
  this.modelo = modelo;
 }
}

//A herança não é muito legal, fazer com que várias classes herdem uma da outra, evite fazer mais de duas heranças, somente se for muito necessário essa abstração.
//Isso deixa o código cada vez mais complexo e mais dificil de encontrar bugs, deixa o código acoplado

const s1 = new Smartphone("Samsung", "Preto", "Galaxy S10");

s1.ligar();
s1.desligar();

console.log(s1);

// Classes: 
//Classes são quase a mesma coisa que funções construtoras, porém a sua sintaxe é diferente
//Propriedade privada usando Symbol:

const _velocidade = Symbol('velocidade');//Propriedade privada!

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  //Métodos no corpo da class, se tornam parte do prototype
  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }
  
  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }

  get velocidade(){
    return this[_velocidade];
  }

  set velocidade(valor){
    if(typeof valor !== 'number') return;
    if(valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }
  //Métodos no corpo da class, se tornam parte do prototype


}

const carro1 = new Carro("fusca");

console.log(carro1);
carro1.velocidade = -5;// setter
console.log(carro1.velocidade);// getter
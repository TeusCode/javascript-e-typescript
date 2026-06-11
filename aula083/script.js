    class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  //Métodos de Instância
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  //Métodos estáticos:  Um método estático, é chamado igual ao Método Math.ceil(), Classe.Método()
  //Métodos estáticos são exclusivos da classe, não existem no objeto instânciado
  static trocarPilha(){
    console.log("Trocando a pilha....")
  }

  static comunicacao(){
    console.log("ligando infra-vermelho...")
  }
}

const c1 = new ControleRemoto('LG');

console.log(c1);
console.log(ControleRemoto);
ControleRemoto.trocarPilha();
ControleRemoto.comunicacao();

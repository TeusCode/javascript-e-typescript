const obj = {
  nome: "Mateus",
  sobrenome: "Vilaça",
  get nomeCompleto() {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
  set setarNome(valor) {
    this.nome = valor;
  },
};

// Object.freeze(obj); //Trava os valores padrões do objeto!
Object.defineProperties(obj, {
  nome: {
    enumerable: true,
    writable: true,
    configurable: false
  },
  sobrenome: {
    enumerable: true,
    writable: true,
    configurable: false
  }
});

obj.setarNome = "Pedro";
obj.nomeCompleto;
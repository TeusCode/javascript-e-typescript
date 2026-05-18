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

Object.freeze(obj); //Trava os valores padrões do objeto!

obj.setarNome = "Willian";
obj.nomeCompleto;
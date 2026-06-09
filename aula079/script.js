//Função Fabrica:

function criaPessoa(nome,sobrenome,idade) {
  const pessoaPrototype = {
    falar: function (){
      console.log(`${this.nome} está falando...`)
    },
     comer: function (){
      console.log(`${this.nome} está comendo...`)
    },
     beber: function (){
      console.log(`${this.nome} está bebendo...`)
    }
  }
  return Object.create(pessoaPrototype,{
    nome:{value:nome},
    sobrenome:{value:sobrenome},
    idade:{value:idade}
  })
}

const p1 = criaPessoa("Mateus", "Silva", 22);
console.log(p1);
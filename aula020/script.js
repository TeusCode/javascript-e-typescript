/*
    Funções construtoras:
    - Uso obrigatório do (new)
    - Começar com letra Maiúscula ex: Pessoa
    - Atributos e métodos (público/privado)
    - Referência do objeto usando (this)
*/

/*
    Atributos/Métodos que são privados podem ser acessados pelo corpo da função e por métodos públicos através do escopo lexíco, e closure. Porém não podem ser acessadas de fora através da notação de ponto, como os Métodos/Atributos públicos.
*/

function Pessoa (nome,sobrenome){
    //Atributos/Métodos Privados:
    const ID = 1526523;
    const validarId = ()=>{
        console.log(ID,"Válidado!");
    }

    //Atributos/Métodos Públicos:
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.falar = (frase) => {
        console.log(`${nome} Está falando: ${frase}`)
    }
}

const p1 = new Pessoa("Mateus", "Silva");

p1.falar("Olá pessoal!");
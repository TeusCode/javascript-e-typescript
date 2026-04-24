//Função de fabrica:
//Cria pessoa:
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        //Getter (Obtém)
        falar(assunto) {
            console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
            console.log(this.nome, ":Está falando sobre", assunto);
        }
    }
}
const pessoa1 = criaPessoa("Mateus", "Da Silva Vilaça");

//Cria Pizza:
function criaPizza(sabor, tamanho, valor) {
    return {
        sabor,
        tamanho,
        valor,
        temperatura: null,
        //Getter, finge que é uma propriedade da função e pode ser executada sem parênteses: pizzaChocolate.detalhesPizza
        get detalhesPizza() {
            const tempoCalculado = rand() * 1000;
            setTimeout(() => {
                console.log(`Você acaba de fazer uma pizza de ${this.sabor} de tamanho ${this.tamanho}, ela vale ${this.valor} reais no tempo de ${rand()} segundos!`);
            }, tempoCalculado);
        },
        //Setter, Define um valor e permite que você insira uma lógica, como uma validação
        set temperaturaPizza(valor) {
            if(!isNaN(valor)) this.temperatura = valor;
        }
    }
}

const pizzaChocolate = criaPizza("Chocolate", "Grande", 115);

pizzaChocolate.detalhesPizza;
pizzaChocolate.temperaturaPizza = 23;
console.log(pizzaChocolate.temperatura);

function rand() {
    return Math.floor(Math.random() * (10 - 1) + 1);
}
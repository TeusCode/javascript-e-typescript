/*
O Desafio
Em vez de focar apenas no visual, o foco aqui é a gestão dos dados. Você vai criar uma interface onde o usuário pode adicionar produtos a um "carrinho" e o sistema deve calcular tudo em tempo real.

O que o projeto deve ter:
Cadastro de Itens: Uma lista (array de objetos) pré-definida no seu código com pelo menos 5 produtos (ex: id, nome, preco, categoria).

Interface de Seleção: O usuário escolhe o produto e a quantidade.

O Carrinho (A parte lógica):

Ao clicar em "Adicionar", o item deve ir para uma lista na tela.

Se o usuário adicionar o mesmo item duas vezes, o sistema não deve repetir a linha, mas sim somar a quantidade no item que já está lá (isso vai testar bem sua lógica de find ou findIndex).

Cálculos Automáticos:

Mostrar o valor total do carrinho.

Aplicar um "Cupom de Desconto": Se o usuário digitar "ESTUDANTE10", ele ganha 10% de desconto no valor total.

Botão de Finalizar: Ao clicar, limpa o carrinho e mostra um alert ou uma mensagem na tela: "Compra de R$ XX,XX realizada com sucesso!".
*/

const itens = [
    {
        id: 1,
        nome: "Teclado",
        preco: 30,
        categoria: "informática"
    },
    {
        id: 2,
        nome: "Mouse",
        preco: 20,
        categoria: "informática"
    },
    {
        id: 3,
        nome: "Mesa",
        preco: 200,
        categoria: "Moveis"
    },
    {
        id: 4,
        nome: "Garrafa",
        preco: 25,
        categoria: "Objetos"
    },
    {
        id: 5,
        nome: "Cadeira",
        preco: 500,
        categoria: "Moveis"
    }
];

function cadastrarItem(nome, preco, categoria) {
    for (let item in itens) {
        if (itens[item].nome === nome) return console.log("ITEM JÁ CADASTRADO!");
    }

    if (isNaN(nome && categoria) && !isNaN(preco)) {
        const quantidadeItens = itens.length;
        itens.push({
            id: quantidadeItens + 1,
            nome,
            preco,
            categoria
        })
        exibirItens();
        console.log(itens);
    } else {
        console.log("ITEM INVÁLIDO!")
    }
}

function exibirItens() {
    document.body.innerHTML = ''
    for (let item in itens) {
        document.body.innerHTML += `<li> ${itens[item].nome}: R$${itens[item].preco} - ${itens[item].categoria}  </li>`
    }
}

(function () {
    exibirItens()
})();

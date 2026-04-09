//Escreva uma função chamada ePaisagem,
//Que recebe dois argumentos, largura e altura
//de uma imagem (number).
//Retorne true se a imagem estiver no modo Paisagem.

function ePaisagem(l, a) {
    if (typeof l && typeof a === 'number') {
        return res = l > a ? true : false;
    }
    return "Valores inválidos!";
}

console.log(ePaisagem(1, '90'));
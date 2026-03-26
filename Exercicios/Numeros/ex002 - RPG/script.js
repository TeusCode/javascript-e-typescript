/*O Desafio do RPG
Imagine que você está programando o sistema de combate de um jogo de RPG. O seu personagem acabou de lançar um feitiço de fogo em um monstro.

O cálculo do dano base do feitiço, considerando os bônus do personagem, resultou em um número "quebrado": 37.6.

No entanto, a barra de vida do monstro só trabalha com números inteiros. Você precisa arredondar esse dano para o número inteiro mais próximo antes de subtrair da vida do monstro.

A sua tarefa:
Escreva a linha de código em JavaScript que pega o valor 37.6, usa o método correto do objeto Math para arredondá-lo, e guarda o resultado em uma variável chamada danoFinal. */

const barraVida = document.getElementById('brrVida');

brrVida.style = `width:100%`

let ataque = prompt("Digite o seu ataque!");

let dano = Math.random()*(100-0)+0;
let danoFinal = Math.trunc(dano);

brrVida.style = `width:${danoFinal}%`

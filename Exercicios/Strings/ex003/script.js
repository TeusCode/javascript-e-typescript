
let nome = prompt(`Qual é o seu nome completo?`);

document.body.innerHTML += `<h1>${nome} </h1><br>`;

document.body.innerHTML += `Quantos caracteres (incluindo os espaços) o seu nome tem no total? ${nome.length} <br>` ;

document.body.innerHTML += `Qual é a primeira letra do seu nome? ${nome[0]} <br>`;

document.body.innerHTML += `Qual é a última letra do seu nome? ${nome[nome.length - 1]} <br>`;


document.body.innerHTML += `Qual é a segunda letra do seu nome? ${nome[1]} <br>`

document.body.innerHTML += `Qual é a penúltima letra do seu nome? ${nome[nome.length - 2]} <br>`

document.body.innerHTML += `Qual é o índice (posição) da primeira vez que a letra "a" (minúscula) aparece no seu nome? ${nome.indexOf('a')} <br>`

document.body.innerHTML += `Qual é o índice (posição) da última vez que a letra "a" (minúscula) aparece no seu nome? ${nome.lastIndexOf('a')} <br>`

document.body.innerHTML += `Quais são as 3 primeiras letras do seu nome? ${nome.slice(0,3)} <br>`

document.body.innerHTML += `Quais são as 3 últimas letras do seu nome? ${nome.slice(-3)} <br>`

document.body.innerHTML += `Qual trecho do seu nome está entre o índice 2 e o índice 6? ${nome.slice(2,7)}<br>`

document.body.innerHTML += `Qual é a letra que está exatamente bem no meio do seu nome? ${nome[(nome.length - 1) /2]}  <br>`

document.body.innerHTML += `Como fica o seu nome se o dividirmos em um Array (lista) separando cada palavra? ${nome.split(" ")} <br>`

document.body.innerHTML += `Como fica o seu nome se o dividirmos em um Array separando letra por letra? ${nome.split("")} <br>`

document.body.innerHTML += `Qual é apenas o seu primeiro nome? ${nome.split(" ", 1)} <br>`

document.body.innerHTML += `Qual é apenas o seu último sobrenome? ${nome.split(" ")[nome.split(" ").length - 1]} <br>`

document.body.innerHTML += `Como fica o seu nome escrito com todas as letras MAIÚSCULAS?
${nome.toUpperCase()} <br>`

document.body.innerHTML += `Como fica o seu nome escrito com todas as letras minúsculas? ${nome.toLowerCase()} <br>`

document.body.innerHTML += `Como ficaria o seu nome se substituíssemos apenas o primeiro espaço em branco por um traço ("-")? ${nome.replace(" ", "-")} <br>`

document.body.innerHTML += `Como ficaria o seu nome se substituíssemos todos os espaços em branco por traços ("-")?
${nome.replace(/ /g,"-")} <br>`

document.body.innerHTML += `Como ficaria o seu nome se todas as letras "e" fossem trocadas pelo número "3"? ${nome.replace(/e/g,3)} <br>`

let resultado;

if(nome.search(/Silva/) != -1){
    resultado = "VERDADEIRO"
}else{ 
    resultado = "FALSO"
}

document.body.innerHTML += `O seu nome contém a palavra "Silva" (verdadeiro ou falso)? ${resultado} <br>`

let sobrenome1 = nome.split(" ")[1]

document.body.innerHTML += `Em qual índice (posição) começa o seu primeiro sobrenome?
${nome.indexOf(sobrenome1)} <br>`

document.body.innerHTML += `Se removermos os espaços em branco extras do começo e do final do seu nome (caso você tenha digitado sem querer), como ele fica? ${nome.trim()} <br>`

document.body.innerHTML += `Se juntarmos o seu nome com a frase " está aprendendo JavaScript", como fica a frase completa? ${nome} está aprendendo JavaScript  <br>`
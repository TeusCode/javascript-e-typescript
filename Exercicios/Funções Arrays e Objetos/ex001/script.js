function meuEscopo (){
const form = document.querySelector("#form");//Seleciona o formulário
const listaPessoas = document.querySelector("#listaPessoas");//Selectiona a div que mostra a lista
const pessoas = [];


function recebeEventoForm (evento){
evento.preventDefault();//Desliga as configurações padrões do formulário

const nome = form.querySelector("#nome");
const sobrenome = form.querySelector("#sobrenome");
const peso = form.querySelector("#peso");
const altura = form.querySelector("#altura");

pessoas.push({  //Adiciona dentro do array, o objeto:
    nome:nome.value,
    sobrenome:sobrenome.value,
    peso:peso.value,
    altura:altura.value
}
);

const contador = pessoas.length -1;

console.log(contador)

listaPessoas.innerHTML += `<p>
Nome:${pessoas[contador].nome} ${pessoas[contador].sobrenome},
Peso: ${pessoas[contador].peso}kg, 
Altura: ${pessoas[contador].altura}cm 
</p>`

console.log(pessoas);


};

let contador = 0;

form.addEventListener('submit',recebeEventoForm)

}
meuEscopo();




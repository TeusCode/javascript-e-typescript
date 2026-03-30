function meuEscopo (){
const nome = document.querySelector('#nome');
const sobrenome = document.querySelector('#sobrenome');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const form = document.querySelector('#form');
let contador = 0;

form.addEventListener('submit',function (event){
    event.preventDefault();//Cancela o comportamento padrão do evento
    contador++
    console.log("formulario não enviado "+ contador)
});

}
meuEscopo();




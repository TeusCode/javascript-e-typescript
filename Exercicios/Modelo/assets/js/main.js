const form = document.querySelector('#form');

function meuEscopo() {
    const peso = form.querySelector('#input-teste-1');
    const altura = form.querySelector('#input-teste-2');

    const calculo = Number(peso.value) / (Number(altura.value) ** 2);

    
}
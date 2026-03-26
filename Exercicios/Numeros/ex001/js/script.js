let numero = Number(prompt("Digite um número:"))

const displayNumero = document.getElementById('numero');
const texto = document.getElementById('texto');

displayNumero.innerHTML = numero;

//Cálculos:
let raizQuadrada = numero ** 0.5;
let eInteiro = Number.isInteger(numero);
let eNaN = Number.isNaN(numero);

texto.innerHTML += `<p>Raiz quadrada: ${raizQuadrada}</p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${eInteiro}</p>`;
texto.innerHTML += `<p>É NaN? ${eNaN} </p>`;
texto.innerHTML += `<p>Arredondando para baixo ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p>Arredondando para cima ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)} </p>` 

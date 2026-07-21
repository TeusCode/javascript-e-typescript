import './assets/css/style.css';
import GeradorDeSenha from './modules/geradorSenhas';
const gerador = new GeradorDeSenha();

const quantidade = document.querySelector('.inserir');

const checkNumbers = document.querySelector('#checkNumbers');
const checkMaiusculas = document.querySelector('#checkMaiusculas');
const checkMinusculas = document.querySelector('#checkMinusculas');
const checkSimbolos = document.querySelector('#checkSimbolos');

const display = document.querySelector('.displaySenha');

const btnGerar = document.querySelector('#btnGerarSenha');


btnGerar.addEventListener('click', () => {

    let config = {
        numbers: false,
        maiusculas: false,
        minusculas: false,
        simbolos: false
    }

    if (!quantidade.value) return
    if (quantidade.value < 1) return
    if (checkNumbers.checked) {
        config.numbers = true;
    }
    if (checkMaiusculas.checked) {
        config.maiusculas = true;
    }
    if (checkMinusculas.checked) {
        config.minusculas = true;
    }
    if (checkSimbolos.checked) {
        config.simbolos = true;
    }

    if(config.numbers || config.maiusculas || config.minusculas || config.simbolos){
    display.innerHTML = gerador.montarSenha(quantidade.value, config.numbers, config.maiusculas, config.minusculas, config.simbolos);
    }

})





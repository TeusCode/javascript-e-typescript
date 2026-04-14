const btnIniciar = document.querySelector('#btnIniciar');
const btnPausar = document.querySelector('#btnPausar');
const btnZerar = document.querySelector('#btnZerar');

//Captura evento dos botões:
btnIniciar.addEventListener('click', iniciarTimer);

btnPausar.addEventListener('click', pausarTimer);

btnZerar.addEventListener('click', zerarTimer);

const data = new Date()
let isRunning = false;//Está rodando?
let timer = null;
data.setHours(0, 0, 0, 0)//Define o horário para 00:00:00.000

console.log(data.toLocaleTimeString());

function iniciarTimer() {
    if (isRunning) return;//Se já estiver rodando não faz nada.
    isRunning = true;
    relogio(true);
    design('black');
}

function pausarTimer() {
    if (isRunning) {
        isRunning = false;
        relogio(false);
        console.log(`Relógio pausado!: ${data.toLocaleTimeString()}`);
        design('red');
    }
}

function zerarTimer() {
    if (data.getHours() !== 0 || data.getMinutes() !== 0 || data.getSeconds() !== 0) {
        pausarTimer();
        data.setHours(0, 0, 0, 0);
        atualizarDisplay();
        console.log("Relógio zerado!")
    }
    design('black');
}

function relogio(onOff) {
    clearInterval(timer);//Impede que seja criado vários intervalos,se o botão iniciar for pressionado várias vezes.

    if (onOff === true) {
        timer = setInterval(() => {
            data.setSeconds(data.getSeconds() + 1); //Seta os segundos, para os mesmos + 1s

            atualizarDisplay();
        }, 1000);
    }
}

function atualizarDisplay() {
    display.innerHTML = data.toLocaleTimeString(); //Mostra no display, o tempo atualizado.
    console.log(data.toLocaleTimeString());
}

function design(cor) {
    display.style = `color:${cor};`
}
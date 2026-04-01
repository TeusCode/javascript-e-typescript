const form = document.querySelector("#form");//Seleciona o Elemento Form.

form.addEventListener('submit', (e) => { //Observa quando o evento 'submit' (envio do form) será utilizado.
    e.preventDefault();//Previne o comportamento padrão para o evento 'submit', para que a página não recarregue.

    //Seleciona os elementos dos inputs:
    const inputPeso = form.querySelector("#input-peso");
    const inputAltura = form.querySelector("#input-altura");

    //Captura os valores dos inputs em strings, e transforma em Number:
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado("Peso inválido!", false);
        return;
    }

    if (!altura) {
        setResultado("Altura inválida!", false)
        return;
    }

    const imc = calculaIMC(peso, altura);
    const NivelImc = rangeImc(imc);

    const msg = `Seu IMC é ${imc} (${NivelImc})`

    setResultado(msg, true);

    function calculaIMC(peso, altura) {
        const imc = peso / (altura ** 2);
        return Number(imc.toFixed(2));
    };

    function rangeImc(imc) {
        const range = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];

        if (imc >= 40) return range[5];
        if (imc >= 35) return range[4];
        if (imc >= 30) return range[3];
        if (imc >= 25) return range[2];
        if (imc >= 18.5) return range[1];
        if (imc < 18.5) return range[0];

    };

    function criarP() {
        const p = document.createElement('p');
        return p;
    };

    function setResultado(msg, isValid) {
        const mensagem = document.querySelector('#mensagem');
        mensagem.innerHTML = '';

        const p = criarP();

        if(isValid) {
            p.classList.add('paragrafo-resultado');
        }else {
            p.classList.add('paragrafo-bad');
        }

        p.innerHTML = msg;
        mensagem.appendChild(p);
    };
});
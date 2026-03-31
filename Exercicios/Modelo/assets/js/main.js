const form = document.querySelector('#form');

function meuEscopo() {
    const peso = form.querySelector('#input-teste-1');
    const altura = form.querySelector('#input-teste-2');
    const resultados = document.querySelectorAll(".resultados");
    const resultadosTitulo = document.querySelectorAll(".resultadosTitulo");
    let resultadoTexto;
    let resultadoIndex;
    
    form.addEventListener('submit', calcularImc);

    function calcularImc(event) {
        event.preventDefault();

        const calculo = Number(peso.value) / (Number(altura.value) ** 2);
        const resultado = Number(calculo.toFixed(2));
        const mensagem = document.querySelector("#mensagem");

        if(resultadoIndex !== undefined){
        resultados[resultadoIndex].style="color:black; font-weight:0;"

        resultadosTitulo[resultadoIndex].style="color:black; font-weight:0;"
        }

        if(resultado <= 18.5){
            resultadoTexto = "Abaixo do peso"
            resultadoIndex = 0
        }else if(resultado > 18.5 &&resultado <=24.9){
            resultadoTexto = "Peso normal"
            resultadoIndex = 1
        }else if(resultado >24.9 && resultado <= 29.9){
            resultadoTexto = "Sobrepeso"
            resultadoIndex = 2
        }else if(resultado > 29.9&& resultado <=34.9){
            resultadoTexto = "Obesidade grau 1"
            resultadoIndex = 3
        }else if(resultado >34.9&& resultado <=39.9){
            resultadoTexto = "Obesidade grau 2"
            resultadoIndex = 4
        }else if(resultado > 40){
            resultadoTexto = "Obesidade grau 3"
            resultadoIndex = 5
        }else{
            resultadoTexto = "Você não digitou nada"
        }
        
        mensagem.innerHTML = `<mark>O resultado é ${resultadoTexto} ${resultado}</mark>`

        resultados[resultadoIndex].style="color:green; font-weight:bold;"
        resultadosTitulo[resultadoIndex].style="color:green; font-weight:bold;"
        console.log(resultadoIndex)
    };

};

meuEscopo()

// Esta é a nossa função de Callback
function avisarCliente(sabor) {
    console.log("Sua pizza de " + sabor + " está pronta!");
}

// Esta é a função principal que recebe o callback
function prepararPizza(sabor, callback) {
    console.log("Preparando pizza de " + sabor + "...");
    
    // Simulando o tempo do forno (3 segundos)
    setTimeout(() => {
        // O trabalho acabou! Agora chamamos o callback de volta
        callback(sabor);
    }, 3000);
}

// Executando: passamos o sabor e a FUNÇÃO avisarCliente (sem parênteses!)
prepararPizza("Calabresa", avisarCliente);

console.log("Enquanto a pizza não sai, vou lavando a louça...");
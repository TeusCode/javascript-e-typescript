//Display de estoque:
//Utilize o for in, nesse exercício:

const estoque = {
    teclado: 15,
    mouse: 12,
    monitor: 25,
    processador: 52
};
//For...in pega a chave do objeto, para mostrar itens dinamicos, no console, usamos na notação de colchete para colocar uma váriavel dentro.
for (let chave in estoque) {
    console.log(`Temos ${estoque[chave]} unidade de ${chave} no estoque!`);
}
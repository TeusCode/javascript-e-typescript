let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function buscaBinaria(array, item) {
    let baixo = 0;
    let alto = array.length - 1;
    let passos = 0;

    while (baixo <= alto) {
        passos++;
        let meio = Math.floor((baixo + alto) / 2); // Pega o índice do meio
        let chute = array[meio];

        console.log(`Somei o${baixo} + ${alto} / 2`);
        console.log(`Eu chuto o ${chute}`);

        if (chute === item) {
            return `Achei em ${passos} passos!`;
        }
        if (chute > item) {
            alto = meio - 1; // O item está na metade de baixo
        } else {
            baixo = meio + 1; // O item está na metade de cima
        }
    }
    return "Não encontrado";
}

console.log(buscaBinaria(lista, 25)); // "Achei em 7 passos!"

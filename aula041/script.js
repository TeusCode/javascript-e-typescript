//Contador de nomes por iniciais

// o que eu tenho?
const nomes = ["Daniel", "Maria", "Marta", "Juca", "João", "Jéssica", "Pedro", "Luan", "Gustavo", "Ana", "Lucas", "Beatriz", "Ricardo", "Fernanda", "Tiago", "Camila", "Rafael", "Larissa", "Bruno", "Letícia", "Gabriel", "Aline", "Felipe", "Vanessa", "Mateus", "Bianca", "Rodrigo", "Priscila", "Hugo", "Patrícia"];

// o que eu espero?
// namesCount = { d: 1, m: 2, j: 3}

const namesCount = nomes.reduce((acc, cur, i) => {
    const firstLetter = cur[0].toLowerCase();

    if (acc[firstLetter]) {
        acc[firstLetter]++;
    } else {
        acc[firstLetter] = 1;
    }
    return acc;
}, {})

console.log(namesCount);

// Atribuição via Destruturação [arrays]:
// Com arrays:

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// const [primeiroNumero, segundoNumero, , ...resto] = numeros; // Cria as variáveis primeiroNumero e segundoNumero, e o resto

//                    0       1       2                       
//                 0 1 2   0 1 2   0 1 2
// const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//  const [, , [, , nove]] = numeros2;

// Outra forma:
// const [lista1, lista2, lista3] = numeros2;
// const nove = lista3[2];

// console.log(nove);

//  console.log(primeiroNumero, segundoNumero, resto);

//Atribuição via Desestruturação {objetos}:

const pessoa = {
    nome: "Luiz",
    sobrenome: "Silva",
    idade: 31,
    endereco: {
        rua: "AV Brasil",
        numero: 331
    }
};

const { nome: newName } = pessoa;//Cria uma variável newName
console.log(newName);


const { nome, sobrenome, idade } = pessoa; //Cria varias variáveis;
console.log(nome, sobrenome, idade);

const { endereco, endereco: { rua, numero } } = pessoa;
console.log(endereco, rua, numero)

const data = new Date();

const dia = data.getDate();

console.log(dia)
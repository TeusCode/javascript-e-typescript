const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somaPares = 0;

// 2. Soma os números pares:
numeros.forEach(numero => {
    if(numero % 2 === 0) somaPares += numero;
    return;
});

console.log(`A soma dos pares é: ${somaPares}`);
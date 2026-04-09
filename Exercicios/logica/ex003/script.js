//Escreva uma função que receba um número e 
//retorne o seguinte:
//Número é divisivel por 3 = Fizz
//Número é divisivel por 5 = Buzz
//Número é divisivel por 3 e por 5 = FizzBuzz
//Checar se um número é realmente um número = retorna o próprio número
//Use a função com números de 0 a 100

function fizzBuzz(x) {

    if (typeof x !== 'number') return x;
    if (x % 3 === 0 && x % 5 === 0) return "FizzBuzz";
    if (x % 3 === 0) return "Fizz";
    if (x % 5 === 0) return "Buzz";
    
    return x;
}

console.log('a',fizzBuzz('a'));

for (let i = 0; i <= 100; i++) {
    console.log(i,fizzBuzz(i));
}



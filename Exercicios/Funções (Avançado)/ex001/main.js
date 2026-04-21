//Formas de declarar:

//Função Literal:
// function funcao (){
//código...
// }

//Função Express:
// const funcaoExpress = function (){
//código
// };

//Arrow Function:

// const arrowFunction = () =>{
//código
// };



//Parâmetros:
//Há Diferenças entre parâmetros e argumentos:

//Parametros é uma variável dentro da function, onde recebe um argumento:
// function nome (parametro1, parametro2,parametro3){
//código...
// }

//Argumento é o valor que você insere quando está chamando uma função:
// nome('argumento1', 'argumento2', 'argumento3');

//O que acontece, se você enviar argumentos para uma function, que não possui parâmetros?

// funcao(1,2,3,4,5,6,7,8,9,10);
//Os argumentos enviados são guardados por padrão dentro de uma especie de array/objeto (arguments), porém somente em funções que possuem a palavra function em sua declaração:

// function funcao (){
//     console.log(arguments);
// }

//Exemplo:
// [Arguments] {
//   '0': 1,
//   '1': 2,
//   '2': 3,
//   '3': 4,
//   '4': 5,
//   '5': 6,
//   '6': 7,
//   '7': 8,
//   '8': 9,
//   '9': 10
// }

//Conseguimos um efeito parecido nas Arrow Function, porém recebemos um array de verdade, com propriedades de array:
//Utilizando o rest operation (resto dos argumentos), ele pega todos os argumentos a partir dele, e ele precisa ser sempre o ultimo parâmetro:

//Podemos usar isso para somar cada parâmetro:

// const arrowFunction = (...args) => {
//     let soma = 0;
//     for(let argumento of args){
//         console.log(`Estou somando o ${argumento} + ${soma}`);
//         soma += argumento;
//     }
//     console.log(soma);
// };

// arrowFunction(78,2,23,4123,41,6,743,8234,9234,12034);

//Outro Exemplo:

// function calcula (operador,acumulador,...numeros){
//     console.log(`O operador escolhido foi ${operador}`);
//     for(let i in numeros){
//         console.log(`Operação-${i}  ${operador} = ${acumulador}`);
//         if(operador === '+') acumulador+= numeros[i];
//         if(operador === '-') acumulador-= numeros[i];
//         if(operador === '*') acumulador*= numeros[i];
//         if(operador === '/') acumulador/= numeros[i];
//     }
//     console.log(acumulador);
// }

// calcula('+',0,1,2,3,4,5,6,7,8,9,10);
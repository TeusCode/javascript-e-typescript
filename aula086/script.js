//Promises
//- Uma promise recebe uma função como argumento função (callback):
const minhaPromise =  new Promise(callback);

//- Essa função (callback), recebe dois argumentos, resolve e reject
//- Também é comun que essa função seja uma arrow function dentro da propria Promise

// function callback(resolve, reject){
// }

//- Se a função resolve, for chamada dentro do callback, pode ser por conta de uma lógica ou não, a Promise será resolvida, e terá o status de: "fulfilled", dentro da função resolve e da função reject, elas aceitam somente um parametro que pode ser passado a diante.

//- Se a função reject, for chamada dentro do callback, a Promise será rejeitada, e aparecerá um erro no console.

function callback(resolve, reject){
  if(10 > 0){
    resolve("a");
  }else{
    reject("b");
  }
}

//- Quando uma dessas duas funções resolve ou reject é executada, podemos executar algo logo em seguida, e capturar o valor do argumento, usando o then e catch, then para o resolve e catch para o reject.

// minhaPromise.then((valor)=>{
//   console.log("A promise foi resolvida com o valor", valor);
// });

// minhaPromise.catch((valor)=>{
//   console.log("A promise foi rejeitada com o valor", valor);
// });

//- Também podemos fazer isso de forma aninhada, como as funções de callback:

minhaPromise.then(()=>{
  console.log("Executa isso.")
})
  .then(()=>{
    console.log("Depois isso.")
  })
  .then(()=>{
    console.log("Depois isso.")
  })
  .then(()=>{
    console.log("Por último isso.")
  })
  .catch(()=>{
    console.log("foi rejeitado!")
  })


console.log(minhaPromise);
function random(min = 1, max = 5) {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (tempo <= 4000) {
      setTimeout(() => {
        resolve(msg);//Then executa depois
      }, tempo);
    }else{
      reject(msg);//Catch executa depois
    }
  })
}

const arrayPromise = [
  esperaAi("Promise 1", random()),
  esperaAi("Promise 2", random()),
  esperaAi("Promise 3", random()),
  esperaAi("Promise 4", random())
]

Promise.race(arrayPromise)
  .then((resposta)=>{
    console.log(resposta);
  })
  .catch((e)=>{
    console.log("Ocorreu um erro!");
  })
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

esperaAi("Conectando ao Banco de dados...", random())
  .then((msg) => {//O argumento do resolve(argumento), vai parar no parametro do .then
    console.log(msg);
    // console.log("Executei depois da função 1");
    return esperaAi("Validando informações...", random());
  })
  .then((msg) => {
    console.log(msg);
    // console.log("Executei depois da função 2");
    return esperaAi("Exibindo informação na tela", random());
  })
  .then((msg) => {
    console.log(msg);
    // console.log("Executei depois da função 3");
  })
  .catch((msg) => {
    console.log(`Falha na conexão etapa: ${msg}`);
  })
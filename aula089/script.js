const promessas = [
  new Promise((resolve, reject)=>{
    resolve("Resolvido1");
  }),
  new Promise((resolve, reject)=>{
    resolve("Resolvido2");
  }),
  new Promise((resolve, reject)=>{
    resolve("Resolvido3");
  }),
  new Promise((resolve, reject)=>{
    resolve("Resolvido4");
  }),
  new Promise((resolve, reject)=>{
    resolve("Resolvido5");
  })
]

Promise.all(promessas)
.then((resultado)=>{
  console.log(resultado);
})
.catch((e)=>{
  console.log("Algo deu errado!");
})
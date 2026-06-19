const simularPromessa = (tempo, mensagem, falhar = false) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (falhar) {
                reject(`Erro em: ${mensagem}`);
            } else {
                resolve(mensagem);
            }
        }, tempo);
    });
};

const promises = [
  simularPromessa(800, "Usuario.name"),
  simularPromessa(400, "Usuario.foto"),
  simularPromessa(1500, "Usuario.listaAmigos"),
];

Promise.all(promises)
.then((resultados)=>{
    console.log(resultados);
})
.catch(()=>{
  console.log("Deu algum erro!");
});

function random(min = 1, max = 5) {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

//Promessa encadeada
function criarRequisicao(item, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof item !== 'string') {
            reject(item);
        } else {
            setTimeout(() => {
                resolve(item);
            }, tempo)
        }
    })
}

// criarRequisicao("Cadeira", random()).then(item => {
//     console.log(`O Item: ${item}, foi requisitado com sucesso!`);
//     return criarRequisicao("Mesa", random());
// })
//     .then(item =>{
//         console.log(`O Item: ${item}, foi requisitado com sucesso!`);
//         return criarRequisicao("Fone", random());
//     })
//     .then(item =>{
//         console.log(`O Item: ${item}, foi requisitado com sucesso!`);
//         return criarRequisicao("Mouse", random());
//     })
//     .then(item=>{
//         console.log(`O Item: ${item}, foi requisitado com sucesso!`);
//     })
//     .catch(item=>{
//         console.log(`Não foi possivel requisitar o Item: ${item}`);
//     });

async function executa(){
    const req1  = await criarRequisicao("Relógio", random());
     console.log(`O Item: ${req1}, foi requisitado com sucesso!`);

    const req2  = await criarRequisicao("Sofá", random());
    console.log(`O Item: ${req2}, foi requisitado com sucesso!`);

    const req3  = await criarRequisicao("Teclado", random());
    console.log(`O Item: ${req3}, foi requisitado com sucesso!`);

    const req4  = await criarRequisicao("Mouse", random());
    console.log(`O Item: ${req4}, foi requisitado com sucesso!`);
}

executa();
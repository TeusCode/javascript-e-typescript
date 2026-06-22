/*
Exercício 1: Simulando uma chamada de API (Nível Iniciante)
Crie uma função chamada buscarUsuario que retorne uma Promise. Ela deve usar setTimeout para simular uma demora de 2 segundos e então retornar um objeto { id: 1, nome: "João" }.

Depois, crie uma segunda função exibirUsuario que seja async, use o await para esperar o resultado de buscarUsuario e imprima o nome do usuário no console.
*/

function buscarUsuario(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({id: 1,nome:"João"});
        },2000)
    })
}

async function exibirUsuario(){
    const usuario = await buscarUsuario();
    console.log(`O nome do usuário é ${usuario.nome}`);
}

exibirUsuario();
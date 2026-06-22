/*
Exercício 6: Promise.race (O desafio da velocidade)
O Promise.all espera todas as Promises terminarem. O Promise.race retorna o resultado da primeira Promise que terminar (seja sucesso ou erro).

Crie uma função servidorRapido() que resolve em 1s com "Resposta do servidor A".

Crie uma função servidorLento() que resolve em 3s com "Resposta do servidor B".

Use const resultado = await Promise.race([servidorRapido(), servidorLento()]);

Imprima o resultado e observe qual servidor "venceu" a corrida.
*/

function servidorRapido(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Resposta do servidor A");
        },1000);
    });
}

function servidorLento(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Resposta com servidor B");
        },3000);
    });
}

async function executar(){
    const servidores = [servidorRapido(),servidorLento()];
    const resultado = await Promise.race(servidores);
    console.log(resultado);
}

executar();


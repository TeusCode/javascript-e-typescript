/*
Exercício 3: Execução em Paralelo (Nível Avançado)
Imagine que você precisa buscar dados de duas fontes diferentes para carregar uma página:

buscarPosts(): demora 3 segundos.

buscarComentarios(): demora 2 segundos.

Escreva um código que utilize await para esperar pelos dois resultados.

Desafio: Utilize Promise.all para que a espera total seja de apenas 3 segundos (e não 5). Imprima os resultados após ambos serem concluídos.
*/

function buscarPosts() {
    return new Promise((resolve, reject) => {
        const on = true;

        if(on){
        setTimeout(() => {
            resolve("Posts buscados!");
        }, 3000);
    }else{
        reject(new Error("Falha em uma das requisições!"));
    }
    })
}

function buscarComentarios() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Comentários buscados!");
        }, 2000);
    })

}

async function executar() {
    try{
    const promises = [
        buscarPosts(),
        buscarComentarios()
    ];
    const [post, comentarios] = await Promise.all(promises);
    console.log("Dados carregados: ", post, comentarios);
    }catch(e){
        console.log(e);
    }
}

executar();


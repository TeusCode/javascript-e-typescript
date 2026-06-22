/*
Exercício 2: Lidando com Erros (Nível Intermediário)
Refatore o exercício anterior. Agora, a função buscarUsuario deve receber um parâmetro deveFalhar (booleano).

Se deveFalhar for true, a Promise deve ser rejeitada com a mensagem: "Erro ao buscar usuário".

Se for false, ela retorna o objeto normalmente.

Use um bloco try...catch dentro da sua função async para tratar o erro e imprimir a mensagem caso a busca falhe.*/

function buscarUsuario(deveFal){
    return new Promise((resolve, reject) =>{
        const deveFalhar = deveFal;
        if(deveFalhar !== true){
            setTimeout(()=>{
                resolve({id:1, nome:"João"});
            },2000)
        }else{
            reject("Erro ao buscar usuário");
        }
    })
}

async function exibirUsuario(){
    try{
    const usuario = await buscarUsuario(true);
    console.log(`O nome de usuário é ${usuario.nome}`);
    }catch(e){
        console.log(e);
    }
}

exibirUsuario();
const fs = require('fs');
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'arquivosAtualizados', 'like.txt');

//Atualizando de forma assincrona:
//fs.appendFile(caminho,contentAdd)

// fs.appendFile(caminhoArquivo,'\nJogar','utf-8',(e)=>{
//     if(e){
//         return console.log(`Deu erro: ${e}`);
//     }

//     console.log(`Conteúdo adicional, adicionado com sucesso!`);
// });

//Forma Sincrona de atualizar:

try {
    const att = fs.appendFileSync(caminhoArquivo, '\nATUALIZAÇÃO SINCRONA', 'utf-8');
    console.log(`Atualizado com sucesso!`);
} catch (e) {
    console.log(`Deu erro: ${e}`);
}

console.log('Fim do script!');
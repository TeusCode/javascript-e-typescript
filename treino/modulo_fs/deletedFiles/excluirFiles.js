const fs = require('fs');
const path = require('path');
const caminho = path.resolve(__dirname, 'arquivos', 'historico.txt');


//Forma assincrona de excluir arquivos:
//fs.unlink(caminho,callback(error))

// fs.unlink(caminho,(e)=>{
//     if(e){
//         return console.log(e);
//     }

//     console.log(`Arquivo excluido!`);
// });


//Forma Sincrona de excluir arquivos:

try {
    const excluir = fs.unlinkSync(caminho);
    console.log("Arquivo Excluido com sucesso!");
} catch (error) {
    console.log(`Erro: ${error.message}`);
}
console.log('Fim do script!');
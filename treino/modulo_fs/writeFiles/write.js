const fs = require('fs');
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'arquivosEscritos', 'config.txt');

const content = 'Conteúdo em string';

//Escrevendo de forma Assincrona:

//fs.writeFile(caminho,conteúdo,'utf-8',callback(error))

// fs.writeFile(caminhoArquivo, content, 'utf-8', (error)=>{
//     if(error){
//        return console.log(error);
//     }

//     console.log(`Arquivo escrito com sucesso!`)
// });

// Escrevendo de forma Sincrona:

//fs.writeFileSync(caminho,conteúdo,'utf-8')

try{
const escrita = fs.writeFileSync(caminhoArquivo,content,'utf-8');
console.log(`Arquivos gravados com sucesso!`);
}catch(e){
    console.log(`Deu erro ${e}`);
}

console.log("Fim script");
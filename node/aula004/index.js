const fs = require('fs').promises;//Importa o módulo "fs", file system
const path = require('path');//Importa o módulo "path"

async function readdir (rootDir){//Função ler diretório
    rootDir = rootDir || path.resolve(__dirname);//Verifica se o diretório existe
    const files = await fs.readdir(path.resolve(rootDir));//Cria um array com os diretórios
    walk(files);//Caminha pelas pastas
}

function walk(files){
    for(let file of files){//Caminha valor por valor do array
        if(file.includes('aula')){//Se o valor contiver no nome 'aula'
            console.log(file);//Vai ser exibido na tela
        }
    }
}

readdir('C:/Curso de JavaScript e TypeScript/JavaScript e TypeScript/node');//Ler este diretório
//Importando módulos:
const path = require('path');
const fs = require('fs').promises;

//Função de leitura de diretório:
async function lerDiretorio(diretorio){//Readdir
    diretorio = diretorio || path.resolve(__dirname);//Se não for inserirdo um diretório, ele vai usar o diretório do arquivo atual
    const files = await fs.readdir(path.resolve(diretorio))//Lê o diretório
    andarDiretorios(files,diretorio);//Se a promise for resolvida, mostra o array na tela
}

async function andarDiretorios(files,diretorio){
    for(let file of files){
        const dirAtual = path.resolve(diretorio,file);//Diretório atual + file ex: C:/Program Files/Windows Defender/file
        const stats = await fs.stat(dirAtual);

        if(stats.isDirectory()){//Verifica se é uma pasta
            await lerDiretorio(dirAtual);//Se for ele vai ler os arquivos dentro dela também
            continue;//Depois de ler, ele vai pular para a próxima iteração
        };

        if(file.includes('node_modules')) continue;
        if(file.includes('.git')) continue;

        // if(!file.includes('.html') && (!file.includes('.css') )//Se o arquivo não tiver em seu nome .css ou .html, será recusado
        // ){ continue};//Irá voltar ao inicio da iteração

        console.log(dirAtual);//Exibe o diretório
    }
}

lerDiretorio('C:/Curso de JavaScript e TypeScript/JavaScript e TypeScript');
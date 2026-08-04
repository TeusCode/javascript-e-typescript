const fs = require('fs');
const path = require('path');
const caminho = path.resolve(__dirname, 'important_filesSync');

//Criando diretório de forma Sincrona:


try {
    fs.mkdirSync(caminho);
    console.log("Diretório criado!");
    fs.writeFileSync(caminho + '/file1', "Hey i am Important!");
    console.log("Arquivo file1 criado!");
    let files = fs.readdirSync(caminho);
    console.log(files);

    for (let i = 0; i < 20; i++) {
        fs.writeFileSync(caminho + '/file' + i, "Hey i am Important!");
        console.log(`Arquivo: file${i} criado!`);
    }

    files = fs.readdirSync(caminho);

    for (let i = 0; i < files.length; i++) {
        console.log(`Apagando arquivo ${files[i]}`);
        fs.unlinkSync(caminho + '/' + files[i]);
    }

    fs.rmdirSync(caminho);
    console.log("Diretório deletado!");


} catch (err) {
    console.log(`Error: ${err.message}`);
}


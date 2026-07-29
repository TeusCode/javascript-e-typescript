const fs = require('fs');
const path = require('path');

//Criando diretório de forma Sincrona:

try {
    fs.mkdirSync("./modulo_fs/manageFiles/important_filesSync");
    console.log("Diretório criado!");
    fs.writeFileSync("./modulo_fs/manageFiles/important_filesSync/file1", "Hey i am Important!");
    console.log("Arquivo file1 criado!");
    let files = fs.readdirSync("./modulo_fs/manageFiles/important_filesSync");
    console.log(files);

    for (let i = 0; i < 18000; i++) {
        fs.writeFileSync("./modulo_fs/manageFiles/important_filesSync/file" + i, "Hey i am Important!");
        console.log(`Arquivo: file${i} criado!`);
    }

    files = fs.readdirSync("./modulo_fs/manageFiles/important_filesSync");

    for (let i = 0; i < files.length; i++) {
        console.log(`Apagando arquivo ${files[i]}`);
        fs.unlinkSync('./modulo_fs/manageFiles/important_filesSync/' + files[i]);
    }

    fs.rmdirSync('./modulo_fs/manageFiles/important_filesSync');
    console.log("Diretório deletado!");


} catch (err) {
    console.log(`Error: ${err.message}`);
}


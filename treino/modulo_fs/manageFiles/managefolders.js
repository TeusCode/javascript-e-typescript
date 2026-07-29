const fs = require('fs');
const path = require('path');

//Making a directory (Assincrona):
//fs.mkdir(diretório,callback(err))
//mkdir => make directory (Criar diretório)

fs.mkdir('./modulo_fs/manageFiles/important_files', (err) => { //Cria diretório
    if (err) {
        return console.log(`Error: ${err.message}`);
    }

    console.log(`Folder created!`)

    //Read Directory:
    const content = 'Hey i am important!';

    fs.writeFile('./modulo_fs/manageFiles/important_files/file1', content, (err) => { //Cria arquivo file1
        if (err) {
            return console.log(`Error: ${err.message}`);
        }

        fs.readdir('./modulo_fs/manageFiles/important_files', (err, files) => { //Lê o diretório important_files
            if (err) {
                return console.log(`Error: ${err.message}`);
            }
            console.log(files);
        });

    })




});


const fs = require('fs');
const path = require('path');

//Making a directory (Assincrona):
//fs.mkdir(diretório,callback(err))
//mkdir => make directory (Criar diretório)

fs.mkdir('./modulo_fs/manageFiles/important_files',(err)=>{
    if(err){
       return console.log(`Error: ${err.message}`);
    }

    console.log(`Folder created!`)

})
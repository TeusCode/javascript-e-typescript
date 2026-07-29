//Module File System:
const fs = require('fs');
const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'arquivosLeitura','usuario.json');

//Leitura assincrona:

//fs.readFile('caminho','Padrão do arquivo',callback(error,data))

fs.readFile(caminhoArquivo,'utf-8',
    (error,data)=>{
        if(error){
            console.log(error)
            return;
        };
        console.log(data);
})
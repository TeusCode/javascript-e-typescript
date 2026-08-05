const fs = require('fs');
const path = require('path');
const caminh = 

fs.writeFile(path.resolve(__dirname,"arquivosEscritos","mensagem.txt"), "Aprendendo o módulo FS do Node.js!", "utf-8", () => {
    console.log("Arquivo criado com sucesso!");
});

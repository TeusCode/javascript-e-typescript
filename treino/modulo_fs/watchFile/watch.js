const fs = require('fs');
const path = require('path');
const caminho = path.resolve(__dirname, 'arquivos', 'historico.txt');

fs.watch(caminho, (eventType, filename) => {

    console.log(`Evento: ${eventType}, O arquivo ${filename} foi alterado!`);

    if(eventType === 'change'){
        const files = fs.readFileSync(caminho,'utf-8');
        console.log(files);
    }
});
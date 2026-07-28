const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'pessoas.json');
const write = require('./modules/write');
const reader = require('./modules/reader');

// const pessoas = [
//     {nome:'Mateus', idade: 22},
//     {nome:'Pedro', idade: 28},
//     {nome:'Henrique', idade: 32},
//     {nome:'Maria', idade: 72}
// ];
// const json = JSON.stringify(pessoas,'',2);//Converte o obj para json
// write(caminhoArquivo,json);

async function readerFile(caminho) {
    const dados = await reader(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach((valores) => {
        console.log(valores);
    })
}

readerFile(caminhoArquivo);
// writeFile(caminhoArquivo,json);
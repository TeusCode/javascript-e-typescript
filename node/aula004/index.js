const fs = require('fs').promises;
const path = require('path');

fs.mkdir()

async function readdir (rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(path.resolve(rootDir));
    walk(files);
}

function walk(files){
    for(let file of files){
        if(file.includes('aula')){
            console.log(file);
        }
    }
}

readdir('C:/Curso de JavaScript e TypeScript/JavaScript e TypeScript/node');
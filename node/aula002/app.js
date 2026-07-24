const path = require('path');
const caminho = path.resolve(__dirname,'modules','mod.js');

const Cachorro = require("./modules/mod.js");
const Cachorro2 = require(caminho);

const c1 = new Cachorro('dog 1');
c1.latir();
const c2 = new Cachorro2('dog 2');
c1.latir();

/*
// const c2 = new Cachorro2('dog2');
// c2.latir();
*/
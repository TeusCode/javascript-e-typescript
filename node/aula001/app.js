// const meuModulo = require("./mod1");
// const {nome, sobrenome, idade} = require('./mod1');

const nome = require("./mod1").nome;
const sobrenome = require("./mod1").sobrenome;
const idade = require("./mod1").idade;

const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(resposta => console.log(resposta.data))
    .catch(e => console.log(e));


// console.log(nome);
// console.log(sobrenome);
// console.log(idade);


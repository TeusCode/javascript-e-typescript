//Armazena as rotas, porém são os controllers que gerenciam o que elas vão fazer, individualmente
const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatosController = require('./src/controllers/contatosController');
const sobreController = require('./src/controllers/sobreController');

//Rotas da Home
route.get('/', homeController.homePage);
route.post('/', homeController.sendForm);

//Rotas de Contatos
route.get('/contatos', contatosController.homePage);

//Rotas de Sobre
route.get('/sobre', sobreController.homePage);





module.exports = route;
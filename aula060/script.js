//Imagine que um usuário enviou um formulário de cadastro, e você precisa garantir que nenhum campo ficou em branco.

const SISTEMA_CONFIG = {
  apiUrl: 'https://api.meusite.com',
  versao: '1.0.0'
};

//Tarefa: Use o método correto para impedir que o objeto SISTEMA_CONFIG seja modificado. Tente alterar a apiUrl logo em seguida e verifique se a mudança foi ignorada (ou se gerou erro usando "use strict").

Object.freeze(SISTEMA_CONFIG);
SISTEMA_CONFIG.apiUrl = "TESTE";
console.log(SISTEMA_CONFIG);
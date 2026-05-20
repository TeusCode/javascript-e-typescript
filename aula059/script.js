//Você está desenvolvendo um sistema de temas para um site. Tem um objeto com as configurações padrão e outro com as customizações que o usuário escolheu.

const configPadrao = { tema: 'claro', fonte: 'Arial', mostrarSidebar: true };
const customizacaoUsuario = { tema: 'escuro', mostrarSidebar: false };

//Tarefa A: Use Object.assign para mesclar os dois objetos em um novo chamado configFinalA.

//Tarefa B: Faça o mesmo processo, mas desta vez use o operador Spread (...) para criar o configFinalB.

const configFinalA = Object.assign({},configPadrao,customizacaoUsuario);
const configFinalB = {...configPadrao, ...customizacaoUsuario};

console.log(configFinalA);//As predefinições que foram feitas pelo usuário sobrescreveram as padrão
console.log(configFinalB);
//Tem dois objetos que representam a configuração de uma aplicação:

const configPadrao = { tema: "escuro", notificacoes: true, idioma: "pt" };
const configUtilizador = { notificacoes: false, idioma: "en" };

// A) Crie um novo objeto chamado configFinal1 combinando os dois objetos usando Object.assign. As configurações do utilizador devem sobrepor-se às padrão.
const configFinal1 = Object.assign({},configPadrao,configUtilizador);

// B) Crie um novo objeto chamado configFinal2 fazendo exatamente o mesmo, mas desta vez utilizando o operador spread (...).
const configFinal2 = {...configPadrao, ...configUtilizador};

//TESTES:
console.log(configFinal1);
console.log(configFinal2);
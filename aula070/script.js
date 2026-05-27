/*
Imagine um sistema onde temos diferentes níveis de permissão. O objeto Usuario possui apenas o nome, o Moderador herda do Usuario e possui a permissão de "deletar", e o Admin herda do Moderador e possui a permissão de "banir".
*/

const usuarioPadrao = {
  nome: "Visitante"
};

const moderador = {
  podeDeletar: true
};

const admin = {
  podeBanir: true
};

Object.setPrototypeOf(admin, moderador);
Object.setPrototypeOf(moderador, usuarioPadrao);

//Verificação:
console.log(admin.nome);       // Deve imprimir "Visitante"
console.log(admin.podeDeletar);// Deve imprimir true
console.log(admin.podeBanir);  // Deve imprimir true

//Desafio extra: Como verificar via código se admin herda de moderador?
console.log("Admin herda o objeto moderador? ",moderador.isPrototypeOf(admin));
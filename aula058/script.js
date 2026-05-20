//Crie um objeto simples:

const usuario = { nome: 'Carlos' };
//Tarefa: Use Object.getOwnPropertyDescriptor para descobrir se a propriedade nome é configurável, enumerável e gravável (writable). Exiba esse descritor no console.

const result = Object.getOwnPropertyDescriptor(usuario, "nome");

//Resultado:
console.log(`Listavel:${result.enumerable}`);
console.log(`Gravável:${result.writable}`);
console.log(`Configuravel:${result.configurable}`);
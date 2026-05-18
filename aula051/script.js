/*
Crie um objeto chamado pacote e use o Object.defineProperty() para configurar a chave tokenSeguranca.

Valor inicial: "ABC-9988-XYZ"

Regras:

O token não pode ser alterado por ninguém.

O token não pode ser deletado.

Por motivos de segurança, se alguém tentar listar as chaves do objeto (usando Object.keys(pacote)), o tokenSeguranca não pode aparecer.
 */

const pacote = {};

Object.defineProperty(pacote, "tokenSeguranca", {
  enumerable: false,
  value: "ABC-9988-XYZ",
  writable: false,
  configurable: false
});

//Testes:
console.log("--Testes--");
pacote.tokenSeguranca = "HACKEADO"; //Não pode ser alterado!
delete pacote.tokenSeguranca; //Não pode ser apagado!
console.log(Object.keys(pacote)); //Não deve aparecer
console.log(pacote.tokenSeguranca); //Deve exibir;




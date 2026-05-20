//Crie um objeto vazio chamado produto.

const produto = {};

//Tarefa: Use Object.defineProperty (ou defineProperties) para adicionar duas propriedades a ele:
// id: Deve ter o valor 123 e não pode ser alterado (read-only).
// segredo: Deve ter o valor "token_secreto" e não pode aparecer quando alguém tentar listar as chaves do objeto (non-enumerable).

Object.defineProperties(produto,{
    id:{
        enumerable:true,
        value:123,
        writable:false,
        configurable:false
    },
    segredo:{
        enumerable:false,
        value:"token_secreto",
    }
})

console.log(produto.segredo);
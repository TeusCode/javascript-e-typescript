// A) Crie um objeto vazio chamado carro. Utilize o Object.defineProperty para adicionar a propriedade marca com o valor "Renault". Garanta que esta propriedade não pode ser modificada (não editável).
const carro = {};

Object.defineProperty(carro,"marca",{
    value:"Renault",
    writable:false,
    configurable:false,
});

// B) No mesmo objeto carro, utilize o Object.defineProperties para adicionar duas novas propriedades de uma só vez: ano (valor 2024) e modelo (valor "Clio").

Object.defineProperties(carro,{
    ano:{value:2024},
    modelo:{value:"Clio"}
});
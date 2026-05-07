// carinho de compras
// retornar o total a pagar

// o que eu tenho?
const itens = [
    { description: 'pen', quantity: 1, price: 3 },
    { description: 'rule', quantity: 2, price: 5 },
    { description: 'erase', quantity: 2, price: 6 }
];
// o que espero: 25

// let total = 0;
// for (let i of itens) {
//     total += (i.quantity * i.price);
// }
// console.log(total);  

 let val;

const total = itens.reduce( (acc,cur) =>{
    return acc + (cur.quantity * cur.price);
}, 0 );

console.log(total);
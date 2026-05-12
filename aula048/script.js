const produtos = [
  { nome: "Mouse", categoria: "Tecnologia" },
  { nome: "Cadeira", categoria: "Móveis" },
  { nome: "Teclado", categoria: "Tecnologia" },
  { nome: "Mesa", categoria: "Móveis" },
  { nome: "Monitor", categoria: "Tecnologia" }
];

const eletronicos = [];
const outros = [];

produtos.forEach((item)=>{
    if(item.categoria != "Tecnologia") outros.push(item);
    else eletronicos.push(item);
});

console.log("Eletrônicos:", eletronicos);
console.log("Outros:", outros);
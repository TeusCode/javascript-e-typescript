const numeros = [5, 50, 20, 80, 23, 41, 23, 4, 46, 323, 41, 1];

const numerosDobrados = numeros.map((valor) => {
  return valor * 2
})
// numerosDobrados = [10,100,40,160,46,82,46,8,92,646,82,2]

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 }
];

// Retorne uma string com o nomes das pessoas

const nomes = pessoas.map(obj => obj.nome);

// Remova somente a chave "nome" do objeto
// Poderia utilizar o delete para deletar a chave, delete obj.nome;

// Aqui foi usado () para impedir que a arrow function confunda as chaves com as suas, que estão implicitas
const idades = pessoas.map((obj) => ({idade:obj.idade}));

// Adicione uma chave de id, a cada objeto

// Esse código está incorreto, porque ele atribui ao objeto original, pelo objeto ser passado como referência e não ter criado uma cópia
// const objCompleto = pessoas.map((obj,index)=>{
//   obj.id = index
//   return obj;
// })

console.log(pessoas);
console.log(objCompleto);
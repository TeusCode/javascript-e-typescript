// a partir de um array de objetos pessoas, retornar um objeto com um contador de pessoas por idade

// o que eu tenho?
const pessoas = [
    {nome:"Daniel", idade:28},
    {nome:"Maria", idade:29},
    {nome:"Marta", idade:29},
    {nome:"Juca", idade:32},
    {nome:"João", idade:45},
    {nome:"Jéssica", idade:24},
    {nome:"Pedro", idade:19},
    {nome:"Luan", idade:21},
    {nome:"Gustavo", idade:30},
    {nome:"Ana", idade:22},
    {nome:"Lucas", idade:27},
    {nome:"Beatriz", idade:31},
    {nome:"Ricardo", idade:40},
    {nome:"Fernanda", idade:35},
    {nome:"Tiago", idade:26},
    {nome:"Camila", idade:23},
    {nome:"Rafael", idade:33},
    {nome:"Larissa", idade:25},
    {nome:"Bruno", idade:28},
    {nome:"Letícia", idade:20},
    {nome:"Gabriel", idade:24},
    {nome:"Aline", idade:29},
    {nome:"Felipe", idade:31},
    {nome:"Vanessa", idade:34},
    {nome:"Mateus", idade:22},
    {nome:"Bianca", idade:26},
    {nome:"Rodrigo", idade:38},
    {nome:"Priscila", idade:30},
    {nome:"Hugo", idade:42},
    {nome:"Patrícia", idade:37}
];

// o que eu espero?
// exemplo: {"28": ['Daniel'], "29": ["Maria","Marta"]}

const pessoasPorIdade = pessoas.reduce( (obj,valor)=>{
    const nome = valor.nome;
    const idade = valor.idade;
    //Curto circuito:
    //Cuito circuito de OU, o segundo valor é padrão se o primeiro não for verdadeiro!
    obj[idade] = obj[idade] || []
    obj[idade].push(nome);//De qualquer forma ele fará um push

    //Código maior
    // if(obj[idade]){
    //     obj[idade].push(nome);
    // }else{
    //     obj[idade] = [];
    //     obj[idade].push(nome);
    // }
    return obj;
},{})

console.log(pessoasPorIdade);
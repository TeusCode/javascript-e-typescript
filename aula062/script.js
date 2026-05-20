const utilizador = {
  id: 101,
  nome: "Afonso",
  papel: "Admin",
  ativo: true
};

//A) Utilize um método para obter um array com todas as chaves do objeto.
const chaves = Object.keys(utilizador);
// B) Utilize um método para obter um array com todos os valores do objeto.
const valores = Object.values(utilizador);

//Com o mesmo objeto utilizador do exercício anterior, utilize o método Object.entries para transformar o objeto num array de pares [chave, valor]. De seguida, utilize um ciclo (por exemplo, forEach) para imprimir no formato: "Propriedade: [chave] | Valor: [valor]".

const chavesValores = Object.entries(utilizador);

chavesValores.forEach((elm)=> console.log(`Propriedade: [${elm[0]}] | Valor: [${elm[1]}]`));


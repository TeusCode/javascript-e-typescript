//Ao trabalhar com APIs, frequentemente precisamos transformar um objeto em uma URL com parâmetros (Query String).

const filtros = {
  categoria: 'eletronicos',
  preco_max: 500,
  disponivel: true
};

//Tarefa: Use Object.entries para transformar o objeto acima na seguinte string:

//"categoria=eletronicos&preco_max=500&disponivel=true"

const dados = Object.entries(filtros);
let url = "";

for(let elm in dados){
 url += `${dados[elm][0]}=${dados[elm][1]} `//Gera cada parte do url e vai concatenando
}

url = url.trim().split(" ").join("&");//Remove espaço do final, separa por " ", e depois junta separando por "&"
console.log(url);

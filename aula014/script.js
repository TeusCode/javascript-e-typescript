//Tipos de for:
const lista = ["Maçã","Uva", "Pera","Banana", "Abacate"];

//For clássico - Geralmente com interáveis(strings ou arrays)
for (let i = 0;i < lista.length;i++){
    // console.log(lista[i]);
}

//For in - Retorna o índice ou chave (strings, arrays ou objetos)
for (let i in lista){
    // console.log(lista[i]);
}

//For of - Retorna o valor em si (iteráveis, arrays ou strings)
for (let valor of lista){
    console.log(valor);
}

//Iterar => Repetir um processo, ação, mulriplas
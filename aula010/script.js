//O Objeto Date, ele armazena o tempo como um número em milisegundos passados desde o "Unix Epoch"(1° Janeiro de 1970);

//Como criar o objeto?
const dataAtual = new Date();

//Métodos do objeto, dentro da função:
function dataFormatada(data){
const dia = addZeroEsquerda(data.getDate());//Pega o dia atual;
const mes = addZeroEsquerda(data.getMonth()+1);//Pega o mês atual;
const ano = addZeroEsquerda(data.getFullYear());//Pega o ano;
const hora = addZeroEsquerda(data.getHours());//Pega a hora atual;
const minutos = addZeroEsquerda(data.getMinutes());//Pega os minutos atuais;
const segundos = addZeroEsquerda(data.getSeconds());//Pega os segundos;
const miliSegundos = addZeroEsquerda(data.getMilliseconds());//Pega os milisegundos;

return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}:${miliSegundos}`;
};

//Literalmente adiciona um 0 a esquerda se o número for menor que 10:
function addZeroEsquerda(valor){
return valor >=10 ? valor : `0${valor}`;
};

console.log(dataFormatada(dataAtual));

/*
Instruções: Resolva os desafios abaixo utilizando apenas JavaScript puro:

Declaração: Crie uma variável que armazene a frase: A "aula" de hoje é sobre 'Strings'.
(Mantenha as aspas duplas e simples no texto).

Caminho: Armazene o seguinte caminho de sistema em uma variável:
C:\meu_projeto\index.js.

Acesso: Dada a string let linguagem = "JavaScript";, extraia o caractere da posição 4 e o
da posição 0.

Busca: Na frase "Aprendendo programação no curso", identifique em qual índice
começa a palavra "programação".

Verificação: Na mesma frase da questão anterior, tente buscar a letra "z". Qual o
retorno do sistema?

Extração: Dada a string let frase = "O rato roeu a roupa do rei de Roma.";, extraia
apenas a palavra "Roma" (sem o ponto final).

Extração Reversa: Utilizando a mesma frase do rato, extraia os últimos 5 caracteres
(incluindo o ponto final) usando um índice negativo.

Substituição: Troque todas as ocorrências da letra "r" (minúscula) por um asterisco *
na frase do rato.

Divisão: Transforme a string "carro,moto,avião,barco" em uma lista (array) onde cada
item seja um veículo.

Formatação: Pegue o nome " ALBERTO SANTOS " e transforme-o para que fique todo
em letras minúsculas e sem os espaços vazios nas pontas. 
*/

//Declaração:
let frase = "A \"aula\" de hoje é sobre 'Strings'";
//Caminho:
let caminho = `C:\\meu_projeto\\index.js.`;

//Acesso:
let linguagem = "JavaScript";
//Extraindo da string linguagem, as posições 4 e 0;
console.log(`linguagem, Index 4:${linguagem[4]}`);//Extrai o caracter do index 4;
console.log(`linguagem, Index 0:${linguagem[0]}`);//Extrai o caracter do index 0;

//Busca:
let frase2 = "Aprendendo programação no curso";
//Identificando em que index, começa a palavra programação;
console.log(`A palavra programação inicia no index: ${frase2.indexOf("programação")}`);//indexOf(Identifica o index que começa uma palavra no JavaScript);

//Verificação:
//Verificar na variavel frase2, a letra z:
console.log(`Qual indice está a letra z? ${frase2.indexOf('z')}`);//Se a resposta for -1 é porque não existe a letra z na variavel frase2

//Extração:
let frase3 = "O rato roeu a roupa do rei de Roma.";
//Extraia somente a palavra Roma:
console.log(frase3.slice(frase3.length - 5, -1));//slice(startIndex , endIndex);

//Extração reversa:
//Extraia os 5 ultimos caracteres da frase3 usando o valor negativo no slice:
console.log(frase3.slice(-5)); 

//Substituição:
//Troque todas os caracteres r, por * na frase3:
console.log(frase3.replace(/r/g,'*'));//replace("antigo" , "novo");

//Divisão:
let frase4 = "carro,moto,avião,barco"
//Transforme a frase4 em um array de itens separado:
console.log(frase4.split(","));//split("separa por" , "Limite de separações");

//Formatação:
let nome = " ALBERTO SANTOS "
//Pegue o nome, e o deixe por inteiro com letras minusculas, e remova os espaços nas bordas:
console.log(nome.toLowerCase().trim());//loLowerCase(), transforma toda a string em minusculo e  trim() remove o espaço no inicio e no final da string



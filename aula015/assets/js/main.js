//Seleciona a Div pai, paragrafos:
const paragrafos = document.querySelector('.container');

//Seleciona todos os <p> dentro da tag pai, e cria uma especie de array, NÂO É UM ARRAY!, mas se comporta de maneira parecida!
const listaP = paragrafos.querySelectorAll('p');

//Usa o método getComputedStyle, que só funciona no navegador, não no NODE, para pegar o estilo do body inteiro.
const estilosBody = getComputedStyle(document.body);

//Usamos o backgroundColor, para pegar somente o valor desse atributo.
const backgroundColorBody = estilosBody.backgroundColor;

//Itera a lista P, adicionando o estilo igual do body;
for (let p of listaP){
    p.style = `background-color:${backgroundColorBody};color:white;border-radius:5px;padding:5px;`;
    console.log(p);
}


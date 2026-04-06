const container = document.querySelector('.container');

const elementos = [
    { tag: 'p', texto: 'Texto dentro de um parágrafo "p"' },
    { tag: 'div', texto: 'Texto dentro de uma divisão "div"' },
    { tag: 'footer', texto: 'Texto dentro de um rodapé "Footer"' },
    { tag: 'section', texto: 'Texto dentro de uma sessão "section"' }
];

for (let i = 0; i < elementos.length; i++) {

    const texto = elementos[i].texto;
    const tag = elementos[i].tag;

    const elm = criarElemento(tag); // 1

    adicionarMensagem(elm, texto);  // 2
    adicionarComoFilho(elm);  // 3

    //Cria loop que:
    // 1. Chama a função criarElemento(), que pega qual a [tag] do elemento referente ao index que estamos e armazena o elemento na variável [elm];
    // 2. Chama a função adicionarMesangem(), que usa como argumento, o elemento [elm], e o [texto], referente ao index que estamos;
    // 3. Chama a função adicionarComoFilho, que adiciona o elemento referente ao index dentro do pai .container
}

function criarElemento(e) {
    const elm = document.createElement(e);
    return elm //Retorna elemento criado.

}

function adicionarMensagem(elm, msg) {
    elm.innerHTML = msg;//Adiciona mensagem dentro do elemento.
}

function adicionarComoFilho(elm) {
    container.appendChild(elm);//Adiciona o elemento como filho.

}

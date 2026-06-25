//Capturar evento clique:
const clique = document.addEventListener('click', e => {
    elm = e.target;
    tag = elm.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregarPagina(elm);
    }
});

async function carregarPagina(elm) {
    try{
    const href = elm.getAttribute('href');
    const response = await fetch(href);
    if(response.status !== 200) throw new Error(String(response.status));
    const html = await response.text();
    carregarResultado(html);
    }catch(e){
        console.error(e);
    }
}

function carregarResultado(response) {
    const resposta = document.querySelector('.resposta');
    resposta.innerHTML = response;
}


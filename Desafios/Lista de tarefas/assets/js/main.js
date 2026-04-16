const inputTarefa = document.querySelector('.inp-tarefas');
const btnAddTarefa = document.querySelector('.btn-add-tarefas');
const listaTarefas = document.querySelector('.lista-tarefas');

//Observa botão addTarefa
btnAddTarefa.addEventListener('click', () => {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
});
//Observa a tecla 'Enter'
document.addEventListener('keypress', (e) => {
    if (!inputTarefa.value) return;
    if (e.key === 'Enter') {
        criarTarefa(inputTarefa.value);
    }
});

//Cria somente o elemento li, que vai abrigar a tarefa
function criaLi() {
    const li = document.createElement('li');
    return li;
}

//Cria o botão apagar de cada tarefa, e adiciona o observador para esperar o click
function criaBtnApagar(li) {
    li.innerText = ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.addEventListener('click', function (e) {
        apagarTarefa(e.target)
    });
    return btnApagar;
}

//Adiciona o texto da tarefa dentro da lista, 
function criarTarefa(texto) {
    //Cria os Elemento:
    const li = criaLi();
    const btnApagar = criaBtnApagar(li);

    li.innerText = texto;
    li.classList.add('itemTarefa');
    btnApagar.classList.add('btn');
    listaTarefas.appendChild(li)
    li.appendChild(btnApagar);

    limpaInput();
    salvaTarefa(texto);
}

//Elimina a tarefa li, do botão apagar clicado
function apagarTarefa(e) {
    e.parentElement.remove();
    salvaTarefa();
}

//Limpa o campo de input depois de enviar a terefa.
function limpaInput() {
    inputTarefa.focus();
    inputTarefa.value = '';
}

function salvaTarefa() {
    const liTarefas = listaTarefas.querySelectorAll('li');//Seleciona a lista de tarefas já criada.
    const listaDeTarefas = [];

    //Itera a nodeList, e adiciona dentro da lista de tarefas:
    for (let tarefa of liTarefas) {
        listaDeTarefas.push(tarefa.innerText.replace('Apagar', ''));
    }

    //Converte em string:
    const listaJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', listaJSON);
}

function addTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');//Pega as tarefas salvas no localStorage
    const listaDeTarefas = JSON.parse(tarefas);//Converte de volta para array

    if (!!listaDeTarefas) {
        for (let tarefa of listaDeTarefas) {
            criarTarefa(tarefa);
        };
    }
}

addTarefasSalvas()
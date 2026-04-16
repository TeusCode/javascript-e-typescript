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
        console.log(e);
    }
});

//Cria somente o elemento li, que vai abrigar a tarefa
function criaLi(){
    const li = document.createElement('li');
    return li;
}

//Cria o botão apagar de cada tarefa, e adiciona o observador para esperar o click
function criaBtnApagar(li){
    li.innerText = ' ';
    const btnApagar = document.createElement('button'); 
    btnApagar.innerText = 'Apagar';
    btnApagar.addEventListener('click',function (e){
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

    inputTarefa.value = '';
}

//Elimina a tarefa li, do botão apagar clicado
function apagarTarefa(e){
    e.parentElement.remove();
}
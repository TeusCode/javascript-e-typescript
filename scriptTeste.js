let i = 0;

function salvaTarefa(tarefa){
    localStorage.setItem(`tarefa${i};`, tarefa)
}

salvarTarefa('Fazer café');
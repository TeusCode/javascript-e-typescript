//Funções recursivas: São funções que chamam a sí mesmas, tem um comportamento parecido com um loop for, while ou dowhile.

function recursiva(inicio){
    if(inicio > 100) return;
    console.log(inicio)
    inicio++
    recursiva(inicio); //Chama a função novamente!
}   

//As funções recursivas tem um máximo de loops que podem fazer para proteger a memória e evitar travamentos.

recursiva(5);
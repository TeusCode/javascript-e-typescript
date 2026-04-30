//Função geradora:

/*Função especial, onde cada chamada retorna um valor diferente.
    - Utiliza se uma sintaxe de função comum, porém com um asterisco depois da palavra function ex: function*
    - Realiza pausas durante a execução;
    - Utiliza a palavra yield (Colheita) para retornar o valor sem parar a função, somente realiza uma pausa;
    - Sempre que chamada retorna um valor diferente;
    - A função não apaga as informações depois de ser executada, ela só é pausada, para quando ser chamada novamente retomar de onde parou, com os valores de variáveis e outros dados intectos;
    - Para chamar a função usamos o seu método next() (próximo), que nos entrega um objeto padronizado: {value: undefinded, done: false}, com informações do valor, da execução atual e se a função já terminou a execução; 
*/

    function* geradora1 (){
        //Código qualquer...
        yield "Valor cuspido1"; //Função cospe o valor 1, e é pausada aqui!
        //Código qualquer...
        yield "Valor cuspido2"; //Função cospe o valor2, e é pausada aqui!
        //Código qualquer...
        yield "Valor cuspido3"; //Função cospe o valor3, e é pausada aqui!
    }

    const g1 = geradora1(); //Armazena um objeto gerador, Object [Generator] {}

    //Devemos utilizar o next(), para receber o objeto padronizado com {value, done}
    //console.log("Objeto Padronizado:", g1.next()); //{value:"Valor cuspido1", done: false}

    //Para pegarmos somente o valor:
    console.log(g1.next().value); //valor cuspido1
    console.log(g1.next().value); //valor cuspido1
    console.log(g1.next().value); //valor cuspido1
    console.log(g1.next().done); // Já terminou de executar a função? true
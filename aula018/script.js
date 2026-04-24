//Treinando get e set:

const pessoa =  {
nome:null,
sobrenome:null,
get mostraNome(){
    console.log(`Nome:${this.nome} ${this.sobrenome}`)
},
set inserirNome(vNome){
    if(isNaN(vNome)) {
        let arrayNome = vNome.split(' ');//Transforma a string em um array, separando os itens com ' '
        this.nome = arrayNome.shift();//Remove o primeiro item do array
        this.sobrenome = arrayNome.join(' ');//Junta os itens do array em uma string, onde cada item é separado por ' '
    }
}
};


pessoa.inserirNome = 'Luan Junior Pereira';      //Com validação!
pessoa.mostraNome;

pessoa.nome = "Gustavo";                         //Sem validação!
pessoa.sobrenome = "Fernandes"
pessoa.mostraNome;

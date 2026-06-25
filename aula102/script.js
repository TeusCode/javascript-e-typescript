//Lendo um arquivo json
fetch("pessoas.json")
    .then(resposta => resposta.json())//Converte para obj js
    .then (json => criaTabela(json))//Envia o obj js para a função cria tabela
    .catch (e => console.log("Não foi possivel carregar"));

function criaTabela(json){
    const container = document.querySelector('.container');
    const tabela = document.createElement('table');
    container.appendChild(tabela);
    
    for(let pessoa of json){
        const tr = document.createElement('tr');//Cria linha horizontal

        let td = document.createElement('td');//Cria coluna nome
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');//Cria coluna idade
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');//Cria coluna cpf
        td.innerHTML = pessoa.cpf;
        tr.appendChild(td);

        tabela.appendChild(tr);
    }
}
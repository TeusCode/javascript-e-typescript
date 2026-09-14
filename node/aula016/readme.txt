Nessa aula estamos aprendendo a injetar conteúdo nas views, mas expecificamente na index.ejs



1. Precisa ser enviado juntamente com o render:
res.render('arquivo.ejs',{
    titulo: 'titulo',
    descricao:'descricao'
})

1.1 Podemos mandar também atráves do middle:
res.locals.variavelLocal = 'conteúdo'
(A diferença com o middle é que ela estará disponível em todas as páginas! (se não for definido em uma rota!))



2. Para injetar usamos alguns Tamplates no arquivo.ejs:

<%= conteúdo %>  (Não escapa os caracteres!);
<%- conteúdo com tags HTML %>
<% controle de fluxo (if, for...) %> (obs, cada linha tem que ser aberta tag e fechada: <% %>, <%= %>)
<%# Comtários %>
<%- include('CAMINHO ARQUIVO'); %>



Exemplo de foreach:

<% numeros.forEach(n=>{ %>
    <%= n %>
<% }) %>
Nesta aula aprenderemos sobre a biblioteca helmet.js

É uma biblioteca utilizada para aumentar a segurança das nossas rotas, 
configurando vários cabeçarios HTTP (HTTP headers). Ele protege contra vulnerabilidades comuns da web como:

- XSS (Cross-Site Scripting): Impede que injetem scripts maliciosos na sua página.
- Clickjacking: Impede que seu site seja colocado dentro de um <iframe> malicioso em outro site.
- Ataques de sniffing de MIME-type, entre outros.

Ou seja, ele foca em blindar o seu servidor contra ataques que exploram falhas de cabeçarios do navegador.

O CSRF (Cross-Site Request Forgery) Falsificação de solicitação:

Ele proteje contra ataques onde um site malicioso induz o navegador de um usuário (que já está autenticado no site) a enviar requisições indesejadas (como uma transferência bancária ou alteração de senha) sem que o usuário perceba.Geralmente ele é evitado usando tokens CSRF


Instalações:
npm install helmet 
npm install csurf

Helmet: só importar e depois usar o middleware:
app.use(helmet());
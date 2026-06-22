/*
Exercício 5: Validação Assíncrona
Crie uma função verificarLogin(usuario, senha) que simula uma verificação no banco de dados.

Se o usuário for "admin" e a senha "123", resolva a Promise após 1.5s com true.

Caso contrário, rejeite a Promise com o erro "Usuário ou senha incorretos".

Crie uma função iniciarSessao(u, s) que utilize o try/catch para chamar verificarLogin e exibir "Bem-vindo!" em caso de sucesso ou a mensagem de erro caso falhe.
*/

function verificarLogin(usuario, senha) {
    return new Promise((resolve, reject) => {
        if (usuario === "admin" && senha === "123") {
            setTimeout(() => {
                resolve(true);
            }, 1500);
        } else {
            reject("Usuário ou senha incorretos");
        }
    })
}

async function iniciarSessao(u, s) {
    try {
        const sessao = await verificarLogin(u, s);
        if (sessao) {
            console.log("Seja bem vindo!");
        };
    } catch (e) {
        console.log(e);
    }
}

iniciarSessao("admin", "123")
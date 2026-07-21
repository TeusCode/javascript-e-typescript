
export default class GeradorDeSenha {

    geraNumeros() {
        return Math.floor(Math.random() * (9 - 0 + 1) - 0);
    }

    geraLetras(maiusculas = true) {
        const letrasM = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        const indiceAletorio = Math.floor(Math.random() * ((letrasM.length - 1) - 0 + 1) - 0);

        if (maiusculas) {
            return letrasM[indiceAletorio];
        } else {
            return letrasM[indiceAletorio].toLowerCase();
        }
    }

    geraCaracteres() {
        const caracteres = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '_', '=', '+',
            '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?'];

        const indiceAletorio = Math.floor(Math.random() * ((caracteres.length - 1) - 0 + 1) - 0);
        return caracteres[indiceAletorio];
    }

    montarSenha(qnt, numero = false, maiusculas = false, minusculas = false, simbolos = false) {
        let senha = '';
        let funcoes = [];


        if (numero) funcoes.push(() => this.geraNumeros());
        if (maiusculas) funcoes.push(() => this.geraLetras(true));
        if (minusculas) funcoes.push(() => this.geraLetras(false));
        if (simbolos) funcoes.push(() => this.geraCaracteres());

        for (let i = 0; i < qnt; i++) {
            const func = funcoes[Math.floor(Math.random()*funcoes.length)];
            senha += func();
        }

        return senha;
    }
}

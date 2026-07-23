//Converte códigos em caracteres, tradução: tabela ascii
const rand = (min, max)=>{
    return Math.floor(Math.random()*(max - min + 1)+ min);
}

const geraLetra_M = ()=> String.fromCharCode(rand(65,90));
const geraLetra_m = ()=> String.fromCharCode(rand(97,122));
const geraSimbolos = ()=> String.fromCharCode(rand(33,47));
const geraNumeros = ()=> String.fromCharCode(rand(48,57));

export default function montaSenha(qnt, maiusculas, minusculas, simbolos, num){
   Number(qnt);
    const senha = [];

    for(let i = 0;i < qnt; i++){
        maiusculas && senha.push(geraLetra_M());
        minusculas && senha.push(geraLetra_m());
        simbolos && senha.push(geraSimbolos());
        num && senha.push(geraNumeros());
    }
    return senha.join('').slice(0,qnt);
}
const usuarios = [
  { nome: "Tiago", pontos: 150, ativo: true },
  { nome: "Lúcia", pontos: 80, ativo: true },
  { nome: "Marcos", pontos: 200, ativo: false },
  { nome: "Fernanda", pontos: 120, ativo: true },
  { nome: "Ricardo", pontos: 50, ativo: false },
  { nome: "Beatriz", pontos: 300, ativo: true }
];


// 1. Filtrar usuários com mais de 100 pontos
const usuariosVips = usuarios.filter((usuario)=>{
   return usuario.pontos > 100;
});
// console.log(usuariosVips);

// 2. Bônus de 50 pontos
const bonusVips = usuariosVips.map((usuario)=>{
    return ({
        ...usuario,
        pontos: usuario.pontos + 50
    })
});
// console.log(bonusVips);

// 3. Calcular a MÉDIA de pontos final
// Dica: A média é a (soma de todos os pontos) / (quantidade de usuários no array)
const mediaPontosVip = bonusVips.reduce((acc,cur,index,array)=>{
    acc += cur.pontos;
    if(index === array.length - 1){
       return acc / array.length
    }
    return acc;
},0)

console.log(bonusVips);
console.log(`A média dos pontos é: ${mediaPontosVip}`);
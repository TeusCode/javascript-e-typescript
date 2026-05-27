const objA = {
  chaveA: "A"
};

const objB = {
  chaveB: "B"
};

const objC = {
  chaveC: "C"
};

const objD = {
  chaveD: "D"
};

//Podemos manipular o prototype de um objeto, adicionar, outros objetos como prototypes dele.

Object.setPrototypeOf(objC, objD);//O objetoC recebe o objeto D, como prototype
Object.setPrototypeOf(objB,objC);//O objetoB recebe o objeto D e C, como prototype
Object.setPrototypeOf(objA, objB);//O objetoA recebe o objeto B, C e D como prototype


//Cadeia de prototypes:
//objA --> objB -> objC --> objD --> Object.prototype --> null

//O objeto A possui todas as chaves:
console.log("objA --> objB -> objC --> objD --> Object.prototype --> null");

//Objetos:
console.log("");
console.log("Objetos:");
console.log("Objeto A: ",Object.getPrototypeOf(objA));
console.log("Objeto B: ",Object.getPrototypeOf(objB));
console.log("Objeto C: ",Object.getPrototypeOf(objC));
console.log("Objeto D: ",Object.getPrototypeOf(objD));
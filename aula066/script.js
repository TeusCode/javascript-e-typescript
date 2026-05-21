const objA = {
  chaveA: "A"
};
const objB = {
  chaveB: "B"
};
const objC = {
  chaveC: "C"
};

//Faça o objA herdar as propriedades dos outros objetos, transforme eles em protótipos do objA

Object.setPrototypeOf(objB,objC);
Object.setPrototypeOf(objA,objB);

//TESTE HERANÇA:
console.log(objA.chaveA);
console.log(objA.chaveB);
console.log(objA.chaveC);

//O objeto A está herdando as chaves dos outros objetos: ObjA => ObjB => ObjC => Object.prototype

//Verificar prototype:
console.log(Object.getPrototypeOf(objA));
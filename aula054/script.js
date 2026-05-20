//Desaparecimento:

const usuario = {
  id: 999,
  nome: "Carlos"
};

Object.defineProperty(usuario, id, {
  enumerable: false,
  configurable: false,
  writable: false
});

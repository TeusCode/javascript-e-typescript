//Propriedade imutável:

const config = {};

Object.defineProperty(config, "versao", {
  enumerable:true,
  value:"1.0.0",
  writable:false,
  configurable:false
});

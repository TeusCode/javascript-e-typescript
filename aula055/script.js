//Sensor de temperatura:

const termometro = {
  _celsius: 23,
};

Object.defineProperty(termometro, "celsius", {
  enumerable: true,
  configurable: false,
  get () {
    console.log(termometro._celsius);
  },
  set (valor) {
    termometro._celsius = valor;
    console.log(`Temperatura alterada para ${valor}°C`)
  }
});

termometro.celsius = 60;
console.log(termometro._celsius);

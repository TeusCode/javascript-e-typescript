import GeraCpf from "./modules/GeraCpf.js"

import './assets/css/style.css';

(function(){
    const gera = new GeraCpf();
    const cpfGerado = document.querySelector(".cpfGerado");

    cpfGerado.innerHTML = gera.geraNovoCpf()
})();
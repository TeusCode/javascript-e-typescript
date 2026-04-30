function Calculadora(){//Function Construtora de objetos!
    //Privados:
    const display = document.querySelector('.display');
    const calcula = () =>{
      let resultado = display.value;
            
        try{ //Tenta!
            resultado = eval(resultado);

            if(!resultado){
                alert("Valores inválidos!")
                return;
            }

        display.value = String(resultado);
        }catch(e){ //Se der erro:
            alert("Valores inválidos!");
            console.log(e);
            return;
        }  
    };
    const carregaBotoes = () =>{
        document.addEventListener('click', (e) => {
        const el = e.target;
            if (el.classList.contains('btn-num')) addDisplay(el);
            if (el.classList.contains('btn-limpar')) limparDisplay();
            if (el.classList.contains('btn-result')) calcula();
            if(el.classList.contains('btn-del')) apagaDisplay();
        });
    };
    const enviarComEnter = () =>{
        document.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') calcula()
        });
    };
    const addDisplay = (el) => display.value += el.textContent;
    const limparDisplay = () => display.value = "";
    const apagaDisplay = () => display.value = display.value.slice(0,-1);

    //Públicos:
    this.inicia = () =>{
        carregaBotoes();
        enviarComEnter();
    };
}

const cal1 = new Calculadora();
cal1.inicia();
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
            alert("Valores inválidos!")
            console.log(e)
            return;
        }  
    };
    const carregaBotoes = () =>{
        document.addEventListener('click', (e) => {
        const el = e.target;
            if (el.classList.contains('btn-num')) {
                display.value += el.textContent;
                }
            if (el.classList.contains('btn-limpar')) {
                display.value = "";
            }
            if (el.classList.contains('btn-result')) {
                calcula();
            }
            if(el.classList.contains('btn-del')){
                    let del = display.value;
                    del = del.slice(0,-1);
                    display.value = del;
            }
        });
    };
    const enviarComEnter = () =>{
        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') calcula()
        });
    };

    //Públicos:
    this.inicia = () =>{
        carregaBotoes();
        enviarComEnter();
    };
}

const cal1 = new Calculadora();
cal1.inicia();
function criarCalculadora() {
    return {
        display: document.querySelector('.display'),

        iniciar() {
            this.carregarBotoes();
            this.enviarComEnter();
        },

        calcula() {
            let resultado = this.display.value;
            
            try{ //Tenta!
                resultado = eval(resultado);

                if(!resultado){
                    alert("Valores inválidos!")
                    return;
                }

                this.display.value = String(resultado);
            }catch(e){ //Se der erro:
                alert("Valores inválidos!")
                console.log(e)
                return;
            }
        },

        carregarBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.display.value += el.textContent;
                }

                if (el.classList.contains('btn-limpar')) {
                    this.display.value = " ";
                }

                if (el.classList.contains('btn-result')) {
                    this.calcula();
                }

                if(el.classList.contains('btn-del')){
                   let del = this.display.value;
                   del = del.slice(0,-1);
                   this.display.value = del;
                }
            });
        },

        enviarComEnter(){
            document.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.calcula()
            });
        }

    };

}

const calculadora = criarCalculadora();
calculadora.iniciar();
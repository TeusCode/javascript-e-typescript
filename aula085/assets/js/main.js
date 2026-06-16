class validaFormulario {
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos(); //Chama os eventos
    }

    //Área de métodos, irão para o prototype:
    eventos(){
        this.formulario.addEventListener('submit', (e) =>{//Escuta o evento
            this.handleSubmit(e); //Previnir carregamento padrão
        });
    }

    handleSubmit(e){
        e.preventDefault();//Desativa o comportamento padrão do submit
        const camposValidos = this.camposValidos();//Verifica se os campos obedecem as condições
       
    }

    camposValidos(){
        let valid = true;
        

        //Limpa campos
        for(let campo of this.formulario.querySelectorAll('.erro-msg')){
            
            if(campo.classList.contains('erro-msg')){
                campo.classList.remove('erro-msg');
                campo.innerHTML = '';
            }
        };

        for(let campo of this.formulario.querySelectorAll('.validar')){// Lê os elementos do formulário (OBS. label, fieldset etc... NÃO SÃO CONSIDERADOR DADOS DE ENTRADA, PORTANTO NAO FAZEM PARTE DA COLEÇÃO DE ELEMENTOS)
            const label = campo.previousElementSibling.innerText;
            

            //Valida, se o campo está em branco
            if(!campo.value){
                valid = false;
                this.criarErro(campo, `Campo "${label}" está em branco`);
            }
            //Valida, se o cpf é válido
            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }
        }
        return valid;
    }

    validaCPF(campoCpf){
        const cpf = new ValidaCpf(campoCpf.value);
        if(cpf.valida()){
            this.criarErro(campoCpf,"Cpf inválido!");
        };
    }

    criarErro(campo, msg){
        const div = document.createElement('div');//Cria elm, onde irá conter o erro
        div.innerText = msg;
        div.classList.add('erro-msg');

        campo.after(div);//Adiciona div, como irmão anterior do campo

    }
}

const valida = new validaFormulario();

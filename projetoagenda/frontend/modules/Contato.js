import validator from 'validator';

export default class Contato{
    constructor(formClass){
           this.form = document.querySelector(formClass); 
    }

    init(){
        if(!this.form) return;
        this.events(this.form);
    }

    events(form){
        form.addEventListener('submit',e =>{
            e.preventDefault();//Impede envio
            this.validate(e);
        })
    }

    validate(e){
        let erro = false;
        const el = e.target;//extrai elemento
        const telefone = this.form.querySelector('input[name="telefone"]');
        const email = this.form.querySelector('input[name="email"]');

        this.limparErros(this.form);//Limpa erros anteriores

        if(!validator.isEmail(email.value)){
            erro = true;
            this.exibirMensagensErro(email,'E-mail inválido!');
        }
        
        if(!email && !telefone ){
            erro = true;
            this.exibirMensagensErro(email,'Precisa ser preenchido pelo menos um Contato, E-mail ou Telefone');
            return;
        }else{
            erro = false;
            this.limparErros(this.form);
        }

        if(erro === true) return;        
        el.submit();
    }

    limparErros(form){
        const errosArray = form.querySelectorAll('.msg-erro');//
        errosArray.forEach (msg => {msg.remove()});
    }

    exibirMensagensErro(elm,msg){
        const elmMsg = document.createElement('div');
        elmMsg.textContent = msg;
        elmMsg.style.color = 'red';
        elmMsg.classList.add('msg-erro');

        elm.after(elmMsg);
    }
} 
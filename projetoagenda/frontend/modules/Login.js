import validator from 'validator';

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit',(e)=>{
        e.preventDefault();//Desativa o comportamento padrão do formulário (que seria enviar o formulário)
        this.validate(e);
    })
    }

    validate(e){
        let erro = false;
        const el = e.target;//Extrai o elemento do evento
        const emailInput = el.querySelector('input[name="email"]'); //Elemento input[atributo='nome'];
        const passwordInput = el.querySelector('input[name="password"]'); //Elemento input[atributo='nome'];

        this.limpaErros(this.form);//Remove mensagens de erros anteriores

        //validação:
        if(!validator.isEmail(emailInput.value)){
            erro = true;
            this.exibeMsgErro(emailInput,'E-mail Inválido!');
        } 

        //A Senha precisa ter entre 3 e 50 caracteres
        if(passwordInput.value.length < 3 || passwordInput.value.length > 50){
            erro = true;
            this.exibeMsgErro(passwordInput,'A senha deve conter entre 3 a 50 caracteres');
         }

        if(erro === true) return
            el.submit();//Envia o formulário
    }

    limpaErros (form){
        const errosAntigos = form.querySelectorAll('.msg-erro');
        errosAntigos.forEach(msg => msg.remove());
    }

    exibeMsgErro(elm,msg){
        const erro = document.createElement('div');
        erro.textContent = msg;
        erro.classList.add('msg-erro')
        erro.style.color = 'red';
        elm.after(erro);
    }

}
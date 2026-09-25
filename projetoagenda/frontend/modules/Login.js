export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form){
            console.log('form nao existe!');
            console.log(this.form);
            return;
        };
        this.form.addEventListener('submit',(e)=>{
        e.preventDefault();
        console.log(this.form.input)
    })
    }
}
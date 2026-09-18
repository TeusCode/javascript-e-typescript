const mongoose = require("mongoose");
const validator = require('validator');
const bcrypt = require('bcryptjs');
//Cria Estrutura dos dados de login
const LoginSchema = new mongoose.Schema({
  email:{type:String, required:true,},
  password: {type:String, required:true,}
});

//Cria Modelo
const LoginModel = mongoose.model('Login',LoginSchema); //Retorna uma promise

//Válida os dados, antes de serem inseridos no banco
class Login{
  constructor(body){
    this.body = body;
    this.erros = [];
    this.user = null;
  }

  async register(){
    this.valida();
    if(this.erros.length > 0) return;

    //Verifica se o usuário Existe:
    //Como é uma verificação dentro do banco, retorna uma promise
    await this.userExists();

    if(this.erros.length > 0) return;

    //Criptografa a senha antes de ser salva
      const salt = bcrypt.genSaltSync();//Gera uma string aleatória
      this.body.password = bcrypt.hashSync(this.body.password, salt);//Aplica o algoritmo bcrypt fundindo a senha original em texto puro, com o salt, e substitui por uma senha criptografada.

    //Tudo que depende de fatores externos, que podem falhar, como (ler arquivos, acessar APIs de terceiros ou mexer em Banco de Dados) precisa de um try catch, para proteger o servidor.
    try{
      console.log('Usuário criado!');
      this.user = await LoginModel.create(this.body);//Cria o Usuário no banco de Dados
    }catch(e){
      console.log(e);
    }
    
  }

  async userExists(){
    const user = await LoginModel.findOne({email: this.body.email});//Busca e retorna o primeiro documento da coleção que corresponda corretamente ao campo e-mail informado
    if(user) this.erros.push('Esse usuário já existe!');
    console.log(user);
    return;
  }

  valida(){
    this.cleanUp();
    //Validação, será feita com um modulo externo: validator
    //E-mail precisa ser válido
    if(!validator.isEmail(this.body.email)) this.erros.push('E-mail Inválido!');
    //A Senha precisa ter entre 3 e 50 caracteres
    if(this.body.password.length < 3 || this.body.password.length > 50){
      this.erros.push('A senha precisa ter entre 3 e 50 caracteres');
      }
  }
  //Valida se o tipo de dado é mesmo uma string
  cleanUp(){
    for(const key in this.body){
      if(typeof this.body[key] !== 'string'){
          this.body[key] = '';
      }
    }
    this.body = { //Limpa o objeto para que seja mandado somente, as chaves valores corretas, e não outras coisas que podem vir no objeto, por exemplo do csrfToken
      email: this.body.email,
      password: this.body.password
    }
  }
}


module.exports = Login;
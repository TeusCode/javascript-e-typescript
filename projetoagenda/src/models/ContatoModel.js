const mongoose = require("mongoose");
const validator = require('validator');

//Cria Estrutura dos dados de cadastro de contato
const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, default:'' },
  telefone: { type: String, default:''  },
  email: { type: String, default:''},
  criadoEm: { type: Date, default: Date.now}
});

//Cria modelo no banco
const ContatoModel = mongoose.model('Contato', ContatoSchema);

class Contato {
  constructor(body) {
    this.body = body; //Guarda dentro da classe, (quando for instanciada) o conteúdo do body da requisição
    this.erros = []; //Guarda um array de erros
    this.contato = null; //Guarda o contato para caso necessário
  }

  async register() {
    this.valida();
    if (this.erros.length > 0) return;
    await this.contatoExists();//Espera a consulta, se existe no banco de dados
    if (this.erros.length > 0) return;
    this.contato = await ContatoModel.create(this.body);//Cria contato no banco de dados
  }

  static async buscaId(id){ //Buscando no banco de dados pelo id:
    if(typeof id !== 'string') return;
    const user = await ContatoModel.findById(id);//Busca usuário pelo id, retorna Obj
    return user;
  }

  async contatoExists() {
    const contatoTelefone = await ContatoModel.findOne({ telefone: this.body.telefone });//Busca e retorna o primeiro documento da coleção que corresponda corretamente ao campo nome informado
    if (contatoTelefone) this.erros.push('Esse Telefone já existe!');
    const contatoEmail = await ContatoModel.findOne({ email: this.body.email});//Busca e retorna o primeiro documento da coleção que corresponda corretamente ao campo nome informado
    if (contatoEmail) this.erros.push('Esse E-mail já existe!');
    return;
  }

  valida() {
    this.cleanUp();//Formata o objeto
    //Válida se não tem nenhum erro
    if(this.body.email && !validator.isEmail(this.body.email)) this.erros.push('E-mail Inválido!');//Se email não existir segue, se existir valide se ele é válido
    if(!this.body.nome) this.erros.push('O campo Nome é obrigatório!');
    if(!this.body.email && !this.body.telefone) this.erros.push('Você precisa adicionar pelo menos um meio de contato!');
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }
    this.body = { //Limpa o objeto para que seja mandado somente, as chaves valores corretas, e não outras coisas que podem vir no objeto, por exemplo do csrfToken
      nome: this.body.nome,
      sobrenome: this.body.sobrenome,
      telefone: this.body.telefone,
      email: this.body.email,
    }
  }

  async edit(id){
  if(typeof id !== 'string') return;
  this.valida();
  if (this.erros.length > 0) return;

  //Atualização no banco de dados
  //ModeloUtilizado.EncontreOContatoPorId(identificação,NovoConteúdo(obj), {returnDocument:after "indica que deve ser retornado os novos dados, e não os antigos"})           
  this.contato = await ContatoModel.findByIdAndUpdate(id,this.body, {returnDocument:'after'});
  }
}

module.exports = Contato;

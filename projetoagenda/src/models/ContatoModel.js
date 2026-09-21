const mongoose = require("mongoose");
const validator = require('validator');

//Cria Estrutura dos dados de cadastro de contato
const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  telefone: { type: String, required: true },
  email: { type: String, required: true }
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
    this.contato = await ContatoModel.create(this.body);
  }

  async contatoExists() {
    const contato = await ContatoModel.findOne({ nome: this.body.nome });//Busca e retorna o primeiro documento da coleção que corresponda corretamente ao campo nome informado
    if (contato) this.erros.push('Esse contato já existe!');
    return;
  }

  valida() {
    this.cleanUp();//Formata o objeto
    //Válida se não tem nenhum erro
    if (this.erros.length > 0) return;


    //AINDA PRECISA SER FEITA A VALIDAÇÂO!!!


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
}

module.exports = Contato;

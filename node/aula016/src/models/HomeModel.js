const mongoose = require("mongoose");

//Modelagem dos dados:
//Cria estrutura/molde esquema (schema), e diz quais campos a coleção terá e quais as regras
const HomeSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String,
});

//Transforma o esquema (schema), em um Model operacional do Mongoose
//mongoose.model('NOME_BASE','ESQUEMA(schema)');
const HomeModel = mongoose.model("Home", HomeSchema);

class Home{

}

module.exports = Home;
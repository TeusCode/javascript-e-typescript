//FAZ A CONFIG DO BANCO DE DADOS
require("dotenv").config();

module.exports = {
  dialect: "mariadb",//Qual banco usar
  host: process.env.DATABASE_HOST,//Ip do servidor
  port: process.env.DATABASE_PORT,//Porta de conexão do banco
  username: process.env.DATABASE_USERNAME,//Usuario do banco
  password: process.env.DATABASE_PASSWORD,//Password do banco
  database: process.env.DATABASE,//Nome do dataBase
  define: {
    timestamps: true,//Adiciona as colunas createdAt e updatedAt, em todas as tabelas;
    underscored: true,//Colunas ficam em minusculos com _ entre as palavras
    underscoredAll: true,//Padroniza nomes com _ no banco
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  dialectOptions: {
    timezone: "America/Sao_Paulo",//Define fuso horário na comunicação com banco
  },
  timezone: "America/Sao_Paulo",
};

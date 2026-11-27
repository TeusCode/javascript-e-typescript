//ESTRUTURA FISICA QUE EXISTE DENTRO DO BANCO DE DADOS.

import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sobrenome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: {
            msg: "E-mail já existe!",
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            min: 4,
            max: 20,
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          allowNull: false,
          validate: {
            min: 20,
            max: 200,
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          allowNull: false,
          validate: {
            min: 0.8,
            max: 2.2,
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }
}

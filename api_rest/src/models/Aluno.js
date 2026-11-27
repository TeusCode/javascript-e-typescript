//ESTRUTURA FISICA QUE EXISTE DENTRO DO BANCO DE DADOS.

import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 10],
              msg: "Nome precisa ter entre 3 e 10 caracteres ",
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 10],
              msg: "Sobrenome precisa ter entre 3 e 10 caracteres ",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            isEmail: {
              msg: "E-mail inválido!",
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            isInt: {
              msg: "A idade precisa ser um número inteiro!",
            },
            min: 4,
            max: 20,
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          allowNull: false,
          validate: {
            isFloat: {
              msg: "O peso precisa ser um número inteiro ou de ponto flutuante",
            },
            min: 20,
            max: 200,
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          allowNull: false,
          validate: {
            isFloat: {
              msg: "A altura precisa ser um número inteiro ou de ponto flutuante",
            },
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

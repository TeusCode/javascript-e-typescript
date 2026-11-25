//ESTRUTURA FISICA QUE EXISTE DENTRO DO BANCO DE DADOS.

import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcrypt";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "O nome de usuário não pode ficar em branco!",
            },
            len: {
              args: [5, 10], //Minimo e máximo de caracteres
              msg: "O nome de usuário deve ter entre 5 e 10 caracteres!",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          unique: {
            msg: "E-mail já existe!",
          },
          validate: {
            isEmail: {
              msg: "E-mail, inválido!",
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        password: {
          //Esse campo não vai existir na base de dados
          type: Sequelize.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
              args: [6, 12],
              msg: "A senha precisa ter de 6 a 12 caracteres!",
            },
          },
        },
      },
      {
        sequelize,
      },
    );

    this.addHook("beforeSave", async (user) => {
      //Antes de gravar, adiciona a senha hash dentro user
      if (!user.password) return;
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}

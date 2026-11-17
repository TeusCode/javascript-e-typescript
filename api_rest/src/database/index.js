//CARREGA OS MODULES E MONTA OS RELACIONAMENTOS

import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Aluno from "../models/Aluno";

const models = [Aluno];

const connection = new Sequelize(databaseConfig);//Criando o objeto de conexão com o banco

//Modelo.init(objetoDeConexão); Registrando modelo no Sequilize
models.forEach((model) => model.init(connection));

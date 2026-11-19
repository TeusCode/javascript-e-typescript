//INSTRUÇÕES PARA CRIAR A ESTRUTURA FISICA

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER, //Tipo de dado
        allowNull: false, //Valor vazio
        autoIncrement: true, //Gerar um número sempre que insere um novo registro
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, //Email é um dado unico, não deve ter outro no banco
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    console.log("Esse é o squelize:", Sequelize);
    await queryInterface.dropTable("users");
  },
};

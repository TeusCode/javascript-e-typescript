const bcyptjs = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "John Doe1",
          email: "John.doe1@gmail.com",
          password_hash: await bcyptjs.hash("12345678", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "John Doe2",
          email: "John.doe2@gmail.com",
          password_hash: await bcyptjs.hash("12453433", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "John Doe3",
          email: "John.doe3@gmail.com",
          password_hash: await bcyptjs.hash("12343244", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "John Doe4",
          email: "John.doe4@gmail.com",
          password_hash: await bcyptjs.hash("43543534", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {},
};

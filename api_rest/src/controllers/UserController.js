import User from "../models/User";

class UserController {
  //Post - store
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.status(200).json({
        novoUser,
        status: 200,
        message: "Usuário criado com sucesso!",
      });
    } catch (error) {
      res.status(400).json({
        erros: error.errors.map((e) => e.message),
      });
    }
  }

  //Get - index
  async index(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json({
        usuarios: users.map((n) => n.nome),
      });
    } catch (error) {
      res.status(400).json({
        error,
      });
    }
  }

  //Get - Show
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) res.status(404).json("Usuário não encontrado!");

      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  //Put - Update
  async update(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!id) res.status(400).json("ID não enviado!");
      if (!user) res.status(404).json("Usuário não existe!");
      const newUser = await user.update(req.body);
      res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(400).json("Ocorreu um erro");
    }
  }
}

export default new UserController();

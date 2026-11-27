import User from "../models/User";

class UserController {
  //Post - store
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      const { id, nome, email } = user;
      res.status(200).json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        erros: error.errors.map((e) => e.message),
      });
    }
  }

  //Get - index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ["id", "nome", "email"] });
      res.status(200).json({
        usuarios: users.map((n) => n),
      });
    } catch (error) {
      return res.status(400).json({ error, msg: null });
    }
  }

  //Get - Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;

      res.status(200).json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({ error, msg: null });
    }
  }

  //Put - Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      const newUser = await user.update(req.body);
      res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        erros: error.errors.map((err) => err.message),
      });
    }
  }

  //Delete - delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      await user.destroy();
      res.status(200).json(null);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        erros: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();

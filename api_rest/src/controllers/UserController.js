import User from "../models/User";

class UserController {
  async index(req, res) {
    const novoUser = await User.create({
      nome: "Usuario",
      email: "Mateussoiss@gmail.com",
      password: "123456",
    });
    res.status(401).json(novoUser);
  }
}

export default new UserController();

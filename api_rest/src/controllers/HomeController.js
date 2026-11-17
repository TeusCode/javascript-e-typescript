import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Mateus",
      sobrenome: "Silva",
      email: "Mateus@gmail.com",
      idade: "23",
      peso: "78",
      altura: "1.86",
    });
    res.status(401).json(novoAluno);
  }
}

export default new HomeController();

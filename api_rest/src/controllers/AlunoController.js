import Aluno from "../models/Aluno";

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.status(200).json({ alunos });
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      res.status(200).json(aluno);
    } catch (error) {
      return res.status(401).json({
        erros: error.errors.map((e) => e.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) res.status(400).json({ erros: ["Faltando ID"] });
      const aluno = await Aluno.findOne({ where: { id } });
      if (!aluno) res.status(400).json({ erros: "Aluno não existe" });

      const newAluno = await aluno.update(req.body);
      res.status(200).json(newAluno);
    } catch (error) {
      return res.status(401).json({
        erros: error.errors.map((e) => e.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) res.status(400).json({ erros: ["Faltando ID"] });
      const aluno = await Aluno.findOne({ where: { id } });
      if (!aluno) res.status(400).json({ erros: "Aluno não existe" });

      res.status(200).json({ aluno });
    } catch (error) {
      return res.status(401).json({
        erros: error.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) res.status(400).json({ erros: ["Faltando ID"] });
      const aluno = await Aluno.findOne({ where: { id } });
      if (!aluno) res.status(400).json({ erros: "Aluno não existe" });

      await aluno.destroy();
      res.status(200).json("Aluno excluido!");
    } catch (error) {
      return res.status(401).json({
        erros: error.message,
      });
    }
  }
}

export default new AlunoController();

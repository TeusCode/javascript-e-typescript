import jwt from "jsonwebtoken";
import User from "../models/User";

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      erros: ["Login required!"],
    });
  }

  const [, token] = authorization.split(" "); //Atribuição por desestruturação, atribui o primeiro valor da array no texto e o segundo no token, criando assim duas variáveis independentes
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        erros: ["Usuário inválido!"],
      });
    }

    req.userId = id; //Passa o Id para a requisição
    req.userEmail = email; //Passa o email para a requisição
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      erros: ["Token expirado ou inválido!"],
    });
  }

  next();
};

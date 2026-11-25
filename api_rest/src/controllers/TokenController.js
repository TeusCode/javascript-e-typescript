import User from "../models/User";
import jwt from "jsonwebtoken";

class TokenController {
  async store(req, res) {
    const { password = "", email = "" } = req.body; //Mesma coisa: req.body.password ou req.body.email

    if (!password || !email) {
      return res.status(401).json({
        erros: ["Credenciais inválidas!"],
      });
    }
    //Busca no banco de dados, na chave email o email enviado
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(401).json({
        erros: ["Usuário não existe!"],
      });
    }

    //Checando senha
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        erros: ["Senha inválida!"],
      });
    }
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    }); //(payload -> Indentifica de que são aqueles dados,secretKey -> Chave que só servidor usa para assinar)
    //Assinatura -> um cálculo matemático que usa o payload cabeçario e secretkey para criar a assinatura
    //O SecretKey, é usado para válidar o token, que foi criado e assinado.
    console.log(req);
    res.status(200).json({ token });
  }
}

export default new TokenController();

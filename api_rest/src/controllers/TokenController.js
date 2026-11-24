import User from "../models/User";

class TokenController {
  async store(req, res) {
    const { password = "", email = "" } = req.body;

    const user = await User.findOne({ where: { email: email } });
    console.log(user);  

    res.status(200).json(req.body);
  }
}

export default new TokenController();

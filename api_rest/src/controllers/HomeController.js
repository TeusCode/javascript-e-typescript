class HomeController {
  async index(req, res) {
    res.status(401).json("ok");
  }
}

export default new HomeController();

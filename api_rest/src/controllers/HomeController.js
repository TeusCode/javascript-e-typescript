class HomeController {
  index(req, res) {
    res.status(401).json({
      tudo_certo: false,
    });
  }
}

export default new HomeController();

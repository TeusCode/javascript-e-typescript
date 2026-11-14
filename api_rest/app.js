import dotenv from "dotenv";
dotenv.config();

import express from "express";
import homeRoutes from "./src/routes/homeRoutes.js";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(express.urlencoded({ extended: true })); //Habilita o express, para interpretar dados no corpo da requisição e coloque esses valores em req.body
    this.app.use(express.json()); //Habilita a leitura de json, e converte para objeto em req.body
  }
  routes() {
    this.app.use("/", homeRoutes);
  }
}

export default new App().app;

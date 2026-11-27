import dotenv from "dotenv";
dotenv.config();

import "./src/database";

import express from "express";
import homeRoutes from "./src/routes/homeRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import tokenRoutes from "./src/routes/tokenRoutes.js";
import alunoRoutes from "./src/routes/alunoRoutes.js";

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
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunoRoutes);
  }
}

export default new App().app;

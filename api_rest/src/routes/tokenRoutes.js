import { Router } from "express";
import TokenController from "../controllers/TokenController.js";

const router = new Router();

router.post("/", TokenController.store);

export default router;

/*
index -> Lista todos usuários -> GET
store/create -> cria um novo usuário -> POST
show -> apaga um usuário -> DELETE
show -> mostra um usuário -> DELETE
update -> atualiza um usuário -> PATCH OU PUT
*/

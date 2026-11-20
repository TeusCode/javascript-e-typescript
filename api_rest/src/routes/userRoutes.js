import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = new Router();

router.post("/", UserController.store);
router.get("/", UserController.index);
router.get("/:id", UserController.show);
router.put("/:id", UserController.update);

export default router;

/*
index -> Lista todos usuários -> GET
store/create -> cria um novo usuário -> POST
show -> apaga um usuário -> DELETE
show -> mostra um usuário -> DELETE
update -> atualiza um usuário -> PATCH OU PUT
*/

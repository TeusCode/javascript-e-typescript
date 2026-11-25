import { Router } from "express";
import UserController from "../controllers/UserController.js";
import loginRequired from "../middlewares/loginRequired.js";

const router = new Router();

router.post("/", loginRequired, UserController.store);
router.get("/", UserController.index);
router.get("/:id", loginRequired, UserController.show);
router.put("/:id", loginRequired, UserController.update);
router.delete("/:id", loginRequired, UserController.delete);

export default router;

/*
index -> Lista todos usuários -> GET
store/create -> cria um novo usuário -> POST
show -> apaga um usuário -> DELETE
show -> mostra um usuário -> DELETE
update -> atualiza um usuário -> PATCH OU PUT
*/

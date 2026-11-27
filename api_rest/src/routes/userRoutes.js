import { Router } from "express";
import UserController from "../controllers/UserController.js";
import loginRequired from "../middlewares/loginRequired.js";

const router = new Router();

// Não deveria existir em um sistema real
// router.get("/", UserController.index);
// router.get("/:id", UserController.show);

router.post("/", UserController.store);
router.put("/", loginRequired, UserController.update);
router.delete("/", loginRequired, UserController.delete);

export default router;

/*
index -> Lista todos usuários -> GET
store/create -> cria um novo usuário -> POST
show -> apaga um usuário -> DELETE
show -> mostra um usuário -> DELETE
update -> atualiza um usuário -> PATCH OU PUT
*/

import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { GetUserController } from "../modules/accounts/useCases/getUser/GetUserController";
import { UpdateUserController } from "../modules/accounts/useCases/updateUser/UpdateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const getUserController = new GetUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/:id", ensureAuthenticated, getUserController.handle);
usersRoutes.put(
  "/update/:id",
  ensureAuthenticated,
  updateUserController.handle
);

export { usersRoutes };

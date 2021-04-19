import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateLocalController } from "../modules/locals/useCases/createLocal/CreateLocalController";
import { GetLocalsController } from "../modules/locals/useCases/getLocals/GetLocalsController";

const localsRoutes = Router();

const createLocalController = new CreateLocalController();
const getLocalsController = new GetLocalsController();

localsRoutes.post("/", ensureAuthenticated, createLocalController.handle);
localsRoutes.get("/", ensureAuthenticated, getLocalsController.handle);

export { localsRoutes };

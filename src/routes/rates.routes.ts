import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateRateController } from "../modules/locals/useCases/createRate/CreateRateController";
import { GetAllRatesByLocalIdController } from "../modules/locals/useCases/getAllRatesByLocalId/GetAllRatesByLocalIdController";

const ratesRoutes = Router();

const createRateController = new CreateRateController();
const getRatesController = new GetAllRatesByLocalIdController();

ratesRoutes.post("/", ensureAuthenticated, createRateController.handle);
ratesRoutes.get("/:local_id", ensureAuthenticated, getRatesController.handle);

export { ratesRoutes };

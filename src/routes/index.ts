import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { localsRoutes } from "./locals.routes";
import { ratesRoutes } from "./rates.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/locals", localsRoutes);
router.use("/rates", ratesRoutes);

router.use(authenticateRoutes);

export { router };

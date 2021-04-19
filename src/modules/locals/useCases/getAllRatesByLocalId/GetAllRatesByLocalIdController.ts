import { Response, Request } from "express";
import "reflect-metadata";
import { container } from "tsyringe";

import { GetAllRatesByLocalIdUseCase } from "./GetAllRatesByLocalIdUseCase";

class GetAllRatesByLocalIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { local_id } = request.params;

    const getAllRatesByLocalIdUseCase = container.resolve(
      GetAllRatesByLocalIdUseCase
    );

    const Rates = await getAllRatesByLocalIdUseCase.execute(local_id);
    return response.status(201).json(Rates);
  }
}

export { GetAllRatesByLocalIdController };

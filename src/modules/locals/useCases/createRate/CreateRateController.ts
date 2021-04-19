import { Response, Request } from "express";
import "reflect-metadata";
import { container } from "tsyringe";

import { CreateRateUseCase } from "./CreateRateUseCase";

class CreateRateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { comment, rate, local_id } = request.body;

    const createRateUseCase = container.resolve(CreateRateUseCase);

    const Rate = await createRateUseCase.execute({
      comment,
      rate,
      local_id,
    });

    return response.status(201).json(Rate);
  }
}

export { CreateRateController };

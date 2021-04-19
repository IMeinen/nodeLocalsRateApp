import { Response, Request } from "express";
import "reflect-metadata";
import { container } from "tsyringe";

import { CreateLocalUseCase } from "./CreateLocalUseCase";

class CreateLocalController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, address, latitude, longitude } = request.body;

    const createLocalUseCase = container.resolve(CreateLocalUseCase);

    const Local = await createLocalUseCase.execute({
      name,
      address,
      latitude,
      longitude,
    });
    return response.status(201).json(Local);
  }
}

export { CreateLocalController };

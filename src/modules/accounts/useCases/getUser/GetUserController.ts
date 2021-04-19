import { Response, Request } from "express";
import "reflect-metadata";
import { container } from "tsyringe";

import { GetUserUseCase } from "./GetUserUseCase";

class GetUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getUserUseCase = container.resolve(GetUserUseCase);

    const currentUser = await getUserUseCase.execute(request.params.id);
    return response.status(201).json(currentUser);
  }
}

export { GetUserController };

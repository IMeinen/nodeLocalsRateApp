import { Response, Request } from "express";
import "reflect-metadata";
import { container } from "tsyringe";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, password } = request.body;
    const { id } = request.params;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    await updateUserUseCase.execute({
      name,
      username,
      email,
      password,
      id,
    });
    return response.status(201).send("Updated!");
  }
}

export { UpdateUserController };

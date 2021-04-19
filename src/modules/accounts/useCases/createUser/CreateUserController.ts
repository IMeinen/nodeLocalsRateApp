import { Response, Request } from "express";
import "reflect-metadata";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, password } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const User = await createUserUseCase.execute({
      name,
      username,
      email,
      password,
    });
    return response.status(201).json(User);
  }
}

export { CreateUserController };

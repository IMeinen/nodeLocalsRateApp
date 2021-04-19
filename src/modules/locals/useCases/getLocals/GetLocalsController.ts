import { Response, Request } from "express";
import "reflect-metadata";
import { container } from "tsyringe";

import { GetLocalsUseCase } from "./GetLocalsUseCase";

class GetLocalsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { orderBy, currentLatitude, currentLongitude } = request.query as {
      currentLatitude: string;
      currentLongitude: string;
      orderBy: string;
    };

    const getLocalsUseCase = container.resolve(GetLocalsUseCase);

    const Local = await getLocalsUseCase.execute(
      orderBy,
      currentLatitude,
      currentLongitude
    );
    return response.status(201).json(Local);
  }
}

export { GetLocalsController };

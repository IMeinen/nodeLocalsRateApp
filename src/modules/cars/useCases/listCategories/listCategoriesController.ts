import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./listCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const currentCategories = await this.listCategoriesUseCase.execute();
    return response.json(currentCategories);
  }
}

export { ListCategoriesController };

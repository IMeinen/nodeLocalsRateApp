import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

export default (): ListCategoriesController => {
  const listCategoriesRepository = new CategoryRepository();
  const listCategoriesUseCase = new ListCategoriesUseCase(
    listCategoriesRepository
  );
  const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
  );
  return listCategoriesController;
};

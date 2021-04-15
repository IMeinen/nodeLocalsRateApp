import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}
  async execute(): Promise<Category[]> {
    const all = await this.categoriesRepository.list();

    return all;
  }
}

export { ListCategoriesUseCase };

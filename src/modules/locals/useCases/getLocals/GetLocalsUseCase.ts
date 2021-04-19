import { inject, injectable } from "tsyringe";

import { Local } from "../../entities/Local";
import { ILocalsRepository } from "../../repositories/ILocalsRepository";

@injectable()
class GetLocalsUseCase {
  constructor(
    @inject("LocalsRepository")
    private localsRepository: ILocalsRepository
  ) {}

  async execute(
    orderBy: string,
    currentLatitude: string,
    currentLongitude: string
  ): Promise<Local[]> {
    const local = await this.localsRepository.findAll(
      orderBy,
      currentLatitude,
      currentLongitude
    );
    return local;
  }
}

export { GetLocalsUseCase };

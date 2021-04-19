import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { Rates } from "../../entities/Rates";
import { ILocalsRepository } from "../../repositories/ILocalsRepository";
import { IRatesRepository } from "../../repositories/IRatesRepository";

@injectable()
class GetAllRatesByLocalIdUseCase {
  constructor(
    @inject("RatesRepository")
    private ratesRepository: IRatesRepository,
    @inject("LocalsRepository")
    private localsRepository: ILocalsRepository
  ) {}

  async execute(id: string): Promise<Rates[]> {
    const localById = await this.localsRepository.findById(id);
    if (!localById) {
      throw new AppError("Not found any local with this id");
    }
    const local = await this.ratesRepository.findAllByLocalId(id);
    return local;
  }
}

export { GetAllRatesByLocalIdUseCase };

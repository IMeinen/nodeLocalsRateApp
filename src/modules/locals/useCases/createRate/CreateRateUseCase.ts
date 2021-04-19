import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { Rates } from "../../entities/Rates";
import { ILocalsRepository } from "../../repositories/ILocalsRepository";
import {
  ICreateRateDTO,
  IRatesRepository,
} from "../../repositories/IRatesRepository";

@injectable()
class CreateRateUseCase {
  constructor(
    @inject("RatesRepository")
    private ratesRepository: IRatesRepository,
    @inject("LocalsRepository")
    private localsRepository: ILocalsRepository
  ) {}

  async execute({ comment, rate, local_id }: ICreateRateDTO): Promise<Rates> {
    const localById = await this.localsRepository.findById(local_id);
    if (!localById) {
      throw new AppError("Not found any local with this id");
    }
    const createdRate = await this.ratesRepository.create({
      comment,
      rate,
      local_id,
    });

    return createdRate;
  }
}

export { CreateRateUseCase };

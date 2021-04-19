import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { Local } from "../../entities/Local";
import {
  ICreateLocalDTO,
  ILocalsRepository,
} from "../../repositories/ILocalsRepository";

@injectable()
class CreateLocalUseCase {
  constructor(
    @inject("LocalsRepository")
    private localsRepository: ILocalsRepository
  ) {}

  async execute({
    name,
    address,
    latitude,
    longitude,
  }: ICreateLocalDTO): Promise<Local> {
    const localAlreadyExists = await this.localsRepository.findByLatitudeAndLongitude(
      latitude,
      longitude
    );

    if (localAlreadyExists) {
      throw new AppError("Local already exists");
    }

    const localNameAlreadyExists = await this.localsRepository.findByName(name);

    if (localNameAlreadyExists) {
      throw new AppError("Local name already exists");
    }
    const localCreated = await this.localsRepository.create({
      name,
      address,
      latitude,
      longitude,
    });

    return localCreated;
  }
}

export { CreateLocalUseCase };

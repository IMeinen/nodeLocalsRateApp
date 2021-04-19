import { getRepository, Repository } from "typeorm";

import { Rates } from "../../entities/Rates";
import { ICreateRateDTO, IRatesRepository } from "../IRatesRepository";

class RatesRepository implements IRatesRepository {
  private repository: Repository<Rates>;

  constructor() {
    this.repository = getRepository(Rates);
  }
  async create({ comment, rate, local_id }: ICreateRateDTO): Promise<Rates> {
    const user = this.repository.create({
      comment,
      rate,
      local_id,
    });

    const savedRate = await this.repository.save(user);
    return savedRate;
  }

  async findAllByLocalId(id: string): Promise<Rates[]> {
    const ratesByLocalId = await this.repository.find({
      where: { local_id: id },
    });

    return ratesByLocalId;
  }
}

export { RatesRepository };

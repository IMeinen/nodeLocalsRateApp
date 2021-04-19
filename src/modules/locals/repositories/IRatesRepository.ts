import { Rates } from "../entities/Rates";

interface ICreateRateDTO {
  comment: string;
  rate: string;
  local_id: string;
}

interface IRatesRepository {
  create(data: ICreateRateDTO): Promise<Rates>;
  findAllByLocalId(id: string): Promise<Rates[]>;
}

export { IRatesRepository, ICreateRateDTO };

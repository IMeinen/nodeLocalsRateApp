import { Local } from "../entities/Local";

interface ICreateLocalDTO {
  name: string;
  address: string;
  latitude: string;
  longitude: string;
}

interface ILocalsRepository {
  create(data: ICreateLocalDTO): Promise<Local>;
  findByName(name: string): Promise<Local>;
  findById(id: string): Promise<Local>;
  findByLatitudeAndLongitude(
    latitude: string,
    longitude: string
  ): Promise<Local>;
  findAll(
    orderBy: string,
    currentLatitude: string,
    currentLongitude: string
  ): Promise<Local[]>;
}

export { ILocalsRepository, ICreateLocalDTO };

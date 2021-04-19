import { getRepository, Repository } from "typeorm";

import { getHaversineDistance } from "../../../../utils/getHaversineDistance";
import { Local } from "../../entities/Local";
import { ICreateLocalDTO, ILocalsRepository } from "../ILocalsRepository";

class LocalsRepository implements ILocalsRepository {
  private repository: Repository<Local>;

  constructor() {
    this.repository = getRepository(Local);
  }
  async create({
    name,
    address,
    latitude,
    longitude,
  }: ICreateLocalDTO): Promise<Local> {
    const user = this.repository.create({
      name,
      address,
      latitude,
      longitude,
    });

    const savedLocal = await this.repository.save(user);
    return savedLocal;
  }

  async findByName(name: string): Promise<Local> {
    const local = await this.repository.findOne({ name });
    return local;
  }

  async findById(id: string): Promise<Local> {
    const local = await this.repository.findOne({ id });
    return local;
  }

  async findByLatitudeAndLongitude(
    latitude: string,
    longitude: string
  ): Promise<Local> {
    const ratesByLocalId = await this.repository.findOne({
      where: { latitude, longitude },
    });
    return ratesByLocalId;
  }

  async findAll(
    orderBy: string,
    currentLatitude: string,
    currentLongitude: string
  ): Promise<Local[]> {
    const localsByAlpha = await this.repository.find({
      order: {
        name: "ASC",
      },
    });

    const originLatLng = {
      latitude: parseFloat(currentLatitude),
      longitude: parseFloat(currentLongitude),
    };

    if (orderBy === "distance") {
      const localsByDistance = localsByAlpha.map((item: Local) => {
        return {
          ...item,
          distance: getHaversineDistance(originLatLng, {
            latitude: parseFloat(item.latitude),
            longitude: parseFloat(item.longitude),
          }),
        };
      });

      return localsByDistance.sort((a, b) =>
        a.distance > b.distance ? 1 : -1
      );
    }

    return localsByAlpha;
  }
}

export { LocalsRepository };

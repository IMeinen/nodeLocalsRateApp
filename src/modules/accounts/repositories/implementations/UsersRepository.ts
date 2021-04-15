import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import {
  IUsersRepository,
  ICreateUserDTO,
  IUpdateUserDTO,
} from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async create({
    name,
    username,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({ name, username, email, password });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }

  async updateUser({
    name,
    email,
    username,
    password,
  }: IUpdateUserDTO): Promise<void> {
    const user = await this.repository.findOne({ email });
    const newUser = this.repository.merge(user, {
      name,
      email,
      username,
      password,
    });
    await this.repository.save(newUser);
  }
}

export { UsersRepository };

import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import {
  IUpdateUserDTO,
  IUsersRepository,
} from "../../repositories/IUsersRepository";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    email,
    password,
  }: IUpdateUserDTO): Promise<void> {
    const passwordHash = await hash(password, 8);

    await this.usersRepository.updateUser({
      name,
      username,
      email,
      password: passwordHash,
    });
  }
}

export { UpdateUserUseCase };

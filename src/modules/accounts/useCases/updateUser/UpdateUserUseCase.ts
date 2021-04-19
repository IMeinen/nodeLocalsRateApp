import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import {
  IUpdateUserDTO,
  IUsersRepository,
} from "../../repositories/IUsersRepository";
import {
  validateName,
  validatePassword,
  validateEmail,
  validateIfUserExistsById,
} from "../validations";

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
    id,
  }: IUpdateUserDTO): Promise<void> {
    validateName(name);

    validatePassword(password);

    validateEmail(email);

    validateIfUserExistsById(id, this.usersRepository);

    const passwordHash = await hash(password, 8);

    await this.usersRepository.updateUser({
      name,
      username,
      email,
      password: passwordHash,
      id,
    });
  }
}

export { UpdateUserUseCase };

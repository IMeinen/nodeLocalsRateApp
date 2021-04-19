import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import {
  ICreateUserDTO,
  IUsersRepository,
} from "../../repositories/IUsersRepository";
import {
  validateEmptyFields,
  validateIfUserExists,
  validateName,
  validatePassword,
  validateEmail,
} from "../validations";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    validateEmptyFields(name, username, email, password);

    validateName(name);

    validatePassword(password);

    validateEmail(email);

    await validateIfUserExists(email, this.usersRepository);

    const passwordHash = await hash(password, 8);
    await this.usersRepository.create({
      name,
      username,
      email,
      password: passwordHash,
    });

    const user = await this.usersRepository.findByEmail(email);
    return user;
  }
}

export { CreateUserUseCase };

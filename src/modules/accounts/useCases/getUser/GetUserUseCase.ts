import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IReturnUser {
  name: string;
  username: string;
  email: string;
  createdAt: Date;
}
@injectable()
class GetUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<IReturnUser> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new AppError("User not found");
    }
    const returnObject = {
      name: user.name,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
    };
    return returnObject;
  }
}

export { GetUserUseCase };

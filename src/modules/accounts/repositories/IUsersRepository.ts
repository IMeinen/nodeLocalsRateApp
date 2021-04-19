import { User } from "../entities/User";

interface ICreateUserDTO {
  name: string;
  username: string;
  password: string;
  email: string;
}

interface IUpdateUserDTO {
  name: string;
  email: string;
  username: string;
  password: string;
  id: string;
}
interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  updateUser(data: IUpdateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO, IUpdateUserDTO };

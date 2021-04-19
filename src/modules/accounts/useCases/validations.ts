import { AppError } from "../../../errors/AppError";
import { checkForSpecialCharacters } from "../../../utils/checkForSpecialCharacters";
import { checkForValidEmail } from "../../../utils/checkForValidEmail";
import { IUsersRepository } from "../repositories/IUsersRepository";

export const validateName = (name: string): void => {
  if (name && checkForSpecialCharacters(name)) {
    throw new AppError("Name cannot contain special characters");
  }
};

export const validatePassword = (password: string): void => {
  if (password && password.length < 8) {
    throw new AppError("Password must be at least 8 characters");
  }
};

export const validateEmptyFields = (
  name: string,
  username: string,
  email: string,
  password: string
): void => {
  if (!name || !username || !email || !password) {
    throw new AppError("The name,username,email and password cannot be empty");
  }
};

export const validateIfUserExists = async (
  email: string,
  repository: IUsersRepository
): Promise<void> => {
  const userAlreadyExists = await repository.findByEmail(email);

  if (userAlreadyExists) {
    throw new AppError("User already exists");
  }
};

export const validateIfUserExistsById = async (
  id: string,
  repository: IUsersRepository
): Promise<void> => {
  const userAlreadyExists = await repository.findById(id);

  if (!userAlreadyExists) {
    throw new AppError("User does not exist");
  }
};

export const validateEmail = (email: string): void => {
  const isValidEmail = checkForValidEmail(email);
  if (!isValidEmail) {
    throw new AppError("Email format is not valid");
  }
};

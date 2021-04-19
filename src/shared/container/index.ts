import "reflect-metadata";
import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ILocalsRepository } from "../../modules/locals/repositories/ILocalsRepository";
import { LocalsRepository } from "../../modules/locals/repositories/implementations/LocalsRepository";
import { RatesRepository } from "../../modules/locals/repositories/implementations/RatesRepository";
import { IRatesRepository } from "../../modules/locals/repositories/IRatesRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ILocalsRepository>(
  "LocalsRepository",
  LocalsRepository
);

container.registerSingleton<IRatesRepository>(
  "RatesRepository",
  RatesRepository
);

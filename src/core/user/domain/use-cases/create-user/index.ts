import { Injectable } from "@nestjs/common";
import { UserEntity } from "@tech-connect/core/shared/entities/users/users";
import { AccountUserRepository, UserProps } from "@tech-connect/core/shared/repositories/account-user-repository";

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: AccountUserRepository) { }

  async execute(user: UserProps) {
    try {
      const createdUser = new UserEntity(user);

      await this.userRepository.createUser(createdUser);

      return { userId: createdUser.id };
    }
    catch (err) {
      console.log(err);
    }
  }
}
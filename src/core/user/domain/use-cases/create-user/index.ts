import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { UserEntity } from "@tech-connect/core/shared/entities/users/users";
import { AccountUserRepository, UserProps } from "@tech-connect/core/shared/repositories/account-user-repository";

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: AccountUserRepository) { }

  async execute(user: UserProps) {
    try {
      const userEntity = new UserEntity(user);

      const createdUser = await this.userRepository.createUser(userEntity);

      return { userId: createdUser.id };
    }
    catch (err) {
      return new InternalServerErrorException(err.message);
    }
  }
}
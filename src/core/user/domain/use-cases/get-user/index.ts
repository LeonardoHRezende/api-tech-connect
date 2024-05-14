import { AccountUserRepository } from "@tech-connect/core/shared/repositories/account-user-repository";

export class GetUserUseCase {
  constructor(private readonly userRepository: AccountUserRepository) { }

  async execute(id: string) {
    try {
      const user = await this.userRepository.getUser(id);

      console.log(user);
      return user;
    }
    catch (err) {
      console.log(err);
    }
  }
}
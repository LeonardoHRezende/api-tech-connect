import { UserEntity } from "../../entities/users/users";
import { AccountUserRepository } from "../../repositories/account-user-repository";

export class InMemoryUserRepository implements AccountUserRepository {
  private users: UserEntity[] = [];

  async createUser(user: UserEntity): Promise<{ id: string }> {
    this.users.push(user);

    return { id: user.id };
  }

  async getUser(firebaseId: string): Promise<UserEntity> {
    return this.users.find(user => user.firebaseId === firebaseId);
  }

  async updateUser(user: UserEntity): Promise<{ id: string }> {
    const userIndex = this.users.findIndex(u => u.id === user.id);
    this.users[userIndex] = user;

    return { id: user.id };
  }
}
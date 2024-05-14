import { UserEntity } from "../../entities/users/users";
import { AccountUserRepository } from "../../repositories/account-user-repository";

export class InMemoryUserRepository implements AccountUserRepository{
  private users: UserEntity[] = [];

  async createUser(user: UserEntity): Promise<void> {
    this.users.push(user);
  }

  async getUser(firebaseId: string): Promise<UserEntity> {
    return this.users.find(user => user.firebaseId === firebaseId);
  }

  async updateUser(user: UserEntity): Promise<void> {
    const userIndex = this.users.findIndex(u => u.id === user.id);
    this.users[userIndex] = user;
  }
}
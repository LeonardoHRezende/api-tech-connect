import { Injectable } from '@nestjs/common';
import { AccountUserRepository } from '../../repositories/user-repository';

@Injectable()
export class AccountUserRepositoryPrisma implements AccountUserRepository {
  async createAccountUser(user: any): Promise<any> {
    return user;
  }

  async getAccountUserById(id: string): Promise<any> {
    return {
      id: '1',
      firebaseId: 'firebaseId',
      email: 'email',
      type: 'company',
    };
  }
}

import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { AccountUserRepository } from '../../repositories/account-user-repository';
import { UserEntity } from '../../entities/users/users';
import { prisma } from '@tech-connect/core/db';

@Injectable()
export class AccountUserRepositoryPrisma implements AccountUserRepository {

  async createUser(user: UserEntity): Promise<void> {
    try {
      await prisma.accountsUser.create({
        data: {
          firebaseId: user.firebaseId,
          email: user.email,
          type: user.type,
          userInformations: {
            create: {
              userId: user.userInformations.userId,
              name: user.userInformations.name,
              age: user.userInformations.age,
              phone: user.userInformations.phone,
              city: user.userInformations.city,
              state: user.userInformations.state,
              country: user.userInformations.country,
              position: user.userInformations.position,
              seniority: user.userInformations.seniority,
              bio: user.userInformations.bio,
              profileImage: user.userInformations.profileImage
            }
          }
        },
        include: {
          userInformations: true
        }
      });
    }
    catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async getUser(id: string): Promise<UserEntity> {
    try {
      const account = await prisma.accountsUser.findUnique({
        where: {
          firebaseId: id
        },
        include: {
          userInformations: true
        }
      });

      if (!account) {
        throw new NotFoundException('User not found');
      }

      return new UserEntity(account);
    }
    catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async updateUser(user: UserEntity): Promise<void> {
    try {
      await prisma.accountsUser.update({
        where: {
          firebaseId: user.firebaseId
        },
        data: {
          email: user.email,
          type: user.type,
          userInformations: {
            update: {
              userId: user.userInformations.userId,
              name: user.userInformations.name,
              age: user.userInformations.age,
              phone: user.userInformations.phone,
              city: user.userInformations.city,
              state: user.userInformations.state,
              country: user.userInformations.country,
              position: user.userInformations.position,
              seniority: user.userInformations.seniority,
              bio: user.userInformations.bio,
              profileImage: user.userInformations.profileImage
            }
          }
        },
        include: {
          userInformations: true
        }
      });
    }
    catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

}

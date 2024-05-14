import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UserEntity } from '../../entities/users/users';
import { prisma } from '@tech-connect/core/db';
import { RecruitersRepository } from '../../repositories/recruiters-repository ';
import { RecruiterEntity } from '../../entities/recruiters/recruiter';

@Injectable()
export class RecruiterRepositoryPrisma implements RecruitersRepository {

  async createRecruiter(recruiter: RecruiterEntity): Promise<void> {
    try {
      await prisma.accountsUser.create({
        data: {
          firebaseId: recruiter.firebaseId,
          email: recruiter.email,
          type: recruiter.type,
          recruiterInformations: {
            create: {
              userId: recruiter.recruiterInformations.userId,
              name: recruiter.recruiterInformations.name,
              age: recruiter.recruiterInformations.age,
              phone: recruiter.recruiterInformations.phone,
              city: recruiter.recruiterInformations.city,
              state: recruiter.recruiterInformations.state,
              country: recruiter.recruiterInformations.country,
              profileImage: recruiter.recruiterInformations.profileImage
            }
          }
        },
        include: {
          recruiterInformations: true
        }
      });
    }
    catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async getRecruiter(id: string): Promise<RecruiterEntity> {
    try {
      const account = await prisma.accountsUser.findUnique({
        where: {
          firebaseId: id
        },
        include: {
          recruiterInformations: true
        }
      });

      if (!account) {
        throw new NotFoundException('User not found');
      }

      return new RecruiterEntity(account);
    }
    catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async updateRecruiter(recruiter: RecruiterEntity): Promise<void> {
    try {
      await prisma.accountsUser.update({
        where: {
          firebaseId: recruiter.firebaseId
        },
        data: {
          email: recruiter.email,
          type: recruiter.type,
          recruiterInformations: {
            update: {
              userId: recruiter.recruiterInformations.userId,
              name: recruiter.recruiterInformations.name,
              age: recruiter.recruiterInformations.age,
              phone: recruiter.recruiterInformations.phone,
              city: recruiter.recruiterInformations.city,
              state: recruiter.recruiterInformations.state,
              country: recruiter.recruiterInformations.country,
              profileImage: recruiter.recruiterInformations.profileImage
            }
          }
        },
        include: {
          recruiterInformations: true
        }
      });
    }
    catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

}

import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { prisma } from '@tech-connect/core/db';
import { CompaniesRepository } from '../../repositories/companies-repository';
import { CompanyEntity } from '../../entities/companies/company';

@Injectable()
export class CompaniesRepositoryPrisma implements CompaniesRepository {

  async createCompany(company: CompanyEntity): Promise<void> {
    try {
      await prisma.accountsUser.create({
        data: {
          firebaseId: company.firebaseId,
          email: company.email,
          type: company.type
        }
      });
    }
    catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async getCompany(firebaseId: string): Promise<CompanyEntity> {
    try {
      const account = await prisma.accountsUser.findUnique({
        where: {
          firebaseId: firebaseId
        },
        include: {
          companyInformations: true
        }
      });

      if (!account) {
        throw new NotFoundException('User not found');
      }

      return new CompanyEntity(account);
    }
    catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async updateCompany(company: CompanyEntity): Promise<void> {
    try {
      await prisma.accountsUser.update({
        where: {
          firebaseId: company.firebaseId
        },
        data: {
          email: company.email,
          type: company.type,
          companyInformations: {
            update: {
              userId: company.companyInformations.userId,
              name: company.companyInformations.name,
              phone: company.companyInformations.phone,
              city: company.companyInformations.city,
              state: company.companyInformations.state,
              country: company.companyInformations.country,
              profileImage: company.companyInformations.profileImage,
              description: company.companyInformations.description
            }
          }
        },
        include: {
          companyInformations: true
        }
      });
    }
    catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

}

import { Inject, Injectable } from '@nestjs/common';
import { CreateCompanyUseCase } from '@tech-connect/core/companies/domain/use-cases/create-company';
import { GetCompanyUseCase } from '@tech-connect/core/companies/domain/use-cases/get-company';
import { UpdateCompanyUseCase } from '@tech-connect/core/companies/domain/use-cases/update-company';
import { CreateRecruiterUseCase } from '@tech-connect/core/recruiter/domain/use-cases/create-recruiter';
import { GetRecruiterUseCase } from '@tech-connect/core/recruiter/domain/use-cases/get-recruiter';
import { UpdateRecruiterUseCase } from '@tech-connect/core/recruiter/domain/use-cases/update-recruiter';
import { CompaniesRepositoryPrisma } from '@tech-connect/core/shared/infra/company-repository/company-repository-prisma';
import { RecruiterRepositoryPrisma } from '@tech-connect/core/shared/infra/recruiter-repository/recruiter-repository-prisma';
import { AccountUserRepositoryPrisma } from '@tech-connect/core/shared/infra/user-repository/user-repository-prisma';
import { UserProps } from '@tech-connect/core/shared/repositories/account-user-repository';
import { CreateUserUseCase } from '@tech-connect/core/user/domain/use-cases/create-user';
import { GetUserUseCase } from '@tech-connect/core/user/domain/use-cases/get-user';
import { UpdateUserUseCase } from '@tech-connect/core/user/domain/use-cases/update-user';


@Injectable()
export class UserService {
  constructor(
    @Inject(AccountUserRepositoryPrisma) private readonly accountUserRepositoryPrisma: AccountUserRepositoryPrisma,
    @Inject(RecruiterRepositoryPrisma) private readonly recruiterRepositoryPrisma: RecruiterRepositoryPrisma,
    @Inject(CompaniesRepositoryPrisma) private readonly companiesRepositoryPrisma: CompaniesRepositoryPrisma
  ) { }

  async createUser(userInput: UserProps) {
    const createUserUseCase = new CreateUserUseCase(this.accountUserRepositoryPrisma);
    const createRecruiterUseCase = new CreateRecruiterUseCase(this.recruiterRepositoryPrisma);
    const createCompanyUseCase = new CreateCompanyUseCase(this.companiesRepositoryPrisma);

    switch (userInput.type) {
      case 'RECRUITER':
        try {
          await createRecruiterUseCase.execute(userInput);
        }
        catch (err) {
          console.log(err);
        }
        break;
      case 'COMPANY':
        try {
          await createCompanyUseCase.execute(userInput);
        }
        catch (err) {
          console.log(err);
        }
        break;
      default:
        try {
          await createUserUseCase.execute(userInput);
        }
        catch (err) {
          console.log(err);
        }
        break;
    }
  }

  async getUser(firebaseId: string): Promise<any> {
    const getUserUseCase = new GetUserUseCase(this.accountUserRepositoryPrisma);
    const getUserRecruiterUseCase = new GetRecruiterUseCase(this.recruiterRepositoryPrisma);
    const getUserCompanyUseCase = new GetCompanyUseCase(this.companiesRepositoryPrisma);

    try {
      const user = await getUserUseCase.execute(firebaseId);
      switch (user.type) {
        case 'RECRUITER':
          return await getUserRecruiterUseCase.execute(user.id);
        case 'COMPANY':
          return await getUserCompanyUseCase.execute(user.id);
        default:
          return user;
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  async updateUser(userInput: UserProps) {
    const updateUserUseCase = new UpdateUserUseCase(this.accountUserRepositoryPrisma);
    const updateRecruiterUseCase = new UpdateRecruiterUseCase(this.recruiterRepositoryPrisma);
    const updateCompanyUseCase = new UpdateCompanyUseCase(this.companiesRepositoryPrisma);

    switch (userInput.type) {
      case 'RECRUITER':
        try {
          await updateRecruiterUseCase.execute(userInput);
        }
        catch (err) {
          console.log(err);
        }
        break;
      case 'COMPANY':
        try {
          await updateCompanyUseCase.execute(userInput);
        }
        catch (err) {
          console.log(err);
        }
        break;
      default:
        try {
          await updateUserUseCase.execute(userInput);
        }
        catch (err) {
          console.log(err);
        }
        break;
    }
  }
}

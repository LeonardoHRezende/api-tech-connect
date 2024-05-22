import { Module } from "@nestjs/common";
import { UserController } from "@tech-connect/controllers/user.controller";
import { CompaniesRepositoryPrisma } from "@tech-connect/core/shared/infra/company-repository/company-repository-prisma";
import { RecruiterRepositoryPrisma } from "@tech-connect/core/shared/infra/recruiter-repository/recruiter-repository-prisma";
import { AccountUserRepositoryPrisma } from "@tech-connect/core/shared/infra/user-repository/user-repository-prisma";
import { UserService } from "@tech-connect/services/user.service";

@Module({
  imports: [],
  controllers: [
    UserController
  ],
  providers: [
    AccountUserRepositoryPrisma,
    RecruiterRepositoryPrisma,
    CompaniesRepositoryPrisma,
    UserService
  ],

})
export class UserModule { }

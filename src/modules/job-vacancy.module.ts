import { Module } from "@nestjs/common";
import { JobVacancyController } from "@tech-connect/controllers/job-vacancy.controller";
import { JobVacancyPrismaRepository } from "@tech-connect/core/shared/infra/vacancy-repository/vacancy-prisma-repository";
import { JobsService } from "@tech-connect/services/job-vacancy.service";

@Module({
  imports: [],
  controllers: [
    JobVacancyController
  ],
  providers: [
    JobVacancyPrismaRepository,
    JobsService
  ],

})
export class JobVacancyModule { }

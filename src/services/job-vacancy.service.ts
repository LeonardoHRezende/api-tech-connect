import { Inject, Injectable } from '@nestjs/common';
import { CreateJobVacancyUseCase } from '@tech-connect/core/job-vacancy/domain/use-cases/create-vacancy';
import { DeleteJobVacancyUseCase } from '@tech-connect/core/job-vacancy/domain/use-cases/delete-vacancy';
import { FindAllJobVacancyUseCase } from '@tech-connect/core/job-vacancy/domain/use-cases/find-all-vacancy';
import { FindUniqueJobVacancyUseCase } from '@tech-connect/core/job-vacancy/domain/use-cases/find-unique-vacany';
import { UpdateJobVacancyUseCase } from '@tech-connect/core/job-vacancy/domain/use-cases/update-vacancy';
import { JobVacancyPrismaRepository } from '@tech-connect/core/shared/infra/vacancy-repository/vacancy-prisma-repository';
import { JobVacancyProps } from '@tech-connect/core/shared/repositories/job-vacancy-repository';

@Injectable()
export class JobsService {
  constructor(
    @Inject(JobVacancyPrismaRepository) private readonly jobVacancyPrismaRepository: JobVacancyPrismaRepository,
  ) { }

  async createJob(job: JobVacancyProps) {
    const createJobUseCase = new CreateJobVacancyUseCase(this.jobVacancyPrismaRepository);
    try {
      await createJobUseCase.execute(job);
    }
    catch (err) {
      console.log(err);
    }
  }

  async findUniqueJob(id: string) {
    const getJobUseCase = new FindUniqueJobVacancyUseCase(this.jobVacancyPrismaRepository);
    try {
      return await getJobUseCase.execute(id);
    }
    catch (err) {
      console.log(err);
    }
  }

  async updateJob(job: JobVacancyProps) {
    const updateJobUseCase = new UpdateJobVacancyUseCase(this.jobVacancyPrismaRepository);
    try {
      await updateJobUseCase.execute(job);
    }
    catch (err) {
      console.log(err);
    }
  }

  async deleteJob(id: string) {
    const deleteJobVacancyUseCase = new DeleteJobVacancyUseCase(this.jobVacancyPrismaRepository);
    try {
      await deleteJobVacancyUseCase.execute(id);
    }
    catch (err) {
      console.log(err);
    }
  }

  async getJobs(page: number) {
    const getJobsUseCase = new FindAllJobVacancyUseCase(this.jobVacancyPrismaRepository);
    try {
      return await getJobsUseCase.execute(page);
    }
    catch (err) {
      console.log(err);
    }
  }

}

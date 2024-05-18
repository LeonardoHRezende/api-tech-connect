import { JobVacancyEntity } from "@tech-connect/core/shared/entities/job-vacancy/vacancy";
import { JobVacancyProps, JobVacancyRepository } from "@tech-connect/core/shared/repositories/job-vacancy-repository";

export class CreateJobVacancyUseCase {
  constructor(private readonly jobVacancyRepository: JobVacancyRepository) { }

  async execute(jobVacancy: JobVacancyProps) {
    try {
      const createdJobVacancy = new JobVacancyEntity(jobVacancy);

      await this.jobVacancyRepository.create(createdJobVacancy);

      return { jobId: createdJobVacancy.id };
    }
    catch (err) {
      console.log(err);
    }
  }
}
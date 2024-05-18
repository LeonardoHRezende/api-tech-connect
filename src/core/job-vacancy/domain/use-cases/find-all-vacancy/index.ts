import { JobVacancyEntity } from "@tech-connect/core/shared/entities/job-vacancy/vacancy";
import { JobVacancyRepository } from "@tech-connect/core/shared/repositories/job-vacancy-repository";

export class FindAllJobVacancyUseCase {
  constructor(private readonly jobVacancyRepository: JobVacancyRepository) { }

  async execute(page: number): Promise<JobVacancyEntity[]> {
    return this.jobVacancyRepository.findAll(page);
  }
}
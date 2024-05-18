import { NotFoundException } from "@nestjs/common";
import { JobVacancyEntity } from "@tech-connect/core/shared/entities/job-vacancy/vacancy";
import { JobVacancyRepository } from "@tech-connect/core/shared/repositories/job-vacancy-repository";

export class FindUniqueJobVacancyUseCase {
  constructor(private readonly jobVacancyRepository: JobVacancyRepository) { }

  async execute(id: string): Promise<JobVacancyEntity> {
    const jobVacancy = await this.jobVacancyRepository.findById(id);

    if (!jobVacancy) {
      throw new NotFoundException('Job vacancy not found');
    }

    return jobVacancy;
  }
}
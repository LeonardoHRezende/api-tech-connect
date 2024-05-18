import { NotFoundException } from "@nestjs/common";
import { JobVacancyEntity } from "@tech-connect/core/shared/entities/job-vacancy/vacancy";
import { JobVacancyProps, JobVacancyRepository } from "@tech-connect/core/shared/repositories/job-vacancy-repository";

export class UpdateJobVacancyUseCase {
  constructor(private readonly jobVacancyRepository: JobVacancyRepository) { }

  async execute(data: JobVacancyProps): Promise<JobVacancyEntity> {
    const jobVacancy = await this.jobVacancyRepository.findById(data?.id);

    if (!jobVacancy) {
      throw new NotFoundException('Job vacancy not found');
    }

    const updatedJobVacancy = new JobVacancyEntity({
      ...jobVacancy,
      ...data,
      updatedAt: new Date(),
    });

    await this.jobVacancyRepository.update(updatedJobVacancy);

    return updatedJobVacancy;
  }
}
import { NotFoundException } from "@nestjs/common";
import { JobVacancyRepository } from "@tech-connect/core/shared/repositories/job-vacancy-repository";

export class DeleteJobVacancyUseCase {
  constructor(private readonly jobVacancyRepository: JobVacancyRepository) { }

  async execute(id: string): Promise<void> {
    const jobVacancy = await this.jobVacancyRepository.findById(id);

    if (!jobVacancy) {
      throw new NotFoundException('Job vacancy not found');
    }

    await this.jobVacancyRepository.delete(id);
  }
}
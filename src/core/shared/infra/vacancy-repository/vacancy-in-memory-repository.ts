import { JobVacancyEntity } from "../../entities/job-vacancy/vacancy";
import { JobVacancyRepository } from "../../repositories/job-vacancy-repository";


export class JobVacancyInMemoryRepository implements JobVacancyRepository {
  private jobVacancies: JobVacancyEntity[] = [];

  async create(jobVacancy: JobVacancyEntity): Promise<void> {
    this.jobVacancies.push(jobVacancy);
  }

  async update(jobVacancy: JobVacancyEntity): Promise<void> {
    const index = this.jobVacancies.findIndex((jv) => jv.id === jobVacancy.id);
    this.jobVacancies[index] = jobVacancy;
  }

  async delete(id: string): Promise<void> {
    this.jobVacancies = this.jobVacancies.filter((jv) => jv.id !== id);
  }

  async findById(id: string): Promise<JobVacancyEntity> {
    return this.jobVacancies.find((jv) => jv.id === id);
  }

  async findAll(): Promise<JobVacancyEntity[]> {
    return this.jobVacancies;
  }
}
import { JobVacancyEntity } from "../entities/job-vacancy/vacancy";

export interface JobVacancyRepository {
  create(jobVacancy: JobVacancyEntity): Promise<void>;
  update(jobVacancy: JobVacancyEntity): Promise<void>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<JobVacancyEntity>;
  findAll(page: number): Promise<JobVacancyEntity[]>;
}

export interface JobVacancyProps{
  id?: string;
  companyId: string;
  recruiterId: string;
  position: string;
  description: string;
  positionType: string;
  externalLink: string;
  vacancyType: string;
  salaryRange: string;
  open: boolean;

  createdAt: Date;
  updatedAt: Date;
  endAt: Date;
}

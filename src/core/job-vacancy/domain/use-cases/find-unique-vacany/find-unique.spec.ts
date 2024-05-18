import { JobVacancyInMemoryRepository } from "@tech-connect/core/shared/infra/vacancy-repository/vacancy-in-memory-repository";
import { FindUniqueJobVacancyUseCase } from ".";
import { CreateJobVacancyUseCase } from "../create-vacancy";

describe('FindUniqueVacancy', () => {
  it('should find a unique vacancy', async () => {
    const jobVacancyRepository = new JobVacancyInMemoryRepository();
    const findUniqueVacancyUseCase = new FindUniqueJobVacancyUseCase(jobVacancyRepository)
    const createJobVacancyUseCase = new CreateJobVacancyUseCase(jobVacancyRepository)

    const jobVacancy = {
      companyId: 'companyId',
      recruiterId: 'recruiterId',
      position: 'position',
      description: 'description',
      positionType: 'positionType',
      externalLink: 'externalLink',
      vacancyType: 'vacancyType',
      salaryRange: 'salaryRange',
      open: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      endAt: new Date()
    }

    const createdJob = await createJobVacancyUseCase.execute(jobVacancy)

    const vacancy = await findUniqueVacancyUseCase.execute(createdJob.jobId)
    
    expect(vacancy.id).toEqual(createdJob.jobId)
  })
})
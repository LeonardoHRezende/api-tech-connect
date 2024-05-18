import { JobVacancyInMemoryRepository } from "@tech-connect/core/shared/infra/vacancy-repository/vacancy-in-memory-repository"
import { CreateJobVacancyUseCase } from ".";

describe('CreateVacancy', () => {
  it('should create a vacancy', async () => {
    const jobVacancyRepository = new JobVacancyInMemoryRepository();
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

    expect(createdJob).toHaveProperty('jobId')
  })
})
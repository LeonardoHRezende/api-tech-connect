import { JobVacancyInMemoryRepository } from "@tech-connect/core/shared/infra/vacancy-repository/vacancy-in-memory-repository";
import { UpdateJobVacancyUseCase } from ".";
import { CreateJobVacancyUseCase } from "../create-vacancy";

describe('UpdateVacancy', () => {
  it('should update a vacancy', async () => {
    const jobVacancyRepository = new JobVacancyInMemoryRepository();
    const updateVacancyUseCase = new UpdateJobVacancyUseCase(jobVacancyRepository)
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

    const updatedJob = await updateVacancyUseCase.execute({
      ...jobVacancy,
      id: createdJob.jobId,
      position: 'new position'
    })

    expect(updatedJob.position).toEqual('new position')
  })
})
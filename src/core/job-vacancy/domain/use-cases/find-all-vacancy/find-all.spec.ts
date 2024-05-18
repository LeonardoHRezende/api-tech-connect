import { JobVacancyInMemoryRepository } from "@tech-connect/core/shared/infra/vacancy-repository/vacancy-in-memory-repository";
import { FindAllJobVacancyUseCase } from ".";
import { CreateJobVacancyUseCase } from "../create-vacancy";

describe('FindAllVacancy', () => {
  it('should return all vacancies', async () => {
    const jobVacancyRepository = new JobVacancyInMemoryRepository();
    const findAllJobVacancyUseCase = new FindAllJobVacancyUseCase(jobVacancyRepository)
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

    await createJobVacancyUseCase.execute(jobVacancy)

    const vacancies = await findAllJobVacancyUseCase.execute(1)

    expect(vacancies).toHaveLength(1)
  })
})
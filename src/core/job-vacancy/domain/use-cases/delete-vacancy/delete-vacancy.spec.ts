import { JobVacancyInMemoryRepository } from "@tech-connect/core/shared/infra/vacancy-repository/vacancy-in-memory-repository";
import { NotFoundException } from "@nestjs/common";
import { CreateJobVacancyUseCase } from "../create-vacancy";
import { DeleteJobVacancyUseCase } from ".";

describe('DeleteVacancy', () => {
  it('should delete a vacancy', async () => {
    const jobVacancyRepository = new JobVacancyInMemoryRepository();
    const deleteJobVacancyUseCase = new DeleteJobVacancyUseCase(jobVacancyRepository)
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

    await deleteJobVacancyUseCase.execute(createdJob.jobId)

    await expect(deleteJobVacancyUseCase.execute(createdJob?.jobId)).rejects.toThrow(NotFoundException);
  })
})
import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { JobVacancyEntity } from "../../entities/job-vacancy/vacancy";
import { JobVacancyRepository } from "../../repositories/job-vacancy-repository";
import { prisma } from "@tech-connect/core/db";

@Injectable()
export class JobVacancyPrismaRepository implements JobVacancyRepository {

  async create(jobVacancy: JobVacancyEntity): Promise<void> {
    try {
      await prisma.jobVacancy.create({
        data: {
          id: jobVacancy.id,
          companyId: jobVacancy.companyId,
          recruiterId: jobVacancy.recruiterId,
          position: jobVacancy.position,
          description: jobVacancy.description,
          positionType: jobVacancy.positionType,
          externalLink: jobVacancy.externalLink,
          vacancyType: jobVacancy.vacancyType,
          salaryRange: jobVacancy.salaryRange,
          open: jobVacancy.open,
          createdAt: jobVacancy.createdAt,
          updatedAt: jobVacancy.updatedAt,
          endAt: jobVacancy.endAt
        }
      })
    }
    catch (error) {
      new InternalServerErrorException(error)
    }
  }

  async update(jobVacancy: JobVacancyEntity): Promise<void> {
    try {
      await prisma.jobVacancy.update({
        where: {
          id: jobVacancy.id
        },
        data: {
          id: jobVacancy.id,
          companyId: jobVacancy.companyId,
          recruiterId: jobVacancy.recruiterId,
          position: jobVacancy.position,
          description: jobVacancy.description,
          positionType: jobVacancy.positionType,
          externalLink: jobVacancy.externalLink,
          vacancyType: jobVacancy.vacancyType,
          salaryRange: jobVacancy.salaryRange,
          open: jobVacancy.open,
          createdAt: jobVacancy.createdAt,
          updatedAt: jobVacancy.updatedAt,
          endAt: jobVacancy.endAt
        }
      })
    }
    catch (error) {
      new InternalServerErrorException(error)
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await prisma.jobVacancy.delete({
        where: {
          id: id
        }
      })
    }
    catch (error) {
      new InternalServerErrorException(error)
    }
  }
  async findById(id: string): Promise<JobVacancyEntity> {
    try {
      const jobVacancy = await prisma.jobVacancy.findUnique({
        where: {
          id: id
        },
        select: {
          id: true,
          companyId: true,
          recruiterId: true,
          position: true,
          description: true,
          positionType: true,
          externalLink: true,
          vacancyType: true,
          salaryRange: true,
          open: true,
          createdAt: true,
          updatedAt: true,
          endAt: true
        }
      })

      if (!jobVacancy) throw new NotFoundException('Job Vacancy not found')

      return new JobVacancyEntity(jobVacancy);
    }
    catch (error) {
      new InternalServerErrorException(error)
    }
  }
  async findAll(page: number): Promise<JobVacancyEntity[]> {
    try {
      const jobVacancies = await prisma.jobVacancy.findMany({
        select: {
          id: true,
          companyId: true,
          recruiterId: true,
          position: true,
          description: true,
          positionType: true,
          externalLink: true,
          vacancyType: true,
          salaryRange: true,
          open: true,
          createdAt: true,
          updatedAt: true,
          endAt: true
        },
        skip: (page - 1) * 10,
        take: 10
      })

      if (!jobVacancies) throw new NotFoundException('Job Vacancies not found');

      return jobVacancies.map(jobVacancy => new JobVacancyEntity(jobVacancy))
    }
    catch (error) {
      new InternalServerErrorException(error)
    }
  }

}

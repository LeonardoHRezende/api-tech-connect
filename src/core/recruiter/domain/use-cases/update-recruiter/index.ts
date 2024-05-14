import { RecruiterEntity } from "@tech-connect/core/shared/entities/recruiters/recruiter";
import { RecruiterProps, RecruitersRepository } from "@tech-connect/core/shared/repositories/recruiters-repository ";

export class UpdateRecruiterUseCase {
  constructor(private readonly recruiterRepository: RecruitersRepository) { }

  async execute(recruiter: RecruiterProps) {
    try {
      const createdRecruiter = new RecruiterEntity(recruiter);

      await this.recruiterRepository.updateRecruiter(createdRecruiter);

      return { userId: createdRecruiter.id };
    }
    catch (err) {
      console.log(err);
    }
  }
}
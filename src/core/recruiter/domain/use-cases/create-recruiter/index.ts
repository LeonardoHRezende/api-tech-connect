import { RecruiterEntity } from "@tech-connect/core/shared/entities/recruiters/recruiter";
import { RecruiterProps, RecruitersRepository } from "@tech-connect/core/shared/repositories/recruiters-repository ";


export class CreateRecruiterUseCase {
  constructor(private readonly recruiterRepository: RecruitersRepository) { }

  async execute(recruiter: RecruiterProps) {
    try {
      const createdUser = new RecruiterEntity(recruiter);

      await this.recruiterRepository.createRecruiter(createdUser);

      return { userId: createdUser.id };
    }
    catch (err) {
      console.log(err);
    }
  }
}
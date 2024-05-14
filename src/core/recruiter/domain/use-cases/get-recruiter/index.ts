import { RecruitersRepository } from "@tech-connect/core/shared/repositories/recruiters-repository ";

export class GetRecruiterUseCase {
  constructor(private readonly recruiterRepository: RecruitersRepository) { }

  async execute(id: string) {
    try {
      const recruiter = await this.recruiterRepository.getRecruiter(id);

      return recruiter;
    }
    catch (err) {
      console.log(err);
    }
  }
}
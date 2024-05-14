
import { RecruiterEntity } from "../../entities/recruiters/recruiter";
import { RecruitersRepository } from "../../repositories/recruiters-repository ";

export class InMemoryRecruiterRepository implements RecruitersRepository {
  private recruiters: RecruiterEntity[] = [];

  async createRecruiter(recruiter: RecruiterEntity): Promise<void> {
    this.recruiters.push(recruiter);
  }

  async getRecruiter(id: string): Promise<RecruiterEntity> {
    return this.recruiters.find(recruiter => recruiter.firebaseId === id);
  }

  async updateRecruiter(recruiter: RecruiterEntity): Promise<void> {
    const index = this.recruiters.findIndex(recruiter => recruiter.id === recruiter.id);

    this.recruiters[index] = recruiter;
  }
}
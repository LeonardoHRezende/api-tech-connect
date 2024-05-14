import { CreateRecruiterUseCase } from ".";
import { UserType } from "@tech-connect/core/shared/repositories/account-user-repository";
import { InMemoryRecruiterRepository } from "@tech-connect/core/shared/infra/recruiter-repository/recruiter-in-memory-repository";

const recruiterRepository = new InMemoryRecruiterRepository();
const createRecruiter = new CreateRecruiterUseCase(recruiterRepository);

describe('Create Recruiter', () => {

  it('should create a recruiter', async () => {
    const recruiter = {
      firebaseId: '123',
      email: 'jhonndoe@gmail.com',
      type: 'RECRUITER' as UserType,
      recruiterInformations: {
        userId: '123',
        name: 'Jhon Doe',
        age: 30,
        phone: '123456789',
        city: 'New York',
        state: 'NY',
        country: 'USA',
        profileImage: 'https://sm.ign.com/ign_br/screenshot/default/link_t3cf.png'
      }
    }

    const createdRecruiter = await createRecruiter.execute(recruiter);

    expect(createdRecruiter).toHaveProperty('userId');
  });
});
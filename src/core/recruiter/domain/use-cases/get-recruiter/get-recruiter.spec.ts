import { InMemoryRecruiterRepository } from "@tech-connect/core/shared/infra/recruiter-repository/recruiter-in-memory-repository";
import { UserType } from "@tech-connect/core/shared/repositories/account-user-repository";
import { CreateRecruiterUseCase } from "../create-recruiter";
import { GetRecruiterUseCase } from ".";
;

const recruiterRepository = new InMemoryRecruiterRepository();
const createRecruiter = new CreateRecruiterUseCase(recruiterRepository);
const findRecruiter = new GetRecruiterUseCase(recruiterRepository);

describe('Create recruiter and find a recruiter', () => {

  it('should create a recruiter and find him', async () => {

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

    const foundRecruiter = await findRecruiter.execute('123');

    expect(foundRecruiter).toHaveProperty('id');
    expect(createdRecruiter).toHaveProperty('userId');
  });
});
import { InMemoryRecruiterRepository } from "@tech-connect/core/shared/infra/recruiter-repository/recruiter-in-memory-repository";
import { UserType } from "@tech-connect/core/shared/repositories/account-user-repository";
import { CreateRecruiterUseCase } from "../create-recruiter";
import { UpdateRecruiterUseCase } from ".";


const recruiterRepository = new InMemoryRecruiterRepository();
const createRecruiter = new CreateRecruiterUseCase(recruiterRepository);
const updateRecruiter = new UpdateRecruiterUseCase(recruiterRepository);

describe('Create recruiter and update him', () => {

  it('should create a user', async () => {

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

    const newRecruiter = {
      firebaseId: '123',
      email: 'jhonendoe@gmail.com',
      type: 'RECRUITER' as UserType,
      recruiterInformations: {
        userId: '123',
        name: 'Jhon Doe da silva',
        age: 30,
        phone: '123456789',
        city: 'New York',
        state: 'NY',
        country: 'USA',
        profileImage: 'https://sm.ign.com/ign_br/screenshot/default/link_t3cf.png'
      }
    }

    const updatedRecruiter = await updateRecruiter.execute(newRecruiter);

    expect(createdRecruiter).toHaveProperty('userId');
    expect(updatedRecruiter).toHaveProperty('userId');
  });
});
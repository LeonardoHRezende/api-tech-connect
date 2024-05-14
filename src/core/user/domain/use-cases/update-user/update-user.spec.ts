import { InMemoryUserRepository } from "@tech-connect/core/shared/infra/user-repository/user-in-memory-repository";
import { UserType } from "@tech-connect/core/shared/repositories/account-user-repository";
import { CreateUserUseCase } from "../create-user";
import { UpdateUserUseCase } from ".";

const userRepository = new InMemoryUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const updateUserUseCase = new UpdateUserUseCase(userRepository);

describe('CreateUser and update him', () => {

  it('should create a user', async () => {
    const user = {
      firebaseId: '123',
      email: 'jhonndoe@gmail.com',
      type: 'COMMON' as UserType,
      userInformations: {
        userId: '123',
        name: 'Jhon Doe',
        age: 30,
        phone: '123456789',
        city: 'New York',
        state: 'NY',
        country: 'USA',
        position: 'Software Engineer',
        seniority: 'Senior',
        bio: 'A software engineer with 10 years of experience',
        profileImage: 'https://sm.ign.com/ign_br/screenshot/default/link_t3cf.png'
      }
    }
    const createdUser = await createUserUseCase.execute(user);

    const updateUser = {
      firebaseId: '123',
      email: 'jhonndoe@gmail.com',
      type: 'COMMON' as UserType,
      userInformations: {
        userId: '123',
        name: 'Jhon Doe Updated',
        age: 35,
        phone: '123456788',
        city: 'New York',
        state: 'NY',
        country: 'USA',
        position: 'Software Engineer',
        seniority: 'Senior',
        bio: 'A software engineer with 10 years of experience',
        profileImage: 'https://sm.ign.com/ign_br/screenshot/default/link_t3cf.png'
      }
    }

    const updatedUser = await updateUserUseCase.execute(updateUser);

    expect(createdUser).toHaveProperty('userId');
    expect(updatedUser).toHaveProperty('userId');
  });
});
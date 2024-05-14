import { InMemoryCompanyRepository } from "@tech-connect/core/shared/infra/company-repository/company-in-memory-repository";
import { CreateCompanyUseCase } from ".";
import { UserType } from "@tech-connect/core/shared/repositories/account-user-repository";

const companyRepository = new InMemoryCompanyRepository();
const createCompanyUseCase = new CreateCompanyUseCase(companyRepository);

describe('CreateCompany', () => {

  it('should create a company', async () => {
    const company = {
      firebaseId: '123',
      email: 'jhonndoe@gmail.com',
      type: 'COMPANY' as UserType,
      companyInformations: {
        userId: '123',
        name: 'Jhon Doe Company',
        description: 'A company',
        profileImage: 'image.png',
        phone: '123456789',
        city: 'City',
        state: 'State',
        country: 'Country'
      }
    }

    const createCompany = await createCompanyUseCase.execute(company);

    expect(createCompany).toHaveProperty('userId');
  });
});
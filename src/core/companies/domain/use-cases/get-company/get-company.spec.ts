import { InMemoryCompanyRepository } from "@tech-connect/core/shared/infra/company-repository/company-in-memory-repository";
import { UserType } from "@tech-connect/core/shared/repositories/account-user-repository";
import { CreateCompanyUseCase } from "../create-company";
import { GetCompanyUseCase } from ".";


const companyRepository = new InMemoryCompanyRepository();
const createCompanyUseCase = new CreateCompanyUseCase(companyRepository);
const findCompanyUseCase = new GetCompanyUseCase(companyRepository);

describe('Create company and find a company', () => {
  it('should create a company and find company', async () => {
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

    const createdCompany = await createCompanyUseCase.execute(company);

    const foundCompany = await findCompanyUseCase.execute('123');

    expect(foundCompany).toHaveProperty('email');
    expect(createdCompany).toHaveProperty('userId');
  });
});
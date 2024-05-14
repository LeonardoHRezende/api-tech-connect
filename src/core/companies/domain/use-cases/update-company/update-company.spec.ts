import { InMemoryCompanyRepository } from "@tech-connect/core/shared/infra/company-repository/company-in-memory-repository";
import { CreateCompanyUseCase } from "../create-company";
import { UpdateCompanyUseCase } from ".";
import { UserType } from "@tech-connect/core/shared/repositories/account-user-repository";

const companyRepository = new InMemoryCompanyRepository();
const createCompany = new CreateCompanyUseCase(companyRepository);
const updateCompany = new UpdateCompanyUseCase(companyRepository);

describe('Create company and update company', () => {

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

    const createdCompany = await createCompany.execute(company);


    const toUpdateCompany = {
      firebaseId: '123',
      email: 'jhonndoe@gmail.com',
      type: 'COMPANY' as UserType,
      companyInformations: {
        userId: '123',
        name: 'Jhon Doe New Company',
        description: 'A new company',
        profileImage: 'image.png',
        phone: '123456789',
        city: 'City',
        state: 'State',
        country: 'Country'
      }
    }

    const updatedCompany = await updateCompany.execute(toUpdateCompany);

    expect(createdCompany).toHaveProperty('userId');
    expect(updatedCompany).toHaveProperty('userId');
  });
});
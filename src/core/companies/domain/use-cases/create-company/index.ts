import { CompanyEntity } from "@tech-connect/core/shared/entities/companies/company";
import { CompaniesRepository, companyProps } from "@tech-connect/core/shared/repositories/companies-repository";


export class CreateCompanyUseCase {
  constructor(private readonly companyRepository: CompaniesRepository) { }

  async execute(company: companyProps) {
    try {
      const createdCompany = new CompanyEntity(company);

      await this.companyRepository.createCompany(createdCompany);

      return { userId: createdCompany.id };
    }
    catch (err) {
      console.log(err);
    }
  }
}
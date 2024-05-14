import { CompaniesRepository } from "@tech-connect/core/shared/repositories/companies-repository";


export class GetCompanyUseCase {
  constructor(private readonly companyRepository: CompaniesRepository) { }

  async execute(id: string) {
    try {
      const company = await this.companyRepository.getCompany(id);

      return company;
    }
    catch (err) {
      console.log(err);
    }
  }
}
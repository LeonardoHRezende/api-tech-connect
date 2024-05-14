import { CompanyEntity } from "../../entities/companies/company";
import { CompaniesRepository } from "../../repositories/companies-repository";

export class InMemoryCompanyRepository implements CompaniesRepository {
  private companies: CompanyEntity[] = [];

  async createCompany(company: CompanyEntity): Promise<void> {
    this.companies.push(company);
  }

  async getCompany(id: string): Promise<CompanyEntity> {
    return this.companies.find(company => company.firebaseId === id);
  }

  async updateCompany(company: CompanyEntity): Promise<void> {
    const index = this.companies.findIndex(c => c.id === company.id);
    this.companies[index] = company;
  }
}
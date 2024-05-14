
import { CompanyEntity } from "../entities/companies/company";
import { UserType } from "./account-user-repository";


export interface CompaniesRepository {
  createCompany(company: CompanyEntity): Promise<void>;
  getCompany(id: string): Promise<CompanyEntity>;
  updateCompany(company: CompanyEntity): Promise<void>;
}

export interface companyProps {
  id?: string;
  firebaseId: string;
  email: string;
  type: UserType;
  createdAt?: Date;
  updatedAt?: Date;
  companyInformations: companyInformations;
}

export interface companyInformations {
  userId: string;
  name: string;
  description: string;
  profileImage: string;
  phone: string;
  city: string;
  state: string;
  country: string;
}
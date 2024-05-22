import { UserEntity } from "../entities/users/users";
import { companyInformations } from "./companies-repository";
import { recruiterInformations } from "./recruiters-repository ";

export interface AccountUserRepository {
  createUser(user: UserEntity): Promise<void>;
  getUser(id: string): Promise<UserEntity>;
  updateUser(user: UserEntity): Promise<void>;
}

export interface UserInput{
  firebaseId: string;
  email: string;
  type: UserType;
}

export interface UserProps {
  id?: string;
  firebaseId: string;
  email: string;
  type: UserType;
  createdAt?: Date;
  updatedAt?: Date;
  userInformations?: userInformations;
  companyInformations?: companyInformations;
  recruiterInformations?: recruiterInformations; 
}

export interface userInformations {
  userId: string;
  name: string;
  age: number;
  phone: string;
  city: string;
  state: string;
  country: string;
  position: string;
  seniority: string;
  bio: string;
  profileImage: string;
}

export type UserType = 'COMPANY' | 'COMMON' | 'RECRUITER';
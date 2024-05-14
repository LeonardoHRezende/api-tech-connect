import { RecruiterEntity } from "../entities/recruiters/recruiter";
import { UserType } from "./account-user-repository";



export interface RecruitersRepository {
  createRecruiter(user: RecruiterEntity): Promise<void>;
  getRecruiter(id: string): Promise<RecruiterEntity>;
  updateRecruiter(user: RecruiterEntity): Promise<void>;
}

export interface RecruiterProps {
  id?: string;
  firebaseId: string;
  email: string;
  type: UserType;
  createdAt?: Date;
  updatedAt?: Date;
  recruiterInformations: recruiterInformations;
}

export interface recruiterInformations {
  userId: string;
  name: string;
  age: number;
  phone: string;
  city: string;
  state: string;
  country: string;
  profileImage: string;
}
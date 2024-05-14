import { UserEntity } from "../entities/users/users";

export interface AccountUserRepository {
  createUser(user: UserEntity): Promise<void>;
  getUser(id: string): Promise<UserEntity>;
  updateUser(user: UserEntity): Promise<void>;
}

export interface UserProps {
  id?: string;
  firebaseId: string;
  email: string;
  type: UserType;
  createdAt?: Date;
  updatedAt?: Date;
  userInformations: userInformations;
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
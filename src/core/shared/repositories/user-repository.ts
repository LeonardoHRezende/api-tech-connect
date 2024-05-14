export interface AccountUserRepository {
  createAccountUser(user: accountsUsers): Promise<any> ;
  getAccountUserById(id: string): Promise<any> ;
}

export interface accountsUsers {
  id: string;
  firebaseId: string;
  email: string;
  type: userType;
}

export enum userType {
  COMPANY = 'company',
  COMMON = 'common',
  RECRUITER = 'recruiter',
}
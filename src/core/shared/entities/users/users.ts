import { userType } from "../../repositories/user-repository";

export class AccountsUserEntity {
  constructor(private _props: AccountUserProps) { }

  get id() {
    return this._props.id;
  }

  get firebaseId() {
    return this._props.firebaseId;
  }

  get email() {
    return this._props.email;
  }

  get type() {
    return this._props.type;
  }

  toJSON() {
    return {
      id: this.id,
      firebaseId: this.firebaseId,
      email: this.email,
      type: this.type,
    };
  }
}

interface AccountUserProps {
  id: string;
  firebaseId: string;
  email: string;
  type: userType;
}
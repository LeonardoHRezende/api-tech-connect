import { randomUUID } from "crypto";
import { UserProps } from "../../repositories/account-user-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserEntity {
  constructor(private _props: UserProps) { }

  get id() {
    if (!this._props.id) {
      return randomUUID();
    }

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

  get createdAt() {
    if (!this._props.createdAt) {
      return new Date();
    }
    return this._props.createdAt;
  }

  get updatedAt() {
    if (!this._props.updatedAt) {
      return new Date();
    }
    return this._props.updatedAt;
  }

  get userInformations() {
    return this._props.userInformations;
  }

  toJSON() {
    return {
      id: this.id,
      firebaseId: this.firebaseId,
      email: this.email,
      type: this.type,
      userInformations: this._props.userInformations
    };
  }
}
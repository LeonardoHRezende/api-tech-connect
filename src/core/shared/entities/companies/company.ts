import { randomUUID } from "crypto";
import { companyProps } from "../../repositories/companies-repository";


export class CompanyEntity {
  constructor(private _props: companyProps) { }

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

  get companyInformations() {
    return this._props.companyInformations;
  }

  toJSON() {
    return {
      id: this.id,
      firebaseId: this.firebaseId,
      email: this.email,
      type: this.type,
      companyInformations: this._props.companyInformations
    };
  }
}
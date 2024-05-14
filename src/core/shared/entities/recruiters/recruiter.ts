import { randomUUID } from "crypto";
import { RecruiterProps } from "../../repositories/recruiters-repository ";

export class RecruiterEntity {
  constructor(private _props: RecruiterProps) { }

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

  get recruiterInformations() {
    return this._props.recruiterInformations;
  }

  toJSON() {
    return {
      id: this.id,
      firebaseId: this.firebaseId,
      email: this.email,
      type: this.type,
      recruiterInformations: this._props.recruiterInformations
    };
  }
}
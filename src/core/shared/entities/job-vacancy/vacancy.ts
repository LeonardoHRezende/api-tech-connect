import { randomUUID } from "crypto";
import { JobVacancyProps } from "../../repositories/job-vacancy-repository";

export class JobVacancyEntity {
  constructor(private readonly props: JobVacancyProps) {
    this.props = {
      ...props,
      id: props.id ?? randomUUID(),
    };
  }


  get id(): string {
    return this.props.id;
  }

  get companyId(): string {
    return this.props.companyId;
  }

  get recruiterId(): string {
    return this.props.recruiterId;
  }

  get position(): string {
    return this.props.position;
  }

  get description(): string {
    return this.props.description;
  }

  get positionType(): string {
    return this.props.positionType;
  }

  get externalLink(): string {
    return this.props.externalLink;
  }

  get vacancyType(): string {
    return this.props.vacancyType;
  }

  get salaryRange(): string {
    return this.props.salaryRange;
  }

  get open(): boolean {
    return this.props.open;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  get endAt(): Date {
    return this.props.endAt;
  }

  toJSon(): JobVacancyProps {
    return {
      id: this.id,
      companyId: this.companyId,
      recruiterId: this.recruiterId,
      position: this.position,
      description: this.description,
      positionType: this.positionType,
      externalLink: this.externalLink,
      vacancyType: this.vacancyType,
      salaryRange: this.salaryRange,
      open: this.open,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      endAt: this.endAt,
    };

  }
}


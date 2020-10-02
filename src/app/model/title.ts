import { Employer } from './employer';

export class Title {
    id: number;
    name: string;
    employer: Employer;

    constructor(id?: number, name?: string, employer?: Employer) {
        if (id) {
            this.id = id;
        }
        if (name) {
            this.name = name;
        }
        if (employer) {
            this.employer = employer;
        }
    }

    toString(): string {
        return `{ "id": ${this.id}, "name": "${this.name}", "employer": ${this.employer.toString()} }`;
    }
}

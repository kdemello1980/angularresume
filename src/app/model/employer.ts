export class Employer {
    employerId: number;
    name: string;

    constructor(employerId?: number, name?: string) {
        if (employerId){
            this.employerId = employerId;
        }
        if (name){
            this.name = name;
        }
    }

    toString(): string {
        return `{ "employerId": ${this.employerId}, "name": "${this.name}" }`;
    }
}

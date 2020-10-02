// import { Employer } from './employer';
import { Title } from './title';

export class Item {
    id: number;
    text: string;
    title: Title;

    constructor(id?: number, text?: string, title?: Title) {
        if (id){
            this.id = id;
        }
        if (text){
            this.text = text;
        }
        if (title){
            this.title = title;
        }
    }

    toString(): string {
        return `{ "id": ${this.id}}, "text": "${this.text}", "title": ${this.title.toString()} }`;
    }
}

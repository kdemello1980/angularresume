export class Cert {
    id: number;
    icon: string;
    name: string;
    url: string;

    constructor(id?: number, icon?: string, name?: string, url?: string) {
        if (id) {
            this.id = id;
        }
        if (icon) {
            this.icon = icon;
        }
        if (name) {
            this.name = name;
        }
        if (url) {
            this.url = url;
        }
    }

    toString(): string {
        return `{ "id": ${this.id}, "name": "${this.name}", "icon": "${this.icon}", "url": "${this.url}" }`;
    }
}

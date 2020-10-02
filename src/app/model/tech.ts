export class Tech {
    name: string;
    url: string;
    image: string;

    constructor(name?: string, url?: string, image?: string ){
        if (name){
            this.name = name;
        }
        if (url){
            this.url = url;
        }
        if (image) {
            this.image = image;
        }
    }

    toString(): string {
        return `{ "name": "${this.name}", "url": "${this.url}", "image": "${this.image}" }`;
    }
}

export class Category {
    public name: string;
    public id: string;
    public description: string;

    public constructor(id: string, name: string, description: string) {
        this.name = name;
        this.id = id;
        this.description = description;
    }
}

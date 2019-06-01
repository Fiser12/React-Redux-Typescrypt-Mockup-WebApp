export class Category {
    public name: string;
    public id: number;
    public description: string;

    public constructor(id: number, name: string, description: string) {
        this.name = name;
        this.id = id;
        this.description = description;
    }
}

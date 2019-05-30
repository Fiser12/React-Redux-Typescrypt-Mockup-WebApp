export class Category {
    name: string;
    id: string;
    description: string;

    public constructor(id: string, name: string, description: string) {
        this.name = name;
        this.id = id;
        this.description = description;
    }
}

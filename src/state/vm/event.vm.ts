export class Event {
    id: string;
    categoryId: string;
    title: string;
    description: string;
    date: Date;
    imageUrl: string;
    thumbnailImageUrl: string;
    city: string;
    country: string;
    venueName: string;

    public constructor(
        id: string,
        categoryId: string,
        title: string,
        description: string,
        date: Date,
        imageUrl: string,
        thumbnailImageUrl: string,
        city: string,
        country: string,
        venueName: string,
    ) {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.description = description;
        this.date = date;
        this.imageUrl = imageUrl;
        this.thumbnailImageUrl = thumbnailImageUrl;
        this.city = city;
        this.country = country;
        this.venueName = venueName;
    }
}
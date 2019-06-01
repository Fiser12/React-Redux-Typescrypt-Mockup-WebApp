import {Category} from "../vm/category.vm";
import {Event} from "../vm/event.vm";

export const eventMocked = (id: string) => new Event(
    id,
    "1",
    "title",
    "description",
    new Date(),
    "imageUrl",
    "thumbnailImageUrl",
    "city",
    "country",
    "venueName",
);


export const categoryMocked = (id: string) => new Category(id, "Category" + id, "Description" + id);

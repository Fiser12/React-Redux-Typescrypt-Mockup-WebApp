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

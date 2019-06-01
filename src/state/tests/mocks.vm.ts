import {Category} from "../vm/category.vm";
import {Event} from "../vm/event.vm";
import {Ticket} from "../vm/ticket.vm";

export const eventMocked = (id: number) => new Event(
    id,
    1,
    "title" + id,
    "description" + id,
    new Date("2019-06-01T17:18:27.089Z"),
    "imageUrl",
    "thumbnailImageUrl",
    "city",
    "country",
    "venueName",
);


export const categoryMocked = (id: number) => new Category(id, "Category" + id, "Description" + id);
export const ticketMocked = (id: number, eventId: number, status: boolean) =>
    new Ticket(
        id,
        1,
        eventId,
        1,
        1,
        status,
    );

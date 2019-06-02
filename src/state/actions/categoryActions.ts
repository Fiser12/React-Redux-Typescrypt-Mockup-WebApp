import {routesLinks} from "core";
import {Event} from "../vm/event.vm";
import {apiRequest, IApiRequestAction, Method} from "./apiActions";

export enum CategoryActionType {
    CATEGORY_GET_EVENTS = "CATEGORY_GET_EVENTS",
}

export const getEventsByApi = (categoryId: string): IApiRequestAction<EventsResponse> => {
    return apiRequest<EventsResponse>(
        {},
        Method.GET,
        routesLinks.eventsByCategoryApi(categoryId),
        CategoryActionType.CATEGORY_GET_EVENTS,
    );
};

export type EventsResponse = IEventApi[];

interface IEventApi {
    id: number;
    categoryId: number;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
    thumbnailImageUrl: string;
    city: string;
    country: string;
    venueName: string;
}

import {routesLinks} from "core";
import {Action} from "redux";
import {Event} from "../vm/event.vm";
import {apiRequest, IApiRequestAction, Method} from "./apiActions";

export enum EventActionType {
    EVENT_GET_TICKETS = "EVENT_GET_TICKETS",
    EVENT_GET_BY_ID = "EVENT_GET_BY_ID",
    EVENT_SELECT = "EVENT_SELECT",
}

export interface ISelectEventAction extends Action {
    payload: {
        event: Event,
    };
    type: EventActionType.EVENT_SELECT;
}

export const getActiveTicketsByApi = (eventId: string): IApiRequestAction<TicketsResponse> => {
    return apiRequest<TicketsResponse>(
        {},
        Method.GET,
        routesLinks.ticketsApi(eventId, true),
        EventActionType.EVENT_GET_TICKETS,
    );
};

export const getEventById = (eventId: string): IApiRequestAction<EventsResponse> => {
    return apiRequest<EventsResponse>(
        {},
        Method.GET,
        routesLinks.eventsByIdApi(eventId),
        EventActionType.EVENT_GET_BY_ID,
    );
};

export const selectEvent = (event: Event): ISelectEventAction => ({
    payload: {
        event,
    },
    type: EventActionType.EVENT_SELECT,
});

export type TicketsResponse = ITicketApi[];

interface ITicketApi {
    sellerId: number;
    eventId: number;
    id: number;
    quantity: number;
    unit_price: number;
    status: boolean;
}

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

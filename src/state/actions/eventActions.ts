import {apiRequest, Method} from "./apiActions";
import {routesLinks} from "core";
import {Event} from "../vm/event.vm";

export enum EventActionType {
    EVENT_GET_TICKETS = "EVENT_GET_TICKETS",
    EVENT_GET_BY_ID = "EVENT_GET_BY_ID",
    EVENT_SELECT = "EVENT_SELECT",
}

export const getActiveTicketsByApi = (eventId:string) => {
    return apiRequest(
        {},
        Method.GET,
        routesLinks.ticketsApi(eventId, true),
        EventActionType.EVENT_GET_TICKETS
    );
};

export const getEventById = (eventId:string) => {
    return apiRequest(
        {},
        Method.GET,
        routesLinks.eventsByIdApi(eventId),
        EventActionType.EVENT_GET_BY_ID
    );
};

export const selectEvent = (event:Event) => ({
    type: EventActionType.EVENT_SELECT,
    payload: {
        event: event
    }
});
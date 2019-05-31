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

export const getActiveTicketsByApi = (eventId: string): IApiRequestAction => {
    return apiRequest(
        {},
        Method.GET,
        routesLinks.ticketsApi(eventId, true),
        EventActionType.EVENT_GET_TICKETS,
    );
};

export const getEventById = (eventId: string): IApiRequestAction => {
    return apiRequest(
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

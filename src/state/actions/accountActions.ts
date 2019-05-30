import {ApiActionType, apiRequest, Method} from "./apiActions";
import {routesLinks} from "core";
import {EventActionType} from "./eventActions";
import {Event} from "../vm/event.vm";

export enum AccountActionType {
    ACCOUNT_GET_PURCHASED_TICKETS = "ACCOUNT_GET_PURCHASED_TICKETS",
    ACCOUNT_DUPLICATE_TICKET = "ACCOUNT_DUPLICATE_TICKET",
    ACCOUNT_REMOVE_TICKET = "ACCOUNT_REMOVE_TICKET",
    ACCOUNT_TOGGLE_STATE_TICKET = "ACCOUNT_TOGGLE_STATE_TICKET"
}

export const getTicketsPurchased = () => {
    return apiRequest(
        {},
        Method.GET,
        routesLinks.ticketsBySellerApi("1"), //Hardcoded because is a demo without real user
        AccountActionType.ACCOUNT_GET_PURCHASED_TICKETS
    );
};

export const duplicateTicket = (id:number) => ({
    type: AccountActionType.ACCOUNT_DUPLICATE_TICKET,
    payload: {
        id: id
    },
});

export const removeTicket = (id:number) => ({
    type: AccountActionType.ACCOUNT_REMOVE_TICKET,
    payload: {
        id: id
    },
});


export const toggleState = (id:number) => ({
    type: AccountActionType.ACCOUNT_TOGGLE_STATE_TICKET,
    payload: {
        id: id
    },
});
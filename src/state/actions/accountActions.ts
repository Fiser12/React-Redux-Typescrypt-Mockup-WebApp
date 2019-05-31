import {routesLinks} from "core";
import {IAction} from "./actions";
import {apiRequest, IApiRequestAction, Method} from "./apiActions";

export enum AccountActionType {
    ACCOUNT_GET_PURCHASED_TICKETS = "ACCOUNT_GET_PURCHASED_TICKETS",
    ACCOUNT_DUPLICATE_TICKET = "ACCOUNT_DUPLICATE_TICKET",
    ACCOUNT_REMOVE_TICKET = "ACCOUNT_REMOVE_TICKET",
    ACCOUNT_TOGGLE_STATE_TICKET = "ACCOUNT_TOGGLE_STATE_TICKET",
}

interface IDuplicateTicketAction extends IAction {
    payload: {
        id: number;
    };
    type: AccountActionType.ACCOUNT_DUPLICATE_TICKET;
}

interface IRemoveTicketAction extends IAction {
    payload: {
        id: number;
    };
    type: AccountActionType.ACCOUNT_REMOVE_TICKET;
}

interface IToggleStateAction extends IAction {
    payload: {
        id: number;
    };
    type: AccountActionType.ACCOUNT_TOGGLE_STATE_TICKET;
}

export const getTicketsPurchased = (): IApiRequestAction => {
    // Hardcoded because is a demo without real user
    return apiRequest(
        {},
        Method.GET,
        routesLinks.ticketsBySellerApi("1"),
        AccountActionType.ACCOUNT_GET_PURCHASED_TICKETS,
    );
};

export const duplicateTicket = (id: number): IDuplicateTicketAction => ({
    payload: {
        id,
    },
    type: AccountActionType.ACCOUNT_DUPLICATE_TICKET,
});

export const removeTicket = (id: number): IRemoveTicketAction => ({
    payload: {
        id,
    },
    type: AccountActionType.ACCOUNT_REMOVE_TICKET,
});

export const toggleState = (id: number): IToggleStateAction => ({
    payload: {
        id,
    },
    type: AccountActionType.ACCOUNT_TOGGLE_STATE_TICKET,
});

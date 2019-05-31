import {Action, Dispatch, Middleware, Store} from "redux";
import {AccountActionType} from "../actions/accountActions";
import {ApiActionType} from "../actions/apiActions";
import {getEventById} from "../actions/eventActions";
import {Ticket} from "../vm/ticket.vm";

export const apiResponsesMiddleware: Middleware = <IState>(store: Store) => (next: Dispatch) => (action: Action) => {
    next(action);

    if (ApiActionType.API_SUCCESS + " " + AccountActionType.ACCOUNT_GET_PURCHASED_TICKETS === action.type) {
        dispatchApiRequestForEvents(store);
    }
};

function dispatchApiRequestForEvents(store: Store) {
    const eventIds = [...new Set(
        store.getState().account.tickets.map((ticket: Ticket) => ticket.eventId),
    )];

    eventIds.forEach((eventId: string) => {
        store.dispatch(getEventById(eventId));
    });
}

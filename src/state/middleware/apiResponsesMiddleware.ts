import {ApiActionType} from 'state/actions/apiActions';
import {AccountActionType} from "../actions/accountActions";
import {Dispatch, Store} from "redux";
import {Ticket} from "../vm/ticket.vm";
import {getEventById} from "../actions/eventActions";

export const apiResponsesMiddleware = (store: Store) => (next: Dispatch) => (action) => {
    next(action);

    if (ApiActionType.API_SUCCESS + ' ' + AccountActionType.ACCOUNT_GET_PURCHASED_TICKETS === action.type) {
        dispatchApiRequestForEvents(store);
    }
};

function dispatchApiRequestForEvents(store: Store) {
    const eventIds = [...new Set(
        store.getState().accountReducer.tickets.map((ticket: Ticket) => ticket.eventId)
    )];

    eventIds.forEach((eventId: string) => {
        store.dispatch(getEventById(eventId));
    })
}
import {AccountActionType} from "../actions/accountActions";
import {ApiActionType} from "../actions/apiActions";
import {EventActionType} from "../actions/eventActions";
import {Event} from "../vm/event.vm";
import {Ticket} from "../vm/ticket.vm";

export interface IAccountState {
    eventsCache;
    tickets: Ticket[];
}

export const initialState = {
    eventsCache: [],
    tickets: [],
};

export function accountReducer(state: IAccountState = initialState, action) {
    switch (action.type) {
        case ApiActionType.API_SUCCESS + " " + AccountActionType.ACCOUNT_GET_PURCHASED_TICKETS: {
            return handleGetEventsSuccess(state, action);
        }
        case ApiActionType.API_SUCCESS + " " + EventActionType.EVENT_GET_BY_ID: {
            return handleStoreEventInTicketCache(state, action.payload.data[0]);
        }
        case AccountActionType.ACCOUNT_DUPLICATE_TICKET: {
            return handleDuplicateTicket(state, action.payload.id);
        }
        case AccountActionType.ACCOUNT_REMOVE_TICKET: {
            return handleRemoveTicket(state, action.payload.id);
        }
        case AccountActionType.ACCOUNT_TOGGLE_STATE_TICKET: {
            return handleToggleStateTicket(state, action.payload.id);
        }
        default:
            return state;
    }
}
function handleRemoveTicket(state: IAccountState, id: number): IAccountState {
    const stateTransform = {...state};

    stateTransform.tickets = state.tickets.filter((ticket: Ticket) => ticket.id !== id);

    return stateTransform;
}

function handleToggleStateTicket(state: IAccountState, id: number): IAccountState {
    const stateTransform = {...state};

    stateTransform.tickets = state.tickets.map((ticket: Ticket) => {
        if (ticket.id === id) {
            ticket.status = !ticket.status;
        }
        return ticket;
    });

    return stateTransform;
}

function handleDuplicateTicket(state: IAccountState, id: number): IAccountState {
    const stateTransform = {...state};

    stateTransform.tickets = state.tickets.reduce((res, ticket: Ticket, index, array) => {
        if (ticket.id === id) {
            const ticketDuplicate = {...ticket};
            ticketDuplicate.id = Math.floor(Math.random() * Math.pow(2, 32) - 1) + 1;
            // For escape duplicates, generate new random id
            return res.concat([ticket, ticketDuplicate]);
        } else {
            return res.concat([ticket]);
        }
    }, []);

    return stateTransform;
}


function handleGetEventsSuccess(state: IAccountState, action): IAccountState {
    const stateTransform = {...state};

    stateTransform.tickets = action.payload.data.map(
        (ticket) => new Ticket(
            ticket.id,
            ticket.sellerId,
            ticket.eventId,
            ticket.quantity,
            ticket.unit_price,
            ticket.status,
        ),
    );

    return stateTransform;
}

function handleStoreEventInTicketCache(state: IAccountState, eventApi): IAccountState {
    const stateTransform = {
        ...state,
        eventsCache: [
            ...state.eventsCache,
            new Event(
                eventApi.id,
                eventApi.categoryId,
                eventApi.title,
                eventApi.description,
                new Date(eventApi.date),
                eventApi.imageUrl,
                eventApi.thumbnailImageUrl,
                eventApi.city,
                eventApi.country,
                eventApi.venueName,
            ),
        ],
    };

    return stateTransform;
}

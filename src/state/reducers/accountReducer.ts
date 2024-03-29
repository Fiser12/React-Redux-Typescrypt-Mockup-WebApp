import {
    AccountActionType,
    IDuplicateTicketAction,
    IRemoveTicketAction,
    IToggleStateAction,
    TicketsResponse,
} from "../actions/accountActions";
import {ApiActionType, IApiResponseAction} from "../actions/apiActions";
import {EventActionType, EventsResponse} from "../actions/eventActions";
import {Event} from "../vm/event.vm";
import {Ticket} from "../vm/ticket.vm";

export interface IAccountState {
    eventsCache;
    tickets: Ticket[];
}

export const initialState = () => {
    return {
        eventsCache: [],
        tickets: [],
    };
};

export function accountReducer(state: IAccountState = initialState(), action) {
    switch (action.type) {
        case ApiActionType.API_SUCCESS + " " + AccountActionType.ACCOUNT_GET_PURCHASED_TICKETS: {
            return handleGetEventsSuccess(state, (action as IApiResponseAction<TicketsResponse>).payload);
        }
        case ApiActionType.API_SUCCESS + " " + EventActionType.EVENT_GET_BY_ID: {
            return handleStoreEventInTicketCache(state, (action as IApiResponseAction<EventsResponse>).payload);
        }
        case AccountActionType.ACCOUNT_DUPLICATE_TICKET: {
            return handleDuplicateTicket(state, (action as IDuplicateTicketAction).payload.id);
        }
        case AccountActionType.ACCOUNT_REMOVE_TICKET: {
            return handleRemoveTicket(state, (action as IRemoveTicketAction).payload.id);
        }
        case AccountActionType.ACCOUNT_TOGGLE_STATE_TICKET: {
            return handleToggleStateTicket(state, (action as IToggleStateAction).payload.id);
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
            return {
                ...ticket,
                status: !ticket.status,
            };
        }
        return {
            ...ticket,
        };
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


function handleGetEventsSuccess(state: IAccountState, response: TicketsResponse): IAccountState {
    const stateTransform = {...state};

    stateTransform.tickets = response.map(
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

function handleStoreEventInTicketCache(state: IAccountState, response: EventsResponse): IAccountState {
    if (response.length === 0) {
        return state;
    }

    const eventApi = response[0];

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

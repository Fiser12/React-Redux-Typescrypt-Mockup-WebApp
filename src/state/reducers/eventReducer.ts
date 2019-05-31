import {ApiActionType} from "state/actions/apiActions";
import {Ticket} from "../vm/ticket.vm";
import {EventActionType} from "../actions/eventActions";
import {Event} from "../vm/event.vm";

class EventState {
    event: Event;
    tickets: Array<Ticket>;

    public constructor(event: Event = null, tickets: Array<Ticket> = Array<Ticket>()) {
        this.tickets = tickets;
        this.event = event;
    }
}

export const initialState = new EventState();

export function eventReducer(state: EventState = initialState, action) {
    switch (action.type) {
        case ApiActionType.API_REQUEST + ' ' + EventActionType.EVENT_GET_TICKETS: {
            return handleRemoveOldTickets(state, action);
        }
        case ApiActionType.API_SUCCESS + ' ' + EventActionType.EVENT_GET_TICKETS: {
            return handleGetTicketsSuccess(state, action);
        }
        case ApiActionType.API_SUCCESS + ' ' + EventActionType.EVENT_GET_BY_ID: {
            return handleGetEventSuccess(state, action.payload.data[0]);
        }
        case EventActionType.EVENT_SELECT: {
            return handleEventSelect(state, action);
        }
        default:
            return state;
    }
};

function handleGetTicketsSuccess(state: EventState, action): EventState {
    const stateTransform = {...state};

    stateTransform.tickets = action.payload.data.map(
        ticket => new Ticket(
            ticket.id,
            ticket.sellerId,
            ticket.eventId,
            ticket.quantity,
            ticket.unit_price,
            ticket.status
        )
    );

    return stateTransform;
}

function handleRemoveOldTickets(state: EventState, action): EventState {
    const stateTransform = {...state};

    stateTransform.tickets = Array<Ticket>();

    return stateTransform;
}

function handleEventSelect(state: EventState, action): EventState {
    const stateTransform = {...state};

    stateTransform.event = action.payload.event;

    return stateTransform;
}

function handleGetEventSuccess(state: EventState, eventApi): EventState {
    const stateTransform = {
        ...state,
        event: new Event(
            eventApi.id,
            eventApi.categoryId,
            eventApi.title,
            eventApi.description,
            new Date(eventApi.date),
            eventApi.imageUrl,
            eventApi.thumbnailImageUrl,
            eventApi.city,
            eventApi.country,
            eventApi.venueName
        )
    };

    return stateTransform;
}
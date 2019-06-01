import {ApiActionType} from "../actions/apiActions";
import {EventActionType, ISelectEventAction} from "../actions/eventActions";
import {Event} from "../vm/event.vm";
import {Ticket} from "../vm/ticket.vm";

export interface IEventState {
    event: Event;
    tickets: Ticket[];
}

export const initialState = () => {
    return {
        event: null,
        tickets: [],
    };
}

export function eventReducer(state: IEventState = initialState(), action) {
    switch (action.type) {
        case ApiActionType.API_REQUEST + " " + EventActionType.EVENT_GET_TICKETS: {
            return handleRemoveOldTickets(state);
        }
        case ApiActionType.API_SUCCESS + " " + EventActionType.EVENT_GET_TICKETS: {
            return handleGetTicketsSuccess(state, action);
        }
        case ApiActionType.API_SUCCESS + " " + EventActionType.EVENT_GET_BY_ID: {
            return handleGetEventSuccess(state, action.payload.data[0]);
        }
        case EventActionType.EVENT_SELECT: {
            return handleEventSelect(state, action as ISelectEventAction);
        }
        default:
            return state;
    }
}

function handleGetTicketsSuccess(state: IEventState, action): IEventState {
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

function handleRemoveOldTickets(state: IEventState): IEventState {
    const stateTransform = {
        ...state,
        tickets: [],
    };

    return stateTransform;
}

function handleEventSelect(state: IEventState, action: ISelectEventAction): IEventState {
    const stateTransform = {...state};

    stateTransform.event = action.payload.event;

    return stateTransform;
}

function handleGetEventSuccess(state: IEventState, eventApi): IEventState {
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
            eventApi.venueName,
        ),
    };

    return stateTransform;
}

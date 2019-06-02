import {ApiActionType, IApiResponseAction} from "../actions/apiActions";
import {CategoryActionType, EventsResponse} from "../actions/categoryActions";
import {Event} from "../vm/event.vm";

export interface ICategoryState {
    events: Event[];
}

export const initialState = () => {
    return {
        events: [],
    };
};

export function categoryReducer(state: ICategoryState = initialState(), action) {
    switch (action.type) {
        case ApiActionType.API_SUCCESS + " " + CategoryActionType.CATEGORY_GET_EVENTS: {
            return handleGetEventsSuccess(state, (action as IApiResponseAction<EventsResponse>).payload);
        }
        default:
            return state;
    }
}

function handleGetEventsSuccess(state: ICategoryState, response: EventsResponse): ICategoryState {
    const stateTransform = {...state};

    stateTransform.events = response.map(
        (event) => new Event(
            event.id,
            event.categoryId,
            event.title,
            event.description,
            new Date(event.date),
            event.imageUrl,
            event.thumbnailImageUrl,
            event.city,
            event.country,
            event.venueName,
        ),
    );

    return stateTransform;
}

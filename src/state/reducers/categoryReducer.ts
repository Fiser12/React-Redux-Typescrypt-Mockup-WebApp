import {CategoryActionType} from "state/actions/categoryActions";
import {ApiActionType} from "state/actions/apiActions";
import {Event} from "state/vm/event.vm";

class CategoryState {
    events: Array<Event>;

    public constructor(
        events: Array<Event> = null,
    ) {
        this.events = events;
    }
}

export const initialState = new CategoryState();

export function categoryReducer(state: CategoryState = initialState, action) {
    switch (action.type) {
        case ApiActionType.API_SUCCESS + ' ' + CategoryActionType.CATEGORY_GET_EVENTS: {
            return handleGetEventsSuccess(state, action);
        }
        default:
            return state;
    }
};

function handleGetEventsSuccess(state: CategoryState, action): CategoryState {
    const stateTransform = {...state};

    stateTransform.events = action.payload.data.map(
        event => new Event(
            event.id,
            event.categoryId,
            event.title,
            event.description,
            new Date(event.date),
            event.imageUrl,
            event.thumbnailImageUrl,
            event.city,
            event.country,
            event.venueName
        )
    );

    return stateTransform;
}
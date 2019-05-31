import {ApiActionType} from "../actions/apiActions";
import {CategoryActionType} from "../actions/categoryActions";
import {Event} from "../vm/event.vm";

class CategoryState {
    public events: Event[];

    public constructor(
        events: Event[] = [],
    ) {
        this.events = events;
    }
}

export const initialState = new CategoryState();

export function categoryReducer(state: CategoryState = initialState, action) {
    switch (action.type) {
        case ApiActionType.API_SUCCESS + " " + CategoryActionType.CATEGORY_GET_EVENTS: {
            return handleGetEventsSuccess(state, action);
        }
        default:
            return state;
    }
}
function handleGetEventsSuccess(state: CategoryState, action): CategoryState {
    const stateTransform = {...state};

    stateTransform.events = action.payload.data.map(
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

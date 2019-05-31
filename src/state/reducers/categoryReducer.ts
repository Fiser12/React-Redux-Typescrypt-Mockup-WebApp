import {ApiActionType} from "../actions/apiActions";
import {CategoryActionType} from "../actions/categoryActions";
import {Event} from "../vm/event.vm";

interface ICategoryState {
    events: Event[];
}

export const initialState = {
    events: [],
};

export function categoryReducer(state: ICategoryState = initialState, action) {
    switch (action.type) {
        case ApiActionType.API_SUCCESS + " " + CategoryActionType.CATEGORY_GET_EVENTS: {
            return handleGetEventsSuccess(state, action);
        }
        default:
            return state;
    }
}
function handleGetEventsSuccess(state: ICategoryState, action): ICategoryState {
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

import {ApiActionType} from "../actions/apiActions";
import {SearchActionType} from "../actions/searchActions";
import {Category} from "../vm/category.vm";

class SearchState {
    public inputTextField: string;
    public searchResult: Category[];
    public searchResultFiltered: Category[];
    public visible: boolean;

    public constructor(
        inputTextField: string = "",
        searchResult: Category[] = null,
        searchResultFiltered: Category[] = null,
        visible: boolean = false,
    ) {
        this.inputTextField = inputTextField;
        this.searchResult = searchResult;
        this.searchResultFiltered = searchResultFiltered;
        this.visible = visible;
    }
}

export const initialState = new SearchState();

export function searchReducer(state: SearchState = initialState, action) {
    switch (action.type) {
        case SearchActionType.SEARCH_BAR_INPUT_TEXT: {
            return handleSearchBoxInputText(state, action);
        }
        case SearchActionType.SEARCH_BAR_DROPDOWN_CLOSE: {
            return handleSearchBarDrowpdownClose(state, action);
        }
        case ApiActionType.API_SUCCESS + " " + SearchActionType.SEARCH_BAR_GET_CATEGORIES: {
            return handleGetCategoriesSuccess(state, action);
        }
        default:
            return state;
    }
}

function handleGetCategoriesSuccess(state: SearchState, action): SearchState {
    const stateTransform = {...state};

    stateTransform.searchResult = action.payload.data.map(
        (category) => new Category(category.id, category.name, category.description),
    );

    return stateTransform;
}

function handleSearchBarDrowpdownClose(state: SearchState, action): SearchState {
    const stateTransform = {...state};
    stateTransform.visible = false;
    return stateTransform;
}

function handleSearchBoxInputText(state: SearchState, action): SearchState {
    const stateTransform = {...state};
    stateTransform.inputTextField = action.payload.inputTextField;
    stateTransform.visible = action.payload.inputTextField !== "";
    stateTransform.searchResultFiltered = state.searchResult.filter(
        (category: Category) => category.name.includes(action.payload.inputTextField),
    );

    return stateTransform;
}

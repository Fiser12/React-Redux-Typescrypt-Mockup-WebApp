import {SearchActionType} from "../actions/searchActions";
import {ApiActionType} from "../actions/apiActions";

export class SearchState {
    inputTextField: string;
    searchResult: Array<SearchResult>;
    searchResultFiltered: Array<SearchResult>;
    visible: boolean

    public constructor(
        inputTextField: string = "",
        searchResult: Array<SearchResult> = null,
        searchResultFiltered: Array<SearchResult> = null,
        visible: boolean = false
    ) {
        this.inputTextField = inputTextField;
        this.searchResult = searchResult;
        this.searchResultFiltered = searchResultFiltered;
        this.visible = visible;
    }
}

export class SearchResult {
    name: string;
    id: string;
    description: string;

    public constructor(id: string, name: string, description: string) {
        this.name = name;
        this.id = id;
        this.description = description;
    }

}

export const initialState = new SearchState();

export function searchReducer(state: SearchState = initialState, action) {
    switch (action.type) {
        case SearchActionType.SEARCH_BAR_INPUT_TEXT: {
            return handleSearchBarInputText(state, action);
        }
        case ApiActionType.API_SUCCESS + ' ' + SearchActionType.SEARCH_BAR_GET_CATEGORIES: {
            return handleGetCategoriesSuccess(state, action);
        }
        default:
            return state;
    }
};

function handleGetCategoriesSuccess(state: SearchState, action) : SearchState {
    const stateTransform = {...state};

    stateTransform.searchResult = action.payload.data.map(
        category => new SearchResult(category.id, category.name, category.description)
    );

    return stateTransform;
}

function handleSearchBarInputText(state: SearchState, action) : SearchState {
    const stateTransform = {...state};
    stateTransform.inputTextField = action.payload.inputTextField;
    stateTransform.visible = true;
    stateTransform.searchResultFiltered = state.searchResult.filter(
        (category:SearchResult) => category.name.includes(action.payload.inputTextField)
    );

    return stateTransform;
}


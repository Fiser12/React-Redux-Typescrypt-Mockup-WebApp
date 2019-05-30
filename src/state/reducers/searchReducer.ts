import {SearchActionType} from "state/actions/searchActions";
import {ApiActionType} from "state/actions/apiActions";
import {Category} from "state/vm/category.vm";

class SearchState {
    inputTextField: string;
    searchResult: Array<Category>;
    searchResultFiltered: Array<Category>;
    visible: boolean

    public constructor(
        inputTextField: string = "",
        searchResult: Array<Category> = null,
        searchResultFiltered: Array<Category> = null,
        visible: boolean = false
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
        category => new Category(category.id, category.name, category.description)
    );

    return stateTransform;
}

function handleSearchBarDrowpdownClose(state: SearchState, action) : SearchState {
    const stateTransform = {...state};
    stateTransform.visible = false;
    return stateTransform;
}

function handleSearchBoxInputText(state: SearchState, action) : SearchState {
    const stateTransform = {...state};
    stateTransform.inputTextField = action.payload.inputTextField;

    if(action.payload.inputTextField === '' ) {
        stateTransform.visible = false;
    } else {
        stateTransform.visible = true;
    }

    stateTransform.searchResultFiltered = state.searchResult.filter(
        (category:Category) => category.name.includes(action.payload.inputTextField)
    );

    return stateTransform;
}

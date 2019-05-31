import {IAction} from "../actions/actions";
import {ApiActionType} from "../actions/apiActions";
import {ISearchBarChangeInputTextAction, SearchActionType} from "../actions/searchActions";
import {Category} from "../vm/category.vm";

interface ISearchState {
    inputTextField: string;
    searchResult: Category[];
    searchResultFiltered: Category[];
    visible: boolean;
}

export const initialState = {
    inputTextField: "",
    searchResult: [],
    searchResultFiltered: [],
    visible: false,
};

export function searchReducer(state: ISearchState = initialState, action: IAction) {
    switch (action.type) {
        case SearchActionType.SEARCH_BAR_INPUT_TEXT: {
            return handleSearchBoxInputText(state, action as ISearchBarChangeInputTextAction);
        }
        case SearchActionType.SEARCH_BAR_DROPDOWN_CLOSE: {
            return handleSearchBarDrowpdownClose(state);
        }
        case ApiActionType.API_SUCCESS + " " + SearchActionType.SEARCH_BAR_GET_CATEGORIES: {
            return handleGetCategoriesSuccess(state, action);
        }
        default:
            return state;
    }
}

function handleGetCategoriesSuccess(state: ISearchState, action): ISearchState {
    const stateTransform = {...state};

    stateTransform.searchResult = action.payload.data.map(
        (category) => new Category(category.id, category.name, category.description),
    );

    return stateTransform;
}

function handleSearchBarDrowpdownClose(state: ISearchState): ISearchState {
    const stateTransform = {...state};
    stateTransform.visible = false;
    return stateTransform;
}

function handleSearchBoxInputText(state: ISearchState, action: ISearchBarChangeInputTextAction): ISearchState {
    const stateTransform = {...state};
    stateTransform.inputTextField = action.payload.inputTextField;
    stateTransform.visible = action.payload.inputTextField !== "";
    stateTransform.searchResultFiltered = state.searchResult.filter(
        (category: Category) => category.name.includes(action.payload.inputTextField),
    );

    return stateTransform;
}

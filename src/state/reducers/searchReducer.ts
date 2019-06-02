import {ApiActionType, IApiResponseAction} from "../actions/apiActions";
import {CategoriesResponse, ISearchBarChangeInputTextAction, SearchActionType} from "../actions/searchActions";
import {Category} from "../vm/category.vm";

export interface ISearchState {
    inputTextField: string;
    searchResult: Category[];
    searchResultFiltered: Category[];
    visible: boolean;
}

export const initialState = () => {
    return {
        inputTextField: "",
        searchResult: [],
        searchResultFiltered: [],
        visible: false,
    };
};

export function searchReducer(state: ISearchState = initialState(), action) {
    switch (action.type) {
        case SearchActionType.SEARCH_BAR_INPUT_TEXT: {
            return handleSearchBoxInputText(state, (action as ISearchBarChangeInputTextAction).payload.inputTextField);
        }
        case SearchActionType.SEARCH_BAR_DROPDOWN_CLOSE: {
            return handleSearchBarDrowpdownClose(state);
        }
        case ApiActionType.API_SUCCESS + " " + SearchActionType.SEARCH_BAR_GET_CATEGORIES: {
            return handleGetCategoriesSuccess(state, (action as IApiResponseAction<CategoriesResponse>).payload);
        }
        default:
            return state;
    }
}

function handleGetCategoriesSuccess(state: ISearchState, response: CategoriesResponse): ISearchState {
    const stateTransform = {...state};

    stateTransform.searchResult = response.map(
        (category) => new Category(category.id, category.name, category.description),
    );

    return stateTransform;
}

function handleSearchBarDrowpdownClose(state: ISearchState): ISearchState {
    const stateTransform = {...state};
    stateTransform.visible = false;
    return stateTransform;
}

function handleSearchBoxInputText(state: ISearchState, inputTextField: string): ISearchState {
    const stateTransform = {...state};
    stateTransform.inputTextField = inputTextField;
    stateTransform.visible = inputTextField !== "";
    stateTransform.searchResultFiltered = state.searchResult.filter(
        (category: Category) => category.name.includes(inputTextField),
    );

    return stateTransform;
}

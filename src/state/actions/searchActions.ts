import {routesLinks} from "core";
import {Category} from "../vm/category.vm";
import {apiRequest, Method} from "./apiActions";

export enum SearchActionType {
    SEARCH_BAR_INPUT_TEXT = "SEARCH_BAR_INPUT_TEXT",
    SEARCH_BAR_GET_CATEGORIES = "SEARCH_BAR_GET_CATEGORIES",
    SEARCH_BAR_RESPONSE_RESULT = "SEARCH_BAR_RESPONSE_RESULT",
    SEARCH_BAR_DROPDOWN_CLOSE = "SEARCH_BAR_DROPDOWN_CLOSE",
}

export const searchBarResponseResult = (searchResults: [Category]) => ({
    payload: {
        searchResults,
    },
    type: SearchActionType.SEARCH_BAR_RESPONSE_RESULT,
});

export const searchBarDropdownClose = () => ({
    payload: {},
    type: SearchActionType.SEARCH_BAR_DROPDOWN_CLOSE,

});

export const getCategoriesByApi = () => {
    return apiRequest(
        {},
        Method.GET,
        routesLinks.categoriesApi,
        SearchActionType.SEARCH_BAR_GET_CATEGORIES,
    );
};

export const searchBarChangeInputText = (inputTextField: string) => {
    return ({
        payload: {
            inputTextField,
        },
        type: SearchActionType.SEARCH_BAR_INPUT_TEXT,
    });
};

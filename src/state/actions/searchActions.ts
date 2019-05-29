import {SearchResult} from "../reducers/searchReducer";
import {apiRequest, Method} from "./apiActions";
import {routesLinks} from "../../core";

export enum SearchActionType {
    SEARCH_BAR_INPUT_TEXT = "SEARCH_BAR_INPUT_TEXT",
    SEARCH_BAR_GET_CATEGORIES = "SEARCH_BAR_GET_CATEGORIES",
    SEARCH_BAR_RESPONSE_RESULT = "SEARCH_BAR_RESPONSE_RESULT",
    SEARCH_BAR_RESPONSE_CLOSE = "SEARCH_BAR_RESPONSE_CLOSE"
}

export const searchBarResponseResult = (searchResults: [SearchResult]) => ({
    type: SearchActionType.SEARCH_BAR_RESPONSE_RESULT,
    payload: {
        searchResults: searchResults
    },

});

export const searchBarResponseClose = () => ({
    type: SearchActionType.SEARCH_BAR_RESPONSE_CLOSE,
    payload: {},

});

export const onLoadGetCategories = () => {
    return apiRequest(
        {},
        Method.GET,
        routesLinks.categoriesApi,
        SearchActionType.SEARCH_BAR_GET_CATEGORIES
    );
};

export const searchBarChangeInputText = (inputTextField: string) => {
    return ({
        type: SearchActionType.SEARCH_BAR_INPUT_TEXT,
        payload: {
            inputTextField: inputTextField
        },
    });
};


import {routesLinks} from "core";
import {IAction} from "./actions";
import {apiRequest, IApiRequestAction, Method} from "./apiActions";

export enum SearchActionType {
    SEARCH_BAR_INPUT_TEXT = "SEARCH_BAR_INPUT_TEXT",
    SEARCH_BAR_GET_CATEGORIES = "SEARCH_BAR_GET_CATEGORIES",
    SEARCH_BAR_DROPDOWN_CLOSE = "SEARCH_BAR_DROPDOWN_CLOSE",
}

export interface ISearchBarDropdownCloseAction extends IAction {
    payload: {};
    type: SearchActionType.SEARCH_BAR_DROPDOWN_CLOSE;
}

export interface ISearchBarChangeInputTextAction extends IAction {
    payload: {
        inputTextField: string,
    };
    type: SearchActionType.SEARCH_BAR_INPUT_TEXT;
}

export const searchBarDropdownClose = (): ISearchBarDropdownCloseAction => ({
    payload: {},
    type: SearchActionType.SEARCH_BAR_DROPDOWN_CLOSE,
});

export const getCategoriesByApi = (): IApiRequestAction => {
    return apiRequest(
        {},
        Method.GET,
        routesLinks.categoriesApi,
        SearchActionType.SEARCH_BAR_GET_CATEGORIES,
    );
};

export const searchBarChangeInputText = (inputTextField: string): ISearchBarChangeInputTextAction => {
    return ({
        payload: {
            inputTextField,
        },
        type: SearchActionType.SEARCH_BAR_INPUT_TEXT,
    });
};


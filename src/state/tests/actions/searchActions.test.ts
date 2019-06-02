import {ApiActionType, IApiRequestAction, Method} from "../../actions/apiActions";
import {
    CategoriesResponse,
    getCategoriesByApi,
    ISearchBarChangeInputTextAction, ISearchBarDropdownCloseAction,
    SearchActionType,
    searchBarChangeInputText, searchBarDropdownClose,
} from "../../actions/searchActions";

describe("actions::searchActions", () => {
    it("searchBarDropdownClose", () => {
        const expectedAction: ISearchBarDropdownCloseAction = {
            payload: {},
            type: SearchActionType.SEARCH_BAR_DROPDOWN_CLOSE,
        };
        expect(searchBarDropdownClose()).toEqual(expectedAction);
    });

    it("getCategoriesByApi", () => {
        const expectedAction: IApiRequestAction<CategoriesResponse> = {
            meta: {
                feature: SearchActionType.SEARCH_BAR_GET_CATEGORIES,
                method: Method.GET,
                url: "/categories",
            },
            payload: {},
            type: `${ApiActionType.API_REQUEST} ${SearchActionType.SEARCH_BAR_GET_CATEGORIES}`,
        };
        expect(getCategoriesByApi()).toEqual(expectedAction);
    });

    it("searchBarChangeInputText", () => {
        const text = "C";
        const expectedAction: ISearchBarChangeInputTextAction = {
            payload: {
                inputTextField: text,
            },
            type: SearchActionType.SEARCH_BAR_INPUT_TEXT,
        };
        expect(searchBarChangeInputText(text)).toEqual(expectedAction);
    });
});


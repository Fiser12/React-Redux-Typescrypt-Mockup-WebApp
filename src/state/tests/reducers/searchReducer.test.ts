import {apiSuccess} from "../../actions/apiActions";
import {SearchActionType, searchBarChangeInputText, searchBarDropdownClose} from "../../actions/searchActions";
import {initialState, searchReducer} from "../../reducers/searchReducer";
import {loadedSearchReducerState} from "../mocks.state";
import {categoryMocked} from "../mocks.vm";

describe("searchReducer", () => {
    it("API_SUCCESS SEARCH_BAR_GET_CATEGORIES", () => {
        const action = apiSuccess([
                {
                    description: "Description1",
                    id: 1,
                    name: "Category1",
                },
                {
                    description: "Description2",
                    id: 2,
                    name: "Category2",
                },
            ], SearchActionType.SEARCH_BAR_GET_CATEGORIES,
        );

        const previousState = initialState();
        const state = searchReducer(
            previousState,
            action,
        );
        expect(previousState.searchResult).toEqual([]);
        expect(state.searchResult).toEqual([categoryMocked(1), categoryMocked(2)]);
    });

    it("SEARCH_BAR_DROPDOWN_CLOSE", () => {
        const action = searchBarDropdownClose();
        const previousState = initialState();
        previousState.visible = true;

        const state = searchReducer(
            previousState,
            action,
        );

        expect(previousState.visible).toEqual(true);
        expect(state.visible).toEqual(false);
    });

    it("SEARCH_BAR_INPUT_TEXT", () => {
        const action = searchBarChangeInputText("2");
        const previousState = loadedSearchReducerState();

        const state = searchReducer(
            previousState,
            action,
        );

        expect(previousState.inputTextField).toEqual("");
        expect(previousState.searchResult).toEqual(loadedSearchReducerState().searchResult);
        expect(previousState.searchResultFiltered).toEqual([]);
        expect(previousState.visible).toEqual(false);
        expect(state.inputTextField).toEqual("2");
        expect(state.searchResult).toEqual(loadedSearchReducerState().searchResult);
        expect(state.searchResultFiltered).toEqual([categoryMocked(2)]);
        expect(state.visible).toEqual(true);

    });
});


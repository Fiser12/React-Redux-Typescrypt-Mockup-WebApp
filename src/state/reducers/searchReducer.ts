import {SearchActionsType} from "../actions/searchActions";

export class SearchState  {
    inputTextField : string;
    searchResult : [SearchResult];
    visible: boolean

    public constructor(inputTextField:string = "", searchResult:[SearchResult] = null, visible:boolean = false)
    {
        this.inputTextField = inputTextField;
        this.searchResult = searchResult;
        this.visible = visible;
    }
}

export class SearchResult {
    inputTextField : string;
}

export const initialState = new SearchState();

export function searchReducer(state:SearchState = initialState, action) {
    switch (action.type) {
        case SearchActionsType.SEARCH_BAR_INPUT_TEXT:
        {
            const stateTransform = { ...state };
            stateTransform.inputTextField = action.payload.inputTextField;
            return stateTransform;
        }
        default:
            return state;
    }
};

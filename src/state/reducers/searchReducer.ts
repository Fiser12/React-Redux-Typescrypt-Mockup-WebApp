import {SearchActionType} from "../actions/searchActions";
import {ApiActionType} from "../actions/apiActions";

export class SearchState {
    inputTextField: string;
    searchResult: [SearchResult];
    visible: boolean

    public constructor(inputTextField: string = "", searchResult: [SearchResult] = null, visible: boolean = false) {
        this.inputTextField = inputTextField;
        this.searchResult = searchResult;
        this.visible = visible;
    }
}

export class SearchResult {
    name: string;
    id: string;
    description: string;

    public constructor(id:string, name:string, description:string) {
        this.name = name;
        this.id = id;
        this.description = description;
    }

}

export const initialState = new SearchState();

export function searchReducer(state: SearchState = initialState, action) {
    switch (action.type) {
        case SearchActionType.SEARCH_BAR_INPUT_TEXT: {
            const stateTransform = {...state};
            stateTransform.inputTextField = action.payload.inputTextField;
            return stateTransform;
        }
        case ApiActionType.API_SUCCESS + ' ' + SearchActionType.SEARCH_BAR_SUBMIT_BUTTON: {
            const stateTransform = {...state};

            stateTransform.searchResult = action.payload.data.filter(function (category) {
                return category.name.includes(stateTransform.inputTextField);
            }).map(function (category) {
                return new SearchResult(category.id, category.name, category.description)
            });
            stateTransform.visible = true;
            return stateTransform;
        }
        default:
            return state;
    }
};

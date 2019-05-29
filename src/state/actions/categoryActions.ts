import {SearchResult} from "../reducers/searchReducer";
import {apiRequest, Method} from "./apiActions";
import {routesLinks} from "../../core";

export enum CategoryActionType {
    CATEGORY_GET_EVENTS = "CATEGORY_GET_EVENTS",
}

export const onLoadGetEvents = (categoryId:string) => {
    return apiRequest(
        {},
        Method.GET,
        routesLinks.categoriesApi,
        CategoryActionType.CATEGORY_GET_EVENTS
    );
};
import {apiRequest, Method} from "./apiActions";
import {routesLinks} from "core";

export enum CategoryActionType {
    CATEGORY_GET_EVENTS = "CATEGORY_GET_EVENTS",
}

export const getEventsByApi = (categoryId:string) => {
    return apiRequest(
        {},
        Method.GET,
        routesLinks.eventsByCategoryApi(categoryId),
        CategoryActionType.CATEGORY_GET_EVENTS
    );
};
import {routesLinks} from "core";
import {apiRequest, IApiRequestAction, Method} from "./apiActions";

export enum CategoryActionType {
    CATEGORY_GET_EVENTS = "CATEGORY_GET_EVENTS",
}

export const getEventsByApi = (categoryId: string): IApiRequestAction => {
    return apiRequest(
        {},
        Method.GET,
        routesLinks.eventsByCategoryApi(categoryId),
        CategoryActionType.CATEGORY_GET_EVENTS,
    );
};

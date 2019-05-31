import {Action} from "redux";

export enum ApiActionType {
    API_REQUEST = "API_REQUEST",
    API_SUCCESS = "API_SUCCESS",
    API_ERROR = "API_ERROR",
}

export enum Method {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

export interface IApiRequestAction extends Action {
    meta: {
        method: Method;
        url: string;
        feature: string;
    };
    payload: object;
    type: string;
}

export interface IApiResponseAction extends Action {
    meta: string;
    payload: object;
    type: string;
}

export interface IApiErrorAction extends Action {
    meta: string;
    payload: object;
    type: string;
}

export const apiRequest = (body: object, method: Method, url: string, feature: string): IApiRequestAction => ({
    meta: {method, url, feature},
    payload: body,
    type: `${ApiActionType.API_REQUEST} ${feature}`,
});

export const apiSuccess = (response: object, feature: string): IApiResponseAction => ({
    meta: feature,
    payload: response,
    type: `${ApiActionType.API_SUCCESS} ${feature}`,
});

export const apiError = (error: object, feature: string): IApiErrorAction => ({
    meta: feature,
    payload: error,
    type: `${ApiActionType.API_ERROR} ${feature}`,
});

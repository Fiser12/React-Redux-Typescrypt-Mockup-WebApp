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

export const apiRequest = (body, method: Method, url, feature) => ({
    meta: {method, url, feature},
    payload: body,
    type: `${ApiActionType.API_REQUEST} ${feature}`,
});

export const apiSuccess = (response, feature) => ({
    meta: feature,
    payload: response,
    type: `${ApiActionType.API_SUCCESS} ${feature}`,
});

export const apiError = (error, feature) => ({
    meta: feature,
    payload: error,
    type: `${ApiActionType.API_ERROR} ${feature}`,
});

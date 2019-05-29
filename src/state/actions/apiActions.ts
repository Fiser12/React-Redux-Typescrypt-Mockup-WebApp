export enum ApiActionType {
    API_REQUEST = 'API_REQUEST',
    API_SUCCESS = 'API_SUCCESS',
    API_ERROR   = 'API_ERROR',
}

export enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

// action creators
export const apiRequest = (body, method:Method, url, feature) => ({
    type: `${ApiActionType.API_REQUEST} ${feature}`,
    payload: body,
    meta: {method, url, feature}
});

export const apiSuccess = (response, feature) => ({
    type: `${ApiActionType.API_SUCCESS} ${feature}`,
    payload: response,
    meta: {feature}
});

export const apiError = (error, feature) => ({
    type: `${ApiActionType.API_ERROR} ${feature}`,
    payload: error,
    meta: {feature}
});
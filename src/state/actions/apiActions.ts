export enum ApiTypeAction {
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
    type: `${ApiTypeAction.API_REQUEST} ${feature}`,
    payload: body,
    meta: {method, url, feature}
});

export const apiSuccess = (response, feature) => ({
    type: `${ApiTypeAction.API_SUCCESS} ${feature}`,
    payload: response,
    meta: {feature}
});

export const apiError = (error, feature) => ({
    type: `${ApiTypeAction.API_ERROR} ${feature}`,
    payload: error,
    meta: {feature}
});
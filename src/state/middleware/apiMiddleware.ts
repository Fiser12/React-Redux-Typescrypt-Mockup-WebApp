import {apiError, apiSuccess, ApiActionType, Method} from 'state/actions/apiActions';
import {Request} from 'core';

export const apiMiddleware = (store) => (next) => (action) => {
    next(action);

    if (action.type.includes(ApiActionType.API_REQUEST)) {
        const {url, method, feature} = action.meta;
        let request = null;

        if (method === Method.POST) {
            request = Request().post(url, action.payload);
        } else if (method === Method.PUT) {
            request = Request().put(url, action.payload);
        } else if (method === Method.DELETE) {
            request = Request().delete(url);
        } else if (method === Method.GET) {
            request = Request().get(url);
        } else {
            throw new Error('Invalid method ' + method + ' for the API Middleware');
        }

        request.then(response => store.dispatch(apiSuccess(response, feature))
        ).catch(error => store.dispatch(apiError(error, feature)))
    }
};

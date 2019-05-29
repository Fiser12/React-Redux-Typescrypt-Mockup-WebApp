import {apiError, apiSuccess, ApiTypeAction, Method} from '../actions/apiActions';
import {Request} from '../../core';

export const apiMiddleware = (store) => (next) => (action) => {
    next(action);

    if (action.type.includes(ApiTypeAction.API_REQUEST)) {
        const {url, method, feature} = action.meta;

        let request = null;
        let config = null;


        if (method === Method.POST) {
            request = Request().post(url, action.payload, config);
        } else if (method === Method.PUT) {
            request = Request().put(url, action.payload, config);
        } else if (method === Method.DELETE) {
            request = Request().delete(url, config);
        } else if (method === Method.GET) {
            request = Request().get(url, config);
        } else {
            throw new Error('Invalid method ' + method + ' for the API Middleware');
        }

        request.then(response => store.dispatch(apiSuccess(response, feature))
        ).catch(error => store.dispatch(apiError(error, feature)))
    }
};
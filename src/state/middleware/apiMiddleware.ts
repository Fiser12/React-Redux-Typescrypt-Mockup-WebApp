import {AxiosError, AxiosResponse} from "axios";
import {Request} from "core";
import {Dispatch, Middleware, Store} from "redux";
import {ApiActionType, apiError, apiSuccess, Method} from "../actions/apiActions";

export const apiMiddleware: Middleware = (store: Store) => (next: Dispatch) => (action) => {
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
            throw new Error("Invalid method " + method + " for the API Middleware");
        }

        request.then((response: AxiosResponse) => store.dispatch(apiSuccess(response, feature)));
        request.catch((error: AxiosError) => store.dispatch(apiError(error, feature)));
    }
};

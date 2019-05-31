import {AxiosError, AxiosResponse} from "axios";
import {Request} from "core";
import {Action, Dispatch, Middleware, Store} from "redux";
import {ApiActionType, apiError, apiSuccess, IApiRequestAction, Method} from "../actions/apiActions";

export const apiMiddleware: Middleware = (store: Store) => (next: Dispatch) => (action: Action) => {
    next(action);

    if (action.type.includes(ApiActionType.API_REQUEST)) {
        const apiRequestAction: IApiRequestAction = action as IApiRequestAction;
        const {url, method, feature} = apiRequestAction.meta;
        let request = null;

        if (method === Method.POST) {
            request = Request().post(url, apiRequestAction.payload);
        } else if (method === Method.PUT) {
            request = Request().put(url, apiRequestAction.payload);
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

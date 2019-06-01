import {connectRouter, routerMiddleware, RouterState} from "connected-react-router";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {apiMiddleware} from "./middleware/apiMiddleware";
import {apiResponsesMiddleware} from "./middleware/apiResponsesMiddleware";
import {accountReducer, IAccountState} from "./reducers/accountReducer";
import {categoryReducer, ICategoryState} from "./reducers/categoryReducer";
import {eventReducer, IEventState} from "./reducers/eventReducer";
import {ISearchState, searchReducer} from "./reducers/searchReducer";

declare global {
    // This line is necesary for work with REDUX_DEVTOOLS_EXTENSION
    // tslint:disable-next-line:interface-name
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any;
    }
}

export interface IState {
    account: IAccountState;
    category: ICategoryState;
    event: IEventState;
    router: RouterState;
    search: ISearchState;
}

export default function configureStore(history) {
    const rootReducer = combineReducers(
        {
            account: accountReducer,
            category: categoryReducer,
            event: eventReducer,
            router: connectRouter(history),
            search: searchReducer,
        },
    );

    type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> };

    const state: DeepPartial<IState> = {};

    const coreMiddleware = [
        apiMiddleware,
        apiResponsesMiddleware,
        routerMiddleware(history),
    ];

    const store = createStore(
        rootReducer, // root reducer with router state
        state,
        compose(applyMiddleware(...coreMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
        ),
    );

    return store;
}

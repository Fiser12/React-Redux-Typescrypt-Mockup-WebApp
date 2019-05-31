import {connectRouter, routerMiddleware} from "connected-react-router";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {apiMiddleware} from "./middleware/apiMiddleware";
import {apiResponsesMiddleware} from "./middleware/apiResponsesMiddleware";
import {accountReducer} from "./reducers/accountReducer";
import {categoryReducer} from "./reducers/categoryReducer";
import {eventReducer} from "./reducers/eventReducer";
import {searchReducer} from "./reducers/searchReducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any;
    }
}

export default function configureStore(history) {
    const rootReducer = combineReducers(
        {
            accountReducer,
            categoryReducer,
            eventReducer,
            router: connectRouter(history),
            searchReducer,
        },
    );


    const coreMiddleware = [
        apiMiddleware,
        apiResponsesMiddleware,
        routerMiddleware(history),
    ];

    const store = createStore(
        rootReducer, // root reducer with router state
        compose(applyMiddleware(...coreMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
        ),
    );

    return store;
}

import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter} from 'connected-react-router'
import {routerMiddleware} from 'connected-react-router'
import {apiMiddleware} from "./middleware/apiMiddleware";
import {routerDispatcherMiddleware} from "./middleware/routerMiddleware";
import {searchReducer} from "./reducers/searchReducer";

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

export default function configureStore(history) {
    const rootReducer = combineReducers({
        router: connectRouter(history),
        searchReducer: searchReducer
    });


    const coreMiddleware = [
        routerMiddleware(history),
        apiMiddleware
    ];

    const store = createStore(
        rootReducer, // root reducer with router state
        compose(applyMiddleware(...coreMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
    )

    return store
}

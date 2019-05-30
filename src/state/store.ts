import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter} from 'connected-react-router'
import {routerMiddleware} from 'connected-react-router'
import {apiMiddleware} from "./middleware/apiMiddleware";
import {searchReducer} from "./reducers/searchReducer";
import {categoryReducer} from "./reducers/categoryReducer";
import {eventReducer} from "./reducers/eventReducer";
import {accountReducer} from "./reducers/accountReducer";
import {apiResponsesMiddleware} from "./middleware/apiResponsesMiddleware";

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

export default function configureStore(history) {
    const rootReducer = combineReducers({
        router: connectRouter(history),
        searchReducer: searchReducer,
        categoryReducer: categoryReducer,
        eventReducer: eventReducer,
        accountReducer: accountReducer
    });


    const coreMiddleware = [
        routerMiddleware(history),
        apiMiddleware,
        apiResponsesMiddleware
    ];

    const store = createStore(
        rootReducer, // root reducer with router state
        compose(applyMiddleware(...coreMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
    )

    return store
}

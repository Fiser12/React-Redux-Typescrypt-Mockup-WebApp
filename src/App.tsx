import {Route, Router, Switch} from "react-router-dom";
import {routerSwitchRoutes} from "./core";
import {HomePage} from "./pages";
import * as React from "react";
import {Provider, ReactReduxContext} from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import configureStore from './state/store'
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();
const store = configureStore(history);

export const App = () => {
    return (
        <Provider store={store} context={ReactReduxContext}>
            <ConnectedRouter history={history} context={ReactReduxContext}>
                <Router history={history}>
                    <Switch>
                        <Route exact path={routerSwitchRoutes.home} component={HomePage}/>
                    </Switch>
                </Router>
            </ConnectedRouter>
        </Provider>
    )
}

import {Route, Router, Switch} from "react-router-dom";
import * as React from "react";
import {Provider, ReactReduxContext} from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import configureStore from './state/store'
import {createBrowserHistory} from "history";
import {HeaderBar, FooterBar} from "./common/organisms";
import {CategoryPage} from "./pages/category/category.page";
import {EventPage} from "./pages/event/event.page"; 
import {HomePage} from "./pages"; 
import {routerSwitchRoutes} from "./core"; 
import {AccountPage} from "./pages/account/account.page"; 

export const history = createBrowserHistory();
const store = configureStore(history);

export const App = () => {
    return (
        <Provider store={store} context={ReactReduxContext}>
            <ConnectedRouter history={history} context={ReactReduxContext}>
                <HeaderBar/>
                <Router history={history}>
                    <Switch>
                        <Route exact path={routerSwitchRoutes.home} component={HomePage}/>
                        <Route exact path={routerSwitchRoutes.category} component={CategoryPage}/>
                        <Route exact path={routerSwitchRoutes.event} component={EventPage}/>
                        <Route exact path={routerSwitchRoutes.account} component={AccountPage}/> 
                    </Switch>
                </Router>
                <FooterBar/>
            </ConnectedRouter>
        </Provider>
    )
}

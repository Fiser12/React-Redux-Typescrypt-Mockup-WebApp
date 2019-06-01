import {ConnectedRouter} from "connected-react-router";
import {createBrowserHistory} from "history";
import * as React from "react";
import {Provider, ReactReduxContext} from "react-redux";
import {Route, Router, Switch} from "react-router-dom";
import {FooterBar} from "./common/organisms/footer-bar/footer-bar.organism";
import {HeaderBar} from "./common/organisms/header-bar/header-bar.organism";
import {routerSwitchRoutes} from "./core";
import {HomePage} from "./pages";
import {AccountPage} from "./pages/account/account.page";
import {CategoryPage} from "./pages/category/category.page";
import {EventPage} from "./pages/event/event.page";
import {NotFoundPage} from "./pages/not-found/not-found.page";
import configureStore from "./state/store";

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
                        <Route component={NotFoundPage}/>
                    </Switch>
                </Router>
                <FooterBar/>
            </ConnectedRouter>
        </Provider>
    );
};

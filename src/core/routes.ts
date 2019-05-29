import {generatePath} from "react-router";
import {apiRequest} from "../state/actions/apiActions";

interface BaseRoutes {
    home: string;
    initiatives: string;
    initiativesListApi: string;
    initiativeExecuteApi: string;
    usersLoginApi: string;
    usersLogoutApi: string;
}

const appBaseRoutes: BaseRoutes = {
    home: '/',
    initiatives: '/initiative-executions',
    initiativesListApi: '/api/groups',
    initiativeExecuteApi: '/initiative/execute',
    usersLoginApi: '/users/home',
    usersLogoutApi: '/users/logout',
}

export const routerSwitchRoutes: BaseRoutes = {
    ...appBaseRoutes,
    initiativeExecuteApi: `/${appBaseRoutes.initiativeExecuteApi}/:id`,
}

// https://stackoverflow.com/questions/48215950/exclude-property-from-type
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type RoutesLinks = Omit<BaseRoutes, 'initiativeExecuteApi'> & { initiativeExecuteApi: (id) => string };

export const routesLinks: RoutesLinks = {
    ...appBaseRoutes,
    initiativeExecuteApi: (id) => generatePath(routerSwitchRoutes.initiativeExecuteApi, {id})
}

export const RoutesHandlerActionsOnLoad = [
    {
        route: routerSwitchRoutes.initiatives,
        actionsToDispatch: [
            {
                useQueryParams: false,
                useUrlParams: false,
                action: ""
            }
        ]
    },
];



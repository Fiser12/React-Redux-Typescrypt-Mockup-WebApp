import {generatePath} from "react-router";
import {apiRequest} from "../state/actions/apiActions";

interface BaseRoutes {
    home: string;
    category: string;
    categoriesApi: string;
}

const appBaseRoutes: BaseRoutes = {
    home: '/',
    categoriesApi: '/categories',
    category: '/category',
}

export const routerSwitchRoutes: BaseRoutes = {
    ...appBaseRoutes,
    category: `/${appBaseRoutes.category}/:id`,
}

// https://stackoverflow.com/questions/48215950/exclude-property-from-type
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type RoutesLinks = Omit<BaseRoutes, 'category'> & { category: (id) => string };

export const routesLinks: RoutesLinks = {
    ...appBaseRoutes,
    category: (id) => generatePath(routerSwitchRoutes.category, {id})
}

export const RoutesHandlerActionsOnLoad = [
];



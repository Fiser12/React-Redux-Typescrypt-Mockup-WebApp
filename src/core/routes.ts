import {generatePath} from "react-router";

interface BaseRoutes {
    home: string;
    category: string;
    categoriesApi: string;
    categoryEventsApi: string;
}

export const routerSwitchRoutes: BaseRoutes = {
    home: '/',
    categoriesApi: '/categories',
    category: '/category/:id',
    categoryEventsApi: '/category/:id/events',
}

// https://stackoverflow.com/questions/48215950/exclude-property-from-type
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type RoutesLinks = Omit<BaseRoutes, 'category' | 'categoryEventsApi'> & {
    category: (id) => string,
    categoryEventsApi: (categoryId: string) => string
};

export const routesLinks: RoutesLinks = {
    ...routerSwitchRoutes,
    category: (id) => generatePath(routerSwitchRoutes.category, {id}),
    categoryEventsApi: (id) => generatePath(routerSwitchRoutes.categoryEventsApi, {id})
}

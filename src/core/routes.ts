import {generatePath} from "react-router";

interface BaseRoutes {
    home: string;
    category: string;
    event: string;
    account: string;
    categoriesApi: string;
    eventsByCategoryApi: string;
    ticketsApi: string;
    eventsByIdApi: string;
    ticketsBySellerApi: string;
}

export const routerSwitchRoutes: BaseRoutes = {
    home: '/',
    category: '/category/:id',
    event: '/event/:id',
    account: '/account',
    categoriesApi: '/categories',
    eventsByCategoryApi: '/categories/:id/events',
    ticketsApi: '/tickets?eventId=:id&status=:status',
    eventsByIdApi: '/events?id=:eventId',
    ticketsBySellerApi: '/tickets?sellerId=:sellerId'
}

// https://stackoverflow.com/questions/48215950/exclude-property-from-type
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type RoutesLinks = Omit<BaseRoutes,
    'category' |
    'event' |
    'ticketsApi' |
    'eventsByCategoryApi' |
    'eventsByIdApi' |
    'ticketsBySellerApi'
    > & {
    category: (id:string) => string,
    event: (id:string) => string,
    ticketsApi: (id:string, status:boolean) => string,
    eventsByCategoryApi: (categoryId: string) => string,
    eventsByIdApi: (eventId: string) => string,
    ticketsBySellerApi: (sellerId:string) => string
};

export const routesLinks: RoutesLinks = {
    ...routerSwitchRoutes,
    category: (id:string) => generatePath(routerSwitchRoutes.category, {id}),
    event: (id:string) => generatePath(routerSwitchRoutes.event, {id}),
    ticketsApi: (id:string, status:boolean) => generatePath(routerSwitchRoutes.ticketsApi, {id, status}),
    eventsByCategoryApi: (id:string) => generatePath(routerSwitchRoutes.eventsByCategoryApi, {id}),
    eventsByIdApi: (eventId:string) => generatePath(routerSwitchRoutes.eventsByIdApi, {eventId}),
    ticketsBySellerApi: (sellerId:string) => generatePath(routerSwitchRoutes.ticketsBySellerApi, {sellerId})
};

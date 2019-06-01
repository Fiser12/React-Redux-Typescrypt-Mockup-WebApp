import {generatePath} from "react-router";

interface IBaseRoutes {
    account: string;
    categoriesApi: string;
    category: string;
    event: string;
    eventsByCategoryApi: string;
    eventsByIdApi: string;
    home: string;
    ticketsApi: string;
    ticketsBySellerApi: string;
}

export const routerSwitchRoutes: IBaseRoutes = {
    account: "/account",
    categoriesApi: "/categories",
    category: "/category/:id",
    event: "/event/:id",
    eventsByCategoryApi: "/categories/:id/events",
    eventsByIdApi: "/events?id=:eventId",
    home: "/",
    ticketsApi: "/tickets?eventId=:id&status=:status",
    ticketsBySellerApi: "/tickets?sellerId=:sellerId",
};

// https://stackoverflow.com/questions/48215950/exclude-property-from-type
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type RoutesLinks = Omit<IBaseRoutes,
    "category" |
    "event" |
    "ticketsApi" |
    "eventsByCategoryApi" |
    "eventsByIdApi" |
    "ticketsBySellerApi"> & {
    category: (id: number) => string,
    event: (id: number) => string,
    ticketsApi: (id: string, status: boolean) => string,
    eventsByCategoryApi: (categoryId: string) => string,
    eventsByIdApi: (eventId: string) => string,
    ticketsBySellerApi: (sellerId: string) => string,
};

export const routesLinks: RoutesLinks = {
    ...routerSwitchRoutes,
    category: (id: number) => generatePath(routerSwitchRoutes.category, {id}),
    event: (id: number) => generatePath(routerSwitchRoutes.event, {id}),
    eventsByCategoryApi: (id: string) => generatePath(routerSwitchRoutes.eventsByCategoryApi, {id}),
    eventsByIdApi: (eventId: string) => generatePath(routerSwitchRoutes.eventsByIdApi, {eventId}),
    ticketsApi: (id: string, status: boolean) => generatePath(routerSwitchRoutes.ticketsApi, {id, status}),
    ticketsBySellerApi: (sellerId: string) => generatePath(routerSwitchRoutes.ticketsBySellerApi, {sellerId}),
};

import {generatePath} from "react-router";
import {apiRequest} from "../state/actions/apiActions";

interface BaseRoutes {
    home: string;
}

const appBaseRoutes: BaseRoutes = {
    home: '/',

}

export const routerSwitchRoutes: BaseRoutes = {
    ...appBaseRoutes,
}

import {ApiActionType, IApiRequestAction, Method} from "../../actions/apiActions";
import {CategoryActionType, getEventsByApi} from "../../actions/categoryActions";

describe("actions::categoryActions", () => {
    it("getEventsByApi", () => {
        const id = "1";
        const expectedAction: IApiRequestAction = {
            meta: {
                feature: CategoryActionType.CATEGORY_GET_EVENTS,
                method: Method.GET,
                url: "/categories/" + id + "/events",
            },
            payload: {},
            type: `${ApiActionType.API_REQUEST} ${CategoryActionType.CATEGORY_GET_EVENTS}`,
        };
        expect(getEventsByApi(id)).toEqual(expectedAction);
    });
});


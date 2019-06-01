import {ApiActionType, IApiRequestAction, Method} from "../../actions/apiActions";
import {
    EventActionType,
    getActiveTicketsByApi,
    getEventById,
    ISelectEventAction,
    selectEvent,
} from "../../actions/eventActions";
import {Event} from "../../vm/event.vm";
import {eventMocked} from "../mocks.vm";

describe("actions::eventActions", () => {
    it("selectEvent", () => {
        const id = "1";
        const event = eventMocked(id);
        const expectedAction: ISelectEventAction = {
            payload: {
                event,
            },
            type: EventActionType.EVENT_SELECT,
        };
        expect(selectEvent(event)).toEqual(expectedAction);
    });

    it("getActiveTicketsByApi", () => {
        const id = "1";
        const expectedAction: IApiRequestAction = {
            meta: {
                feature: EventActionType.EVENT_GET_TICKETS,
                method: Method.GET,
                url: "/tickets?eventId=" + id + "&status=true",
            },
            payload: {},
            type: `${ApiActionType.API_REQUEST} ${EventActionType.EVENT_GET_TICKETS}`,
        };
        expect(getActiveTicketsByApi(id)).toEqual(expectedAction);
    });

    it("getEventById", () => {
        const id = "1";
        const expectedAction: IApiRequestAction = {
            meta: {
                feature: EventActionType.EVENT_GET_BY_ID,
                method: Method.GET,
                url: "/events?id=" + id,
            },
            payload: {},
            type: `${ApiActionType.API_REQUEST} ${EventActionType.EVENT_GET_BY_ID}`,
        };
        expect(getEventById(id)).toEqual(expectedAction);
    });
});


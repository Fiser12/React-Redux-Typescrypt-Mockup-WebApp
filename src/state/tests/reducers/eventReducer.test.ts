import {apiRequest, apiSuccess, Method} from "../../actions/apiActions";
import {EventActionType, selectEvent} from "../../actions/eventActions";
import {eventReducer, initialState} from "../../reducers/eventReducer";
import {loadedEventReducerState} from "../mocks.state";
import {eventMocked, ticketMocked} from "../mocks.vm";

describe("eventReducer", () => {
    it("API_REQUEST EVENT_GET_TICKETS", () => {
        const action = apiRequest({}, Method.GET, "", EventActionType.EVENT_GET_TICKETS);
        const previousState = loadedEventReducerState();
        const state = eventReducer(
            previousState,
            action,
        );

        expect(previousState.tickets).toEqual(loadedEventReducerState().tickets);
        expect(previousState.event).toEqual(loadedEventReducerState().event);
        expect(state.tickets).toEqual([]);
        expect(state.event).toEqual(loadedEventReducerState().event);
    });

    it("API_SUCCESS EVENT_GET_TICKETS", () => {
        const action = apiSuccess({
            data: [
                {
                    eventId: 1,
                    id: 1,
                    quantity: 1,
                    sellerId: 1,
                    status: true,
                    unit_price: 1,
                },
            ],
        }, EventActionType.EVENT_GET_TICKETS);
        const state = eventReducer(
            initialState,
            action,
        );
        expect(initialState.tickets).toEqual([]);
        expect(initialState.event).toEqual(null);
        expect(state.tickets).toEqual([ticketMocked(1, 1, true)]);
        expect(state.event).toEqual(null);
    });

    it("API_SUCCESS EVENT_GET_BY_ID", () => {
        const action = apiSuccess({
            data: [
                {
                    categoryId: 1,
                    city: "city",
                    country: "country",
                    date: new Date("2019-06-01T17:18:27.089Z"),
                    description: "description1",
                    id: 1,
                    imageUrl: "imageUrl",
                    thumbnailImageUrl: "thumbnailImageUrl",
                    title: "title1",
                    venueName: "venueName",
                },
            ],
        }, EventActionType.EVENT_GET_BY_ID);
        const state = eventReducer(
            initialState,
            action,
        );

        expect(initialState.event).toEqual(null);
        expect(state.event).toEqual(eventMocked(1));
    });

    it("EVENT_SELECT", () => {
        const action = selectEvent(eventMocked(1));
        const state = eventReducer(
            initialState,
            action,
        );
        expect(initialState.tickets).toEqual([]);
        expect(initialState.event).toEqual(null);
        expect(state.tickets).toEqual([]);
        expect(state.event).toEqual(loadedEventReducerState().event);
    });
});


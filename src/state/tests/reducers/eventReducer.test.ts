import {apiRequest, apiSuccess, Method} from "../../actions/apiActions";
import {EventActionType, selectEvent} from "../../actions/eventActions";
import {eventReducer, initialState} from "../../reducers/eventReducer";
import {loadedEventReducerState} from "../mocks.state";
import {eventMocked, ticketMocked} from "../mocks.vm";

describe("eventReducer", () => {
    it("API_REQUEST EVENT_GET_TICKETS", () => {
        const action = apiRequest({}, Method.GET, "", EventActionType.EVENT_GET_TICKETS);
        const state = eventReducer(
            loadedEventReducerState,
            action,
        );
        expect(state.tickets).toEqual([]);
        expect(state.event).toBe(loadedEventReducerState.event);
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
                    date: new Date(),
                    description: "description1",
                    id: 1,
                    imageUrl: "imageUrl",
                    thumbnailImageUrl: "thumbnailImageUrl",
                    title: "title1",
                    veneuName: "veneuName",
                },
            ],
        }, EventActionType.EVENT_GET_BY_ID);
        const state = eventReducer(
            initialState,
            action,
        );

        expect(initialState.event).toEqual(null);
        expect(state.event.id).toEqual(1);
    });

    it("EVENT_SELECT", () => {
        const action = selectEvent(eventMocked(1));
        const state = eventReducer(
            initialState,
            action,
        );
        expect(initialState.tickets).toEqual([]);
        expect(state.tickets).toEqual([]);
        expect(initialState.event).toEqual(null);
        expect(state.event).toEqual(loadedEventReducerState.event);
    });
});


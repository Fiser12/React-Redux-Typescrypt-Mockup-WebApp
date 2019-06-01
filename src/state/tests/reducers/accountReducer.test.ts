import {AccountActionType, duplicateTicket, removeTicket, toggleState} from "../../actions/accountActions";
import {apiSuccess} from "../../actions/apiActions";
import {EventActionType} from "../../actions/eventActions";
import {accountReducer, initialState} from "../../reducers/accountReducer";
import {eventMocked, ticketMocked} from "../mocks.vm";
import {loadedAccountReducerState} from "../mocks.state";

describe("accountReducer", () => {
    it("API_SUCCESS ACCOUNT_GET_PURCHASED_TICKETS", () => {
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
                {
                    eventId: 2,
                    id: 2,
                    quantity: 1,
                    sellerId: 1,
                    status: false,
                    unit_price: 1,
                },
            ],
        }, AccountActionType.ACCOUNT_GET_PURCHASED_TICKETS);
        const state = accountReducer(
            initialState,
            action,
        );
        expect(initialState.eventsCache).toEqual([]);
        expect(state.eventsCache).toEqual([]);
        expect(initialState.tickets).toEqual([]);
        expect(state.tickets).toEqual([
            ticketMocked(1, 1, true),
            ticketMocked(2, 2, false),
        ]);
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
        const state = accountReducer(
            initialState,
            action,
        );
        expect(initialState.eventsCache).toEqual([]);
        expect(state.eventsCache).toEqual([eventMocked(1)]);
        expect(initialState.tickets).toEqual([]);
        expect(state.tickets).toEqual([]);
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
        const state = accountReducer(
            initialState,
            action,
        );
        expect(initialState.eventsCache).toEqual([]);
        expect(state.eventsCache).toEqual([eventMocked(1)]);
        expect(initialState.tickets).toEqual([]);
        expect(state.tickets).toEqual([]);
    });

    it("ACCOUNT_TOGGLE_STATE_TICKET", () => {
        const action = toggleState(1);
        const state = accountReducer(
            loadedAccountReducerState,
            action,
        );
        expect(loadedAccountReducerState.eventsCache).toEqual([
            eventMocked(1),
            eventMocked(2),
        ]);
        expect(loadedAccountReducerState.tickets).toEqual([
            ticketMocked(1, 1, true),
            ticketMocked(2, 1, true),
            ticketMocked(3, 1, true),
        ]);
        expect(state.eventsCache).toEqual([
            eventMocked(1),
            eventMocked(2),
        ]);
        expect(state.tickets).toEqual([
            ticketMocked(1, 1, false),
            ticketMocked(2, 1, true),
            ticketMocked(3, 1, true),
        ]);
    });

    it("ACCOUNT_REMOVE_TICKET", () => {
        const action = removeTicket(2);
        const state = accountReducer(
            loadedAccountReducerState,
            action,
        );

        expect(loadedAccountReducerState.eventsCache).toEqual([
            eventMocked(1),
            eventMocked(2),
        ]);
        expect(loadedAccountReducerState.tickets).toEqual([
            ticketMocked(1, 1, true),
            ticketMocked(2, 1, true),
            ticketMocked(3, 1, true),
        ]);
        expect(state.eventsCache).toEqual([
            eventMocked(1),
            eventMocked(2),
        ]);
        expect(state.tickets).toEqual([
            ticketMocked(1, 1, true),
            ticketMocked(3, 1, true),
        ]);
    });

    it("ACCOUNT_DUPLICATE_TICKET", () => {
        const action = duplicateTicket(2);
        const state = accountReducer(
            loadedAccountReducerState,
            action,
        );

        expect(loadedAccountReducerState.eventsCache).toEqual([
            eventMocked(1),
            eventMocked(2),
        ]);
        expect(loadedAccountReducerState.tickets).toEqual([
            ticketMocked(1, 1, true),
            ticketMocked(2, 1, true),
            ticketMocked(3, 1, true),
        ]);
        expect(state.eventsCache).toEqual([
            eventMocked(1),
            eventMocked(2),
        ]);
        expect(state.tickets).toEqual([
            ticketMocked(1, 1, true),
            ticketMocked(2, 1, true),
            ticketMocked(state.tickets[2].id, 1, true),
            ticketMocked(3, 1, true),
        ]);
    });
});


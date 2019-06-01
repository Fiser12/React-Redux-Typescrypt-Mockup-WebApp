import {
    AccountActionType,
    duplicateTicket,
    getTicketsPurchased,
    IDuplicateTicketAction,
    IRemoveTicketAction,
    IToggleStateAction,
    removeTicket,
    toggleState,
} from "../../actions/accountActions";
import {ApiActionType, IApiRequestAction, Method} from "../../actions/apiActions";

describe("actions::accountActions", () => {
    it("getTicketsPurchased", () => {
        const expectedAction: IApiRequestAction = {
            meta: {
                feature: AccountActionType.ACCOUNT_GET_PURCHASED_TICKETS,
                method: Method.GET,
                url: "/tickets?sellerId=1",
            },
            payload: {},
            type: `${ApiActionType.API_REQUEST} ${AccountActionType.ACCOUNT_GET_PURCHASED_TICKETS}`,
        };
        expect(getTicketsPurchased()).toEqual(expectedAction);
    });
    it("duplicateTicket", () => {
        const id: number = 1;

        const expectedAction: IDuplicateTicketAction = {
            payload: {
                id,
            },
            type: AccountActionType.ACCOUNT_DUPLICATE_TICKET,
        };
        expect(duplicateTicket(id)).toEqual(expectedAction);
    });
    it("removeTicket", () => {
        const id: number = 1;

        const expectedAction: IRemoveTicketAction = {
            payload: {
                id,
            },
            type: AccountActionType.ACCOUNT_REMOVE_TICKET,
        };
        expect(removeTicket(id)).toEqual(expectedAction);
    });
    it("toggleState", () => {
        const id: number = 1;

        const expectedAction: IToggleStateAction = {
            payload: {
                id,
            },
            type: AccountActionType.ACCOUNT_TOGGLE_STATE_TICKET,
        };
        expect(toggleState(id)).toEqual(expectedAction);
    });
});


import {IAccountState} from "../reducers/accountReducer";
import {IEventState} from "../reducers/eventReducer";
import {eventMocked, ticketMocked} from "./mocks.vm";

export const loadedEventReducerState = (): IEventState => {
        return {

            event: eventMocked(1),
            tickets: [
                ticketMocked(1, 1, true),
                ticketMocked(2, 1, true),
                ticketMocked(3, 1, true),
            ],
        };
    }
;

export const loadedAccountReducerState = (): IAccountState => {
        return {
            eventsCache: [
                eventMocked(1),
                eventMocked(2),
            ],
            tickets: [
                ticketMocked(1, 1, true),
                ticketMocked(2, 1, true),
                ticketMocked(3, 1, true),
            ],
        };
    }
;

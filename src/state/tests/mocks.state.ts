import {eventMocked, ticketMocked} from "./mocks.vm";

export const loadedEventReducerState = {
    event: eventMocked(1),
    tickets: [
        ticketMocked(1, 1, true),
        ticketMocked(2, 1, true),
        ticketMocked(3, 1, true),
    ],
};

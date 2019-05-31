import {IState} from "../store";
import {Event} from "../vm/event.vm";
import {Ticket} from "../vm/ticket.vm";

export const getEvents = (state: IState) => (): Event => (state.account.eventsCache);
export const getTickets = (state: IState) => (): Ticket[] => (state.account.tickets);

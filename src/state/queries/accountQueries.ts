import {Event} from "../vm/event.vm";
import {Ticket} from "../vm/ticket.vm";

export const getEvents = (state) => (): Event => (state.account.eventsCache);
export const getTickets = (state) => (): Ticket[] => (state.account.tickets);

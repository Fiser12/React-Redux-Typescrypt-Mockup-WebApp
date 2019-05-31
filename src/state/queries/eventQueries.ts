import {Event} from "../vm/event.vm";
import {Ticket} from "../vm/ticket.vm";

export const getEvent = (state) => (): Event => (state.event.event);
export const getTickets = (state) => (): Ticket[] => (state.event.tickets);

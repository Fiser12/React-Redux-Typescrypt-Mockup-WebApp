import {IState} from "../store";
import {Event} from "../vm/event.vm";
import {Ticket} from "../vm/ticket.vm";

export const getEvent = (state: IState) => (): Event => (state.event.event);
export const getTickets = (state: IState) => (): Ticket[] => (state.event.tickets);

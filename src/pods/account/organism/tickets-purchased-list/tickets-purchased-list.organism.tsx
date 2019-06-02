import * as React from "react";
import {Event} from "../../../../state/vm/event.vm";
import {Ticket} from "../../../../state/vm/ticket.vm";
import {CardTicketPurchased} from "../../molecule/card-ticket-purchased/card-ticket-purchased.molecule";
import "./tickets-purchased-list.organism.scss";

export interface IProps {
    events: Event[];
    tickets: Ticket[];
    duplicateTicket: (id: number) => void;
    removeTicket: (id: number) => void;
    toggleState: (id: number) => void;
}

export const TicketPurchasedList = (props: IProps) => {
    const {tickets, events, duplicateTicket, toggleState, removeTicket} = props;

    if (tickets == null) {
        return (
            <ul className="tickets-purchased-list">
            </ul>
        );
    }

    const getEventByTicketId = (ticketId) => events.filter((event: Event) => event.id === ticketId);
    const ticketsList = tickets.map((ticket: Ticket, key) =>
        <CardTicketPurchased
            key={key}
            ticket={ticket}
            event={getEventByTicketId(ticket.eventId)[0]}
            duplicateTicketDispatch={duplicateTicket}
            toggleStateDispatch={toggleState}
            removeTicketDispatch={removeTicket}
        />,
    );

    return (
        <ul className="tickets-purchased-list">
            {ticketsList}
        </ul>
    );

};
